const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");

const botId = '102593046165379';
const phoneNbr = '51962739933';
const bearerToken = 'EAADetDkvM9UBAGHlrK7vzL0xDQE8sFikcsfqFRulxusuVofm3VzdqviBkQMy3siKRGFTd0W7SNZBR2LWocjMvm5HURyUVbZB4pZCs4WlziklwzCOI358e9g4mzq4rObDSYfw6eZB2LPTnEyaE3MJ1wPFTQojb5H1RpkUzngPZCZCeV4STqFZAjDiLZADZAx777BTp8JLRswcnFwoKL65dFZAR9BMb4tZA0RWJEZD';


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