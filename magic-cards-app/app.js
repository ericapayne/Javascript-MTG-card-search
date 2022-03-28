const inquirer = require('inquirer');

const cardsView = require('magic-cards-api');


const _print = (details) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~CARD DETAILS~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(`Name: ${details.card.name}`);
    console.log('Mana Cost: ' + `${details.card.manaCost}`);
    console.log('Converted Mana Cost: ' + `${details.card.cmc}`);
    console.log('Color(s): ' + `${details.card.colors}`);
    console.log('Type: ' + `${details.card.type}`);
    console.log('Set: ' + `${details.card.set}`);
    console.log('Card Text: ' + `${details.card.text}`);
    console.log('Power: ' + `${details.card.power}`);
    console.log('Toughness: ' + `${details.card.toughness}`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    
};
const resultsList = [];

const cardSearch = async (name) => {
    try {
        
        const cardList = await cardsView.searchCards(name);
        
        for (let i = 0; i < cardList.cards.length; i++) {
            resultsList.push(cardList.cards[i]);
        }
       const promptResults = await _pickPrompt();
       let id = '0';
       
        const picked = promptResults.userSelected;
        console.log('You picked ' + picked);
        for (let i = 0; i < cardList.cards.length; i++) {
            if(picked === cardList.cards[i].name) {
                //console.log(typeof cardList.cards[i].multiverseid);
                id = cardList.cards[i].id;
            }
            
        }
        console.log('-----------------')
        console.log('Card Id = ' + id);
        const details = await cardsView.cardDetails(id)
        //console.log(details);
         _print(details);
        
    } catch (error) {
        console.log(error);
    }
};

const _pickPrompt = async () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userSelected',
            message: 'Choose a card',
            choices: resultsList
        }
    ])
};

module.exports = {
    cardSearch
};