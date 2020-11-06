import {dataCreateAccount} from '../helpers/data';
import {Selector} from 'testcafe';
console.log("que es lo del nom", dataCreateAccount.firstName+ +dataCreateAccount.lastName);
class PageMiCuenta{
    constructor(){
            this.selectors = {
            viewAccount_Link: Selector('a').withText(dataCreateAccount.firstName+' '+dataCreateAccount.lastName),   
            //viewAccount_Link: Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a'),  
            emailTxt: Selector('#email_create'),
            createAccountBtn: Selector('#SubmitCreate'),
            firstnameTxt: Selector('#customer_firstname'),
            lastnameTxt: Selector('#customer_lastname'),
            emailLbl:Selector('#email'),
            passwordTxt: Selector('#passwd'),
            firstNameAddressTxt: Selector('#firstname'),
            lastNameAddressTxt: Selector('#lastname'),
            addressTxt: Selector('#address1'),
            registerAccountBtn: Selector('#submitAccount'),
            cityTxt: Selector('#city'),
            postalCodetxt: Selector('#postcode'),
            homePhonetxt: Selector('#phone'),
            stateDropDown: Selector('#id_state'),
            nameStateDropDownOption: Selector('#id_state'),//.fine('option')
            stateDropDownSelect: Selector('#uniform-id_state > span')
        }
    }
    clickOnSignIn_Link = async t => {
        await t.expect(this.selectors.signIn_Link.visible).eql(true);
        await t.click(this.selectors.signIn_Link);
        `${this.selectors.occupantCollectionPanel} ${this.selectors.commonPersonCardMenuListItem}`
    }

    async typeEmailAddressAccount(t, email){
        await t.expect(this.selectors.emailTxt.value).eql('');
        await t.typeText(this.selectors.emailTxt, email);
        await t.expect(this.selectors.emailTxt.value).eql(email);
    }

    clickOnCreateAccountBtn = async t => {
        await t.expect(this.selectors.createAccountBtn.visible).eql(true);
        await t.click(this.selectors.createAccountBtn);
    }

    async typeFirstNameAccount(t, name){
        await t.typeText(this.selectors.firstnameTxt, name);
        await t.expect(this.selectors.firstnameTxt.value).eql(name);
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
        await t.typeText(this.selectors.firstNameAddressTxt, firstAddress);
        await t.expect(this.selectors.firstNameAddressTxt.value).eql(firstAddress);
    }

    async typeLastNameAddressAccount(t, lastNameAddress){
        await t.typeText(this.selectors.lastNameAddressTxt, lastNameAddress);
        await t.expect(this.selectors.lastNameAddressTxt.value).eql(lastNameAddress);
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
        //await t.expect(this.selectors.stateDropDown.value).eql(stateName);
    }
}

export default new PageMiCuenta();