let rndNumber = Math.random().toString(36).substr(1,4);

let dataCreateAccount = {
    email: 'dummy_1' + rndNumber + '@mailinatoor.com',
    newemail: 'dummy_1' + rndNumber + '@mailinatoor.com',
    firstName: "Todde",
    lastName: "Thamas",
    password: "88888",
    pbox: "PO Box 7687",
    city: "Los Angeles",
    postalCode: "90005",
    homePhone: "213-613-9523",
    stateName: "Arkansas"
}

export const creationAccountWithEmailRegisteredError="An account using this email address has already been registered. Please enter a valid password or request a new one. ";
export const forgotYourPasswordTitle="Forgot your password?";
export const informationForRetrievePassword="Please enter the email address you used to register. We will then send you a new password. ";
export const alertRetrievePasswordSuccessMessage="A confirmation email has been sent to your address:"
export const alertRetrievePasswordUnSuccessMessage ="There is no account registered for this email address."
export const alertInvalidEmailMessage="Invalid email address.";

export {dataCreateAccount}