let rndNumber = Math.random().toString(36).substr(1,4);

let dataCreateAccount = {
    email: 'dummy' + rndNumber + '@mailinator.com',
    firstName: "Ted",
    lastName: "Tamas",
    password: "88888",
    pbox: "PO Box 7687",
    city: "Los Angeles",
    postalCode: "90005",
    homePhone: "213-613-9523",
    stateName: "Arkansas"
}

export {dataCreateAccount}