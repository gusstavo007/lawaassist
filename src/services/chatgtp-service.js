const { Configuration, OpenAIApi } = require("openai");



async function GetMessageChatGPT(text) {

    try {


        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });

        //    model: "text-davinci-003",
        //     prompt: text,
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({

            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": text }],

            temperature: 0.7,
            max_tokens: 1000,
        });
        console.error('<---------- GetMessageChatGPT ------->');
        console.log(response.data.choices);
        console.error('<---------- GetMessageChatGPT ------->');
        console.log(response.data);

        return response;
        //return response.data.choices[0].text.trim();


    } catch (error) {
        console.error('<---------- GetMessageChatGPT ------->');
        console.error(error);
        return null;
    }

    return null;

}


module.exports = { GetMessageChatGPT };