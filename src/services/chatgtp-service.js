const { Configuration, OpenAIApi } = require("openai");



async function GetMessageChatGPT(text) {

    try {


        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);


        console.log(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 1000,
        });


        console.log(response.data.choices[0].text);


        return response.data.choices[0].text.trim();
        //res.send(chatResult);
    } catch (error) {
        console.error(error);
        return null;
    }

    return null;

}


module.exports = {

    GetMessageChatGPT
};