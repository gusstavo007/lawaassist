const { Configuration, OpenAIApi } = require("openai");

async function GetMessageChatGPT(text) {

    const configuration = new Configuration({ apiKey: "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" })


    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 100
    });


    if (response.status == 200 && response.data.choices.lenght > 0)
        return response.data.choices[0].text;

    return null;

}


module.exports = {

    GetMessageChatGPT
};