import PageMiCuenta from '..//page_object_model/page_mi_cuenta';
import PageHome from '..//page_object_model/page_home';
import {getURL} from '../helpers/helpers';
import {dataCreateAccount} from '../helpers/data';
fixture('Creation account')
    .page(getURL);
test('Creation account with main data required ', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.typeEmailAddressAccount(t, dataCreateAccount.email);
        await PageMiCuenta.clickOnCreateAccountBtn(t);
        
        await PageMiCuenta.typeFirstNameAccount(t, dataCreateAccount.firstName);
        await PageMiCuenta.typeLastNameAccount(t, dataCreateAccount.lastName);
        // validation the email prefilled
        await t.expect(PageMiCuenta.selectors.emailTxt.value).eql(dataCreateAccount.email);

        await PageMiCuenta.typePasswordAccount(t, dataCreateAccount.password);
        // validation name and lastname prefilled
        await t.expect(PageMiCuenta.selectors.yourAddressFirstNameTxt.value).eql(dataCreateAccount.firstName);
        await t.expect(PageMiCuenta.selectors.yourAddresLastNameAddressTxt.value).eql(dataCreateAccount.lastName);

        await PageMiCuenta.typeAddressAccount(t, dataCreateAccount.pbox);
        await PageMiCuenta.typeCityAccount(t, dataCreateAccount.city);
        await PageMiCuenta.selectOneState(t,dataCreateAccount.stateName);
        await PageMiCuenta.typePostalCodeAccount(t, dataCreateAccount.postalCode);
        await PageMiCuenta.typeHomePhoneAccount(t, dataCreateAccount.homePhone);
          
        await PageMiCuenta.clickOnRegisterButton(t);
        // validation the creation account and shows the full name of the customer
        await t.expect(PageHome.selectors.viewAccount_Link.textContent).eql(dataCreateAccount.firstName+' '+dataCreateAccount.lastName);

});
test('Validate the alert danger is displayed when some field is missing', async t => {
    await PageMiCuenta.clickOnSignIn_Link(t);
    await PageMiCuenta.typeEmailAddressAccount(t, dataCreateAccount.email);
    await PageMiCuenta.clickOnCreateAccountBtn(t);
    
    await PageMiCuenta.typeFirstNameAccount(t, dataCreateAccount.firstName);
    await PageMiCuenta.typeLastNameAccount(t, dataCreateAccount.lastName);
    // validation the email prefilled
    await t.expect(PageMiCuenta.selectors.emailTxt.value).eql(dataCreateAccount.email);

    await PageMiCuenta.typePasswordAccount(t, dataCreateAccount.password);
    
      
    await PageMiCuenta.clickOnRegisterButton(t);
    // validation the creation account and shows the full name of the customer
    await t.expect(PageHome.selectors.viewAccount_Link.textContent).eql(dataCreateAccount.firstName+' '+dataCreateAccount.lastName);

});