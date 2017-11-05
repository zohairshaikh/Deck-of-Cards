let suites = ['hearts', 'spades', 'clubs', 'diamonds'];
let suites_color = {
    'hearts': 'R',
    'diamonds': 'R',
    'spades': 'B',
    'clubs': 'B',
};
let deck = [];
let deck_limit = 14;
let value_mapper = {
    '1': 'A', '2': '2',
    '3': '3', '4': '4',
    '5': '5', '6': '6',
    '7': '7', '8': '8',
    '9': '9', '10': '10',
    '11': 'J', '12': 'Q',
    '13': 'K',
};

export function newDeck() {

    for (let i = 0; i < suites.length; i++) {
        for (let j = 1; j < deck_limit; j++) {
            deck.push({
                'id': suites[i] + ':' + j + ';',
                'value': j,
                'text': value_mapper[j],
                'suite': suites[i],
                'color': suites_color[suites[i]]
            })
            break
        }
    }
    // Randomizing array here
    let arr = shuffle(deck);

    return arr;
}

export function getSavedDeck(savedDeck) {
    let placedDeck = []
    for (let i = 0; i < suites.length; i++) {
        for (let j = 1; j < deck_limit; j++) {
            let save = true

            for (let k = 0; k < savedDeck.length; k++) {
                let match = savedDeck[k].replace(/"/g, "")
                if (match == suites[i] + ':' + j) {
                    save = false;
                }
            }
            if (save) {
                deck.push({
                    'id': suites[i] + ':' + j + ';',
                    'value': j,
                    'text': value_mapper[j],
                    'suite': suites[i],
                    'color': suites_color[suites[i]]
                })
            }
            else {
                placedDeck.push({
                    'id': suites[i] + ':' + j + ';',
                    'value': j,
                    'text': value_mapper[j],
                    'suite': suites[i],
                    'color': suites_color[suites[i]]
                })
            }
        }
    }
    // Randomizing array here
    let arr = shuffle(deck);

    return {'deck': arr, 'placedDeck': placedDeck};
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}