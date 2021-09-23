// CREATING THE COMPANIES OBJECT
let companies = `[

    {
        "name": "Facebook",
        "numberOfEmployees": 10000,
        "ceo": "Mark",
        "rating": 8.5
    },

    {
        "name": "Apple",
        "numberOfEmployees": 20000,
        "ceo": "Jobs",
        "rating": 7.5
    },

    {
        "name": "Startup Company",
        "numberOfEmployees": 500,
        "ceo": null,
        "rating": 4.3
    }
]`

let companiesObject = JSON.parse(companies);

// AS A JS OBJECT, CERTAIN INFORMATION CAN NOW BE PULLED FROM THE JSON DATA
console.log((companiesObject)[0].ceo);
console.log((companiesObject)[1].name);
console.log((companiesObject)[2].rating);



