// const mailchimp = require("@mailchimp/mailchimp_marketing");
// const express = require('express');

// const app = express();

// mailchimp.setConfig({
//     apiKey: "7bebce77391ca764ea7cab04a5076be7-us13",
//     server: "us13"
// });

// // const event = {
// //     name: "JS Developers Meetup"
// // };

// // const footerContactInfo = {
// //     company: "Mailchimp",
// //     address1: "675 Ponce de Leon Ave NE",
// //     address2: "Suite 5000",
// //     city: "Atlanta",
// //     state: "GA",
// //     zip: "30308",
// //     country: "US"
// // };

// // const campaignDefaults = {
// //     from_name: "Gettin' Together",
// //     from_email: "gettintogether@example.com",
// //     subject: "JS Developers Meetup",
// //     language: "EN_US"
// // };

// // async function run() {
// //     const response = await mailchimp.lists.createList({
// //         name: event.name,
// //         contact: footerContactInfo,
// //         permission_reminder: "permission_reminder",
// //         email_type_option: true,
// //         campaign_defaults: campaignDefaults
// //     });

// //     console.log(
// //         `Successfully created an audience. The audience id is ${response.id}.`
// //     );
// // }

// // run();



// const listId = "5f482e1d0e";
// // const subscribingUser = {
// //     firstName: "Prudence",
// //     lastName: "McVankab",
// //     email: "prudence.mcvankab@example.com"
// // };

// async function run() {
//     const response = await mailchimp.lists.addListMember(listId, {
//         email_address: "fol@gmail.com",
//         status: "subscribed",
//         merge_fields: {
//             FNAME: "tomiwa",
//             LNAME: "folayan"
//         }
//     });

//     console.log(
//         `Successfully added contact as an audience member. The contact's id is ${
//       response.id
//     }.`
//     );
// }

// run();



// app.listen(3000, function() {
//     console.log("Running on port 3000");
// });





// // const client = require("mailchimp-marketing");

// // client.setConfig({
// //     apiKey: "YOUR_API_KEY",
// //     server: "YOUR_SERVER_PREFIX",
// // });

// // const run = async() => {
// //     const response = await client.lists.addListMember("list_id", {
// //         email_address: "Ebony_Brekke@gmail.com",
// //         status: "pending",
// //         merge_fields: {
// //             FNAME: subscribingUser.firstName,
// //             LNAME: subscribingUser.lastName
// //         }
// //     });
// //     console.log(response);
// // };

// // run();


// // // const mailchimp = require('@mailchimp/mailchimp_marketing');

// // // mailchimp.setConfig({
// // //     apiKey: '7bebce77391ca764ea7cab04a5076be7-us13',
// // //     server: 'us13',
// // // });

// // // async function callPing() {
// // //     const response = await mailchimp.ping.get();
// // //     console.log(response);
// // // }

// // // callPing();



const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: "7bebce77391ca764ea7cab04a5076be7-us13",
    server: "us13",
});

const listId = "YOUR_LIST_ID";
const subscribingUser = {
    firstName: "Prudence",
    lastName: "McVankab",
    email: "prudence.mcvankab@example.com"
};

async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
            FNAME: subscribingUser.firstName,
            LNAME: subscribingUser.lastName
        }
    });

    console.log(
        `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
    );
}

run();