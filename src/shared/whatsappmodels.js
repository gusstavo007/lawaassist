function MessageText(textResponse, number) {


    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function MessageList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones para ti 😊"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder ayudarte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [{
                        "title": "Ley",
                        "rows": [{
                                "id": "main-ley",
                                "title": "1. LEY",
                                "description": "Te ayudo con la descripción de la ley"
                            }

                        ]
                    }

                ]
            }
        }
    });
    return data;
}

function MessageComprar(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [{
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

function MessageLocation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "-12.067158831865067",
            "longitude": "-77.03377940839486",
            "name": "Estadio Nacional del Perú",
            "address": "C. José Díaz s/n, Cercado de Lima 15046"
        }

    });
    return data;
}

module.exports = {
    MessageText,
    MessageList,
    MessageComprar,
    MessageLocation
};