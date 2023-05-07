const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");

const botId = '102593046165379';
const phoneNbr = '51962739933';
const bearerToken = 'EAADetDkvM9UBAHSzZAT85h1tPlKZCVSLRLqiF1o4NZB2vM1bGB8KMUwZCacCtD0kaR56abdaZAYtu7URkJC4pkZA0XAfObJd8XvZBz4Rw8PS2RxpMiA9NVlHNZCvU5bdXebOlmR72VRpOulHbIiVq5ZCRqj40kWuo2lU46H1H77u94GQam8xH5CiCaou5ABQBTzZCbEcKe0lJrNsstZBKWJYD3dZA9ZBgRci9yvoZD';


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