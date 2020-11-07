import {Selector} from 'testcafe';
class PageMiCuenta{
    constructor(){
            this.selectors = {
            signIn_Link: Selector('a').withText('Sign in'),   
            emailToCreateAccountTxt: Selector('#email_create'),
            createAccountBtn: Selector('#SubmitCreate'),
            firstnameTxt: Selector('#customer_firstname'),
            lastnameTxt: Selector('#customer_lastname'),
            emailLbl:Selector('#email'),
            passwordTxt: Selector('#passwd'),
            yourAddressFirstNameTxt: Selector('#firstname'),
            yourAddresLastNameAddressTxt: Selector('#lastname'),
            addressTxt: Selector('#address1'),
            registerAccountBtn: Selector('#submitAccount'),
            cityTxt: Selector('#city'),
            postalCodetxt: Selector('#postcode'),
            homePhonetxt: Selector('#phone'),
            stateDropDown: Selector('#id_state'),
            nameStateDropDownOption: Selector('#id_state'),
            stateDropDownSelect: Selector('#uniform-id_state > span'),
            emailTxt: Selector('#email'),
            alertDangerCreationAccountFieldRequired: Selector('#center_column > div'), //}
            alertDangerErrorExistingAccount: Selector('#create_account_error'),
            emailAddressToSignInTxt: Selector('#email'),
            passwordAddressToSignInTxt: Selector('#passwd'),
            signInBtn: Selector('#SubmitLogin'),
            signOut_Link: Selector('a').withText('Sign out'),
            forgotYourPassword_Link: Selector('a').withText('Forgot your password?'),
            forgotYourPasswordTitleLbl: Selector('#center_column > div > h1'),
            forgotYourPasswordMessageLbl: Selector('#center_column > div > p'),
            emailAddressForgotPasswordTxt: Selector('#email'),
            retrievePasswordBtn: Selector('#form_forgotpassword > fieldset > p > button'),
            alertRetrievePasswordSuccess: Selector('#center_column > div > p'),
            alertRetrievePasswordUnSuccess: Selector('#center_column > div > div > ol > li'),
            invalidEmailAddressMessageLbl: Selector('#center_column > div > div > ol > li')
        }
    }
    clickOnForgotYourPassword_Link = async t => {
        await t.expect(this.selectors.forgotYourPassword_Link.visible).eql(true);
        await t.click(this.selectors.forgotYourPassword_Link);
    }

    clickOnForgotYourPasswordBtn = async t => {
        await t.expect(this.selectors.retrievePasswordBtn.visible).eql(true);
        await t.click(this.selectors.retrievePasswordBtn);
    }

    async typeEmailAddressForgotPassword(t, email){
        await t.expect(this.selectors.emailAddressForgotPasswordTxt.value).eql('');
        await t.typeText(this.selectors.emailAddressForgotPasswordTxt, email);
        await t.expect(this.selectors.emailAddressForgotPasswordTxt.value).eql(email);
    }

    clickOnSignIn_Link = async t => {
        await t.expect(this.selectors.signIn_Link.visible).eql(true);
        await t.click(this.selectors.signIn_Link);
    }

    clickOnSignOut_Link = async t => {
        await t.expect(this.selectors.signOut_Link.visible).eql(true);
        await t.click(this.selectors.signOut_Link);
    }

    async typeEmailAddressAccount(t, email){
        await t.expect(this.selectors.emailToCreateAccountTxt.value).eql('');
        await t.typeText(this.selectors.emailToCreateAccountTxt, email);
        await t.expect(this.selectors.emailToCreateAccountTxt.value).eql(email);
    }

    clickOnCreateAccountBtn = async t => {
        await t.expect(this.selectors.createAccountBtn.visible).eql(true);
        await t.click(this.selectors.createAccountBtn);
    }

    async typeFirstNameAccount(t, name){
        await t.typeText(this.selectors.firstnameTxt, name);
        await t.expect(this.selectors.firstnameTxt.value).eql(name);
    }

    async typeEmailAddressToSignIn(t, email){
        await t.typeText(this.selectors.emailAddressToSignInTxt, email);
        await t.expect(this.selectors.emailAddressToSignInTxt.value).eql(email);
    }

    async typePasswordToSignIn(t, password){
        await t.typeText(this.selectors.passwordAddressToSignInTxt, password);
        await t.expect(this.selectors.passwordAddressToSignInTxt.value).eql(password);
    }

    clickOnSignInBtn = async t => {
        await t.expect(this.selectors.signInBtn.visible).eql(true);
        await t.click(this.selectors.signInBtn);
    }

    async typeLastNameAccount(t, lastName){
        await t.typeText(this.selectors.lastnameTxt, lastName);
        await t.expect(this.selectors.lastnameTxt.value).eql(lastName);
    }

    async typePasswordAccount(t, password){
        await t.typeText(this.selectors.passwordTxt, password);
        await t.expect(this.selectors.passwordTxt.value).eql(password);
    }

    async typeFirstNameAddressAccount(t, firstAddress){
        await t.typeText(this.selectors.yourAddressFirstNameTxt, firstAddress);
        await t.expect(this.selectors.yourAddressFirstNameTxt.value).eql(firstAddress);
    }

    async typeLastNameAddressAccount(t, lastNameAddress){
        await t.typeText(this.selectors.yourAddresLastNameAddressTxt, lastNameAddress);
        await t.expect(this.selectors.yourAddresLastNameAddressTxt.value).eql(lastNameAddress);
    }

    async typeAddressAccount(t, address){
        await t.typeText(this.selectors.addressTxt, address);
    }
    
    async typeCityAccount(t, city){
        await t.typeText(this.selectors.cityTxt, city);
    }


    clickOnRegisterButton = async t => {
        await t.click(this.selectors.registerAccountBtn);
    }

    async typePostalCodeAccount(t, postalCode){
        await t.typeText(this.selectors.postalCodetxt, postalCode);
    }

    async typeHomePhoneAccount(t, homePhone){
        await t.typeText(this.selectors.homePhonetxt, homePhone);
    }

    async selectOneState(t, stateName){
        await t.click(this.selectors.stateDropDown);
        await t.click(this.selectors.stateDropDown.find('option').withText(stateName));
        // todo validation
        //await t.expect(this.selectors.stateDropDown.value).eql(stateName);
    }
}

export default new PageMiCuenta();