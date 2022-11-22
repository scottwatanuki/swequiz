document.addEventListener('DOMContentLoaded', postData); // listen out for when the DOM content has loaded

const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('fname');
const amount = params.get('amount');
const languages = params.getAll('languages');
const frameworks = params.get('frameworks');
const threads = params.get('threads');
const field = params.get('field');
const hobby = params.get('hobby');

let role;
let image;
let description;

if (amount == 1 && languages == 'html/css' && threads == 'people' && field == 'hci' && frameworks == 'react' && hobby == 'drawing') {
    role = 'front end developer';
    image = 'images/front-end-developer.jpeg';
    description = 'A front end developer is a person who is responsible for the visual aspects of a website. They are responsible for the layout, design, and content production. They work with the back end developers to ensure that the website is functional and user-friendly.';
} else if (amount == 1 && languages == 'python' && threads == 'intel' && field == 'ai' && frameworks == 'pytorch' && hobby == 'puzzles') {
    role = 'data scientist';
    image = 'images/data-scientist.jpeg';
    description = 'A data scientist is a person who is responsible for the analysis of data. They are responsible for the collection, analysis, and interpretation of data. They work with the back end developers to ensure that the website is functional and user-friendly.';
} else if (amount == 1 && languages == 'c' && threads == 'media' && field == 'graphics' && frameworks == 'unity' && hobby == 'gaming') {
    role = 'game programmer';
    image = 'images/game-programmer.jpeg';
    description = 'A game programmer is a person who is responsible for the programming of a game. They are responsible for the creation of the game. They work with the back end developers to ensure that the website is functional and user-friendly.';
} else if (amount == 1 && languages == 'js' && threads == 'devices' && field == 'robo' && frameworks == 'node' && hobby == 'origami') {
    role = 'back end developer';
    image = 'images/back-end-developer.jpeg';
    description = 'A back end developer is a person who is responsible for the functionality of a website, connecting APIs and databases. They are responsible for the creation of the website. They work with the front end developers to ensure that the website is functional and user-friendly.';
} else if (amount == 1 && languages == 'java' && threads == 'sysarch' && field == 'architecture' && frameworks == 'grails' && hobby == 'lego') {
    role = 'data engineer';
    image = 'images/data-engineer.png';
    description = 'A data engineer is a person who is responsible for the creation of data pipelines. They are responsible for the creation of the website. They work with the front end developers to ensure that the website is functional and user-friendly.';
} else {
    role = 'generalist software engineer';
    image = 'images/generalist-software-engineer.png';
    description = 'A software engineer is a person who is responsible for the creation of software. They often work in different aspects of software and wear multiple hats depending on the project they do. They work with the front end developers to ensure that the website is functional and user-friendly.';
}

// writing html code

function postData() {
    const container = document.getElementById('results'); 
    container.innerHTML = `<h1>You are best suited for a ${role}!</h1>
                           <img src="${image}"></img>
                           <p>${description}</p>`;
}    