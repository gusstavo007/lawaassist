const https = require("https");

function SendMessageWhatsApp(data) {

    const botId = process.env.BOT_ID;
    const bearerToken = process.env.BEARER_TOKEN;

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