var botId = '102593046165379';
var phoneNbr = '51962739933';
var bearerToken = 'EAADetDkvM9UBAHyR1DekRhJTePiLhD4oZAY8C4SXInXq2dMN0qAyMuLvcZBrkCISrFOZCZA3dG0Jn1ufFxWjLA68aM1JSgvZC5ZC8dO7sO9jgLD0ZA8MrSdxQLDNg1yyvf6QvqokVjtKgZAQQTpfMYQrMEmi5GFrixkb58dGE9bbpNW3cPvj0CvEDDd9V0jghZCXfppMVU08tdjUsOTIKn8j945icsZAH3ug4ZD';

var url = 'https://graph.facebook.com/v16.0/' + botId + '/messages';
var data = {
    messaging_product: 'whatsapp',
    to: phoneNbr,
    type: 'text',
    text: {
        body: 'Hola desde acá :D',
        preview_url: false
    }
};

var postReq = {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + bearerToken,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    json: true
};

fetch(url, postReq)
    .then(data => {
        return data.json()
    })
    .then(res => {
        console.log(res)
    })
    .catch(error => console.log(error));