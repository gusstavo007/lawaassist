const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");

const VerifyToken = (req, res) => {

    try {
        var accessToken = process.env.ACCESS_TOKEN;

        //res.status(400).send();

        if (challenge != null && token != null && token == accessToken) {

            console.log("tocken verificado");
            res.send(challenge);
        } else {
            res.status(400).send();

            console.log("token ERROR");
        }


    } catch (e) {
        res.status(400).send();
    }
}

async function ReceivedMessage(req, res) {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];



        if (typeof messageObject != "undefined") {
            var messages = messageObject[0];
            var number = messages["from"];

            var text = GetTextUser(messages);

            if (text != "") {
                await processMessage.Process(text, number);
            }

        }

        res.send("EVENT_RECEIVED");
    } catch (e) {
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
}

function GetTextUser(messages) {
    var text = "";
    var typeMessge = messages["type"];
    if (typeMessge == "text") {
        text = (messages["text"])["body"];
    } else if (typeMessge == "interactive") {

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];

        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        } else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        } else {
            myConsole.log("sin mensaje");
        }
    } else {
        myConsole.log("sin mensaje");
    }

    return text;
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}