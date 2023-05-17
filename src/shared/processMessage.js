const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const chatgptservice = require("../services/chatgtp-service");

async function Process(textUser, number) {

    textUser = textUser.toLowerCase();
    var models = [];

    //#region sin chat gpt


    if (textUser.includes("hola")) {
        //SAUDAR
        var model = whatsappModel.MessageText("Hola, un gusto saludarte. 👋, recueda que la información proporcionada se debe revisar con un profesional de Leyes. 😊", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    } else if (textUser.includes("gracias")) {
        // agradecimiento
        var model = whatsappModel.MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);

    } else if (textUser.includes("adios") ||
        textUser.includes("adiós") ||
        textUser.includes("bye") ||
        textUser.includes("me voy")
    ) {
        // despedir
        var model = whatsappModel.MessageText("Ve con cuidado. 😊", number);
        models.push(model);
    } else if (textUser.includes("1.")) {
        //  

        var model = whatsappModel.MessageText("por favor indícame el número de ley con el formato LEY ABCY", number);

        models.push(model);

    } else if (textUser.includes("LEY")) {
        //  
        textUser = "Actua como un experto abogado peruano y dime de qué trata la ley: " + textUser + ", solo para Perú y explicalo en menos de 100 palabras";

        var model = consultarChatGPT(textUser);
        models.push(model);

    } else if (textUser.includes("2.")) {
        //  

        var model = whatsappModel.MessageText("por favor indícame el proyecto que quieres conocer el formato PROYECTO ABCY", number);

        models.push(model);

    } else if (textUser.includes("PROYECTO")) {
        //  
        textUser = "Actua como un experto abogado peruano y dime de qué trata el proyecto de ley: " + textUser + ", solo para Perú y explicalo en menos de 100 palabras";

        var model = consultarChatGPT(textUser);
        models.push(model);

    } else if (textUser.includes("3.")) {
        //  

        var model = whatsappModel.MessageText("por favor indícame qué te gustaría conocer con el formato: OTROS Me gustaría saber sobre .... ", number);

        models.push(model);

    } else if (textUser.includes("OTROS")) {
        //  
        textUser = "Actua como un experto abogado peruano y dime de qué trata : " + textUser + ", solo para Perú y explicalo en menos de 100 palabras";

        var model = consultarChatGPT(textUser);
        models.push(model);

    } else {
        //No entiende
        var model = whatsappModel.MessageText("No entiendo lo que dices", number);
        models.push(model);
    }


    //#endregion

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });



}


async function consultarChatGPT(textUser) {

    const resultChatGPT = await chatgptservice.GetMessageChatGPT(textUser);
    if (resultChatGPT != null) {
        return whatsappModel.MessageText(resultChatGPT, number);
    } else {
        return whatsappModel.MessageText("Algo salió mal, inténtalo más tarde", number);
        //models.push(model);
    }

}

module.exports = {
    Process
};