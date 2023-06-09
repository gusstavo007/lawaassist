const { Configuration, OpenAIApi } = require("openai");



async function GetMessageChatGPT(text) {

    try {


        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });


        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({

            model: "text-davinci-003",
            prompt: text,
            temperature: 0.7,
            max_tokens: 1000,
        });

        console.log(response.data.choices);


        return response.data.choices[0].text.trim();


    } catch (error) {
        console.error('<---------- GetMessageChatGPT ------->');
        console.error(error);
        return null;
    }

    return null;

}


module.exports = { GetMessageChatGPT };