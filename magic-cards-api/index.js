const superagent = require('superagent');

const config = require('./config.json');

const searchCards = async (cardName) => {
    try {
        const searchURL = `${config.url}/cards/?name=${cardName}`;
        const response = await superagent.get(searchURL);

        return response.body;
    } catch (error) {
        return error;
    }
};

const cardDetails = async (cardId) => {
    try {
        const cardURL = `${config.url}/cards/${cardId}`;
        const response = await superagent.get(cardURL);

        return response.body;
    } catch (error) {
        return error;
    }
};

module.exports = {
    searchCards,
    cardDetails
};