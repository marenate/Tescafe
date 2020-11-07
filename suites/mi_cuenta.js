import PageMiCuenta from '..//page_object_model/page_mi_cuenta';
import PageHome from '..//page_object_model/page_home';
import {getURL} from '../helpers/helpers';
import {dataCreateAccount, creationAccountWithEmailRegisteredError, forgotYourPasswordTitle, informationForRetrievePassword, alertRetrievePasswordSuccessMessage, alertRetrievePasswordUnSuccessMessage, alertInvalidEmailMessage} from '../helpers/data';
fixture('Creation account')
    .page(getURL);

test('Creation account with main data required ', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.typeEmailAddressAccount(t, dataCreateAccount.email);
        await PageMiCuenta.clickOnCreateAccountBtn(t);
        
        await PageMiCuenta.typeFirstNameAccount(t, dataCreateAccount.firstName);
        await PageMiCuenta.typeLastNameAccount(t, dataCreateAccount.lastName);
        // validation the email prefilled
        await t.takeScreenshot();
        await t.expect(PageMiCuenta.selectors.emailTxt.value).eql(dataCreateAccount.email);

        await PageMiCuenta.typePasswordAccount(t, dataCreateAccount.password);
        // validation name and lastname prefilled
        await t.takeScreenshot();
        await t.expect(PageMiCuenta.selectors.yourAddressFirstNameTxt.value).eql(dataCreateAccount.firstName);
        await t.expect(PageMiCuenta.selectors.yourAddresLastNameAddressTxt.value).eql(dataCreateAccount.lastName);

        await PageMiCuenta.typeAddressAccount(t, dataCreateAccount.pbox);
        await PageMiCuenta.typeCityAccount(t, dataCreateAccount.city);
        await PageMiCuenta.selectOneState(t,dataCreateAccount.stateName);
        await PageMiCuenta.typePostalCodeAccount(t, dataCreateAccount.postalCode);
        await PageMiCuenta.typeHomePhoneAccount(t, dataCreateAccount.homePhone);
          
        await PageMiCuenta.clickOnRegisterButton(t);
        // validation the creation account and shows the full name of the customer
        await t.takeScreenshot();
        await t.expect(PageHome.selectors.viewAccount_Link.textContent).eql(dataCreateAccount.firstName+' '+dataCreateAccount.lastName);
});

fixture('Creation account with email already been registered')
    .page(getURL);
    
test('Validate cannot be created account with email already been registered', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.typeEmailAddressAccount(t, dataCreateAccount.email);
        await PageMiCuenta.clickOnCreateAccountBtn(t);
    
        // validation the alert should show with message
        await t.takeScreenshot();
        await t.expect(PageMiCuenta.selectors.alertDangerErrorExistingAccount.textContent).eql(creationAccountWithEmailRegisteredError);
});

fixture('Creation account with missing information')
    .page(getURL);
    
test('Validate the alert danger is displayed when some field is missing', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.typeEmailAddressAccount(t, dataCreateAccount.newemail);
        await PageMiCuenta.clickOnCreateAccountBtn(t);
    
        await PageMiCuenta.typeFirstNameAccount(t, dataCreateAccount.firstName);
        await PageMiCuenta.typeLastNameAccount(t, dataCreateAccount.lastName);
        // validation the email prefilled
        await t.takeScreenshot();
        await t.expect(PageMiCuenta.selectors.emailTxt.value).eql(dataCreateAccount.newemail);

        await PageMiCuenta.typePasswordAccount(t, dataCreateAccount.password);
        await PageMiCuenta.clickOnRegisterButton(t);
        // validation the creation account and shows the full name of the customer
        await t.takeScreenshot();
        await t.expect(PageMiCuenta.selectors.alertDangerCreationAccountFieldRequired.visible).ok();
});

fixture('Sign In with account already been registered')
    .page(getURL);
    
