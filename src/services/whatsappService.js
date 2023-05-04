const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");

const botId = '102593046165379';
const phoneNbr = '51962739933';
const bearerToken = 'EAADetDkvM9UBANnFloRtzpEuTM0ph8TdcJQK4i0bBvh9V52Prd6lOxB02BDm731NmTlOzyf14l3aUGLtelEcfTwDpMHdsH8YyJeADIVIlgFPPeJ7AZA82G8nw3FYW8StHXaZAQ30zi2SBki40QXbQyiZATPGKWkSsT74o1eWEm4fZB3n4s0w3TXMopO9JkQqoZBUQDsDk0kDoFahpFGMV9wL9NUmUw2oZD';


function SendMessageWhatsApp(data) {



    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/" + botId + "/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + bearerToken
        }
    };
    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};