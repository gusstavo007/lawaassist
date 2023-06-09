const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const chatgptservice = require("../services/chatgtp-service");

async function Process(textUser, number) {




    textUser = textUser.toLowerCase();
    var models = [];

    //#region sin chat gpt



    if (textUser.includes("hola")) {
        //SAUDAR
        var model = whatsappModel.MessageText("Hola, un gusto saludarte. 👋, recueda que la información proporcionada debe revisar con un profesional en Leyes. 😊", number);
        models.push(model);


        var model = whatsappModel.MessageText("Soy un bot que ayudará con conceptos básicos en Derecho, que pueden ser de tu utilidad en el día a día 😎, el formato es QUIERO CONOCER: Ley universitaría", number);
        models.push(model);

        //var modelList = whatsappModel.MessageList(number);
        //models.push(modelList);



    } else if (textUser.includes("gracias")) {
        // agradecimiento
        var model = whatsappModel.MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);

    } else if (textUser.includes("adios") || textUser.includes("adiós") || textUser.includes("bye") || textUser.includes("me voy")) {
        // despedir
        var model = whatsappModel.MessageText("Ve con cuidado. 😊", number);
        models.push(model);

    } else if (textUser.includes("quiero") || textUser.includes("conocer") ||  textUser.includes("Qué")) {
        //  

        var model = whatsappModel.MessageText("Estoy preparando tu repuesta..", number);
        models.push(model);

        textUser = "Actua como un experto abogado de perú, y resume lo más relevante e importante : " + textUser + ", que la respuesta sea muy clara, precisa y solo para Perú, Explícalo en menos de 80 palabras";

        const resultChatGPT = await chatgptservice.GetMessageChatGPT(textUser);
        var model = whatsappModel.MessageText(resultChatGPT, number);
        models.push(model);

    } else if (textUser.includes("aprendas ")) {

        textUser = "quiero que  " + textUser + ", y cada vez que te pregunte por este tema quiero que me respondas este nuevo aprendizaje";

        const resultChatGPT = await chatgptservice.GetMessageChatGPT(textUser);
        var model = whatsappModel.MessageText(resultChatGPT, number);
        models.push(model);

    } else {
        //No entiende
        var model = whatsappModel.MessageText("No entiendo la consulta " + textUser + "", number);
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
        return resultChatGPT;
    } else {
        return "Algo salió mal, inténtalo más tarde";
    }

}

module.exports = {
    Process
};