test('Validate the sing in with existing account', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.typeEmailAddressToSignIn(t, dataCreateAccount.email);
        await PageMiCuenta.typePasswordToSignIn(t, dataCreateAccount.password);
        await PageMiCuenta.clickOnSignInBtn(t);
        await t.takeScreenshot();
        // validation should show the full name of the customer
        await t.expect(PageHome.selectors.viewAccount_Link.textContent).eql(dataCreateAccount.firstName+' '+dataCreateAccount.lastName);
        
});

test('Verify the Sign Out after been signed', async t => {
    await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.typeEmailAddressToSignIn(t, dataCreateAccount.email);
        await PageMiCuenta.typePasswordToSignIn(t, dataCreateAccount.password);
        await PageMiCuenta.clickOnSignInBtn(t);
        await t.takeScreenshot();
        // validate should show the full name of the customer
        await t.expect(PageHome.selectors.viewAccount_Link.textContent).eql(dataCreateAccount.firstName+' '+dataCreateAccount.lastName);
        await PageMiCuenta.clickOnSignOut_Link(t);
        await t.takeScreenshot();
        // validate the sign out should missed
        await t.expect(PageMiCuenta.selectors.signOut_Link.visible).notOk()
});

test('Verify retrieve password with email registered', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.clickOnForgotYourPassword_Link(t);
        await t.takeScreenshot();
        // validate the title of forgot your password and the instruction message
        await t.expect(PageMiCuenta.selectors.forgotYourPasswordTitleLbl.textContent).eql(forgotYourPasswordTitle);
        await t.expect(PageMiCuenta.selectors.forgotYourPasswordMessageLbl.textContent).eql(informationForRetrievePassword);
        await PageMiCuenta.typeEmailAddressForgotPassword(t, dataCreateAccount.email);
        await PageMiCuenta.clickOnForgotYourPasswordBtn(t);
        await t.takeScreenshot();
        // validate the message and the email should show
        await t.expect(PageMiCuenta.selectors.alertRetrievePasswordSuccess.textContent).eql(alertRetrievePasswordSuccessMessage+' '+dataCreateAccount.email);
});

test('Verify retrieve password with email address not registered', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.clickOnForgotYourPassword_Link(t);
        await t.takeScreenshot();
        // validate the title of forgot your password and the instruction message
        await t.expect(PageMiCuenta.selectors.forgotYourPasswordTitleLbl.textContent).eql(forgotYourPasswordTitle);
        await t.expect(PageMiCuenta.selectors.forgotYourPasswordMessageLbl.textContent).eql(informationForRetrievePassword);
        await PageMiCuenta.typeEmailAddressForgotPassword(t, dataCreateAccount.newemail);
        await PageMiCuenta.clickOnForgotYourPasswordBtn(t);
        await t.takeScreenshot();
        // validate the unsuccess message should show
        await t.expect(PageMiCuenta.selectors.alertRetrievePasswordUnSuccess.textContent).eql(alertRetrievePasswordUnSuccessMessage);
});

test('Verify retrieve password with invalid email address', async t => {
        await PageMiCuenta.clickOnSignIn_Link(t);
        await PageMiCuenta.clickOnForgotYourPassword_Link(t);
        await t.takeScreenshot();
        await t.expect(PageMiCuenta.selectors.forgotYourPasswordTitleLbl.textContent).eql(forgotYourPasswordTitle);
        await t.expect(PageMiCuenta.selectors.forgotYourPasswordMessageLbl.textContent).eql(informationForRetrievePassword);
        await PageMiCuenta.typeEmailAddressForgotPassword(t, 'abcd@12');
        await PageMiCuenta.clickOnForgotYourPasswordBtn(t);
        await t.takeScreenshot();
        // validate the alert bannes should show and the message
        await t.expect(PageMiCuenta.selectors.alertDangerCreationAccountFieldRequired.visible).ok();
        await t.expect(PageMiCuenta.selectors.invalidEmailAddressMessageLbl.textContent).eql(alertInvalidEmailMessage);
});