const express = require('express');
const app = express();
const { Configuration, OpenAIApi } = require("openai");


app.use(express.json());

app.post('/chat', async(req, res) => {




    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        });

        /*
        const prompt = req.body.prompt;
        const chatOpts = {
            engine: 'davinci',
            prompt,
            max_tokens: 150,
            temperature: 0.5,
            stop: ['\n']
        };*/


        console.log(" <------------- inio ------------ chatOpts: ");
        console.log(response);


        const chatResult = response.choices[0].text.trim();
        res.send(chatResult);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }






});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});