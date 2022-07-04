/**
 * Create search feature,
 * gallery items
 * and modal to function as main components of app 
 */
//1. Search form
//Create elements and append them to the searchContainer div
const searchContainer = document.getElementsByClassName('search-container')[0];
const form = document.createElement('form');
const searchInput = document.createElement('input');
const searchSubmit = document.createElement('input');
//Create action and method attributes for form
form.setAttribute("action", "#", "method", "get");
//Create attributes for input methods
searchInput.setAttribute("type", "search");
searchInput.setAttribute("class", "search-input");
searchInput.setAttribute("placeholder", "Search...");
searchSubmit.setAttribute("type", "submit");
searchSubmit.setAttribute("value", "&#x1F50D;");
searchSubmit.setAttribute("id", "search-submit");
searchSubmit.setAttribute("class", "search-submit");
//Append input elements for form and form to search div
searchContainer.append(form);
form.append(searchInput, searchSubmit);

//2. Gallery Items
//Create elements
const containerDiv = document.getElementById('gallery');
const cardDiv = document.createElement('div');
cardDiv.className = 'card';

const cardImgContainer = document.createElement('div');
cardImgContainer.className = 'card-img';

const cardImg = document.createElement('img');

//Create attributes for each element
cardImg.setAttribute("class", "card-img")
cardImg.setAttribute("src", "https://placehold.it/90x90");
cardImg.setAttribute("alt", "profile picture");
const cardInfoContainer = document.createElement('div');
cardInfoContainer.className = 'card-info-container';

const nameH3 = document.createElement('h3');
nameH3.setAttribute("id", "name");
nameH3.setAttribute("class", "card-name cap");
nameH3.textContent = `Name Placeholder`
const emailP = document.createElement('p');
emailP.setAttribute("class", "card-text");
emailP.textContent = `Email Placeholder`;
const locationP = document.createElement('p');
locationP.setAttribute("class", "card-text cap");
locationP.textContent = `City, State Placeholder`;
//Append elements to divs
containerDiv.appendChild(cardDiv);
cardDiv.append(cardImgContainer);
cardImgContainer.appendChild(cardImg);
cardDiv.insertAdjacentElement("beforeend", cardInfoContainer);
cardInfoContainer.append(nameH3, emailP, locationP);

//3. Modal Windows
//Create elements for modal
const body = document.getElementsByTagName('body')[0];
const modalContainer = document.createElement('div');
const modal = document.createElement('div');
const modalInfoContainer = document.createElement('div');
const button = document.createElement('button');
const strong = document.createElement('strong');
const modalImg = document.createElement('img');
const h3 = document.createElement('h3');
const emailPar = document.createElement('p');
const cityPar = document.createElement('p');
const hrTag = document.createElement('hr');
const phonePar = document.createElement('p');
const addressPar = document.createElement('p');
const birthdayPar = document.createElement('p');
//Set attributes for each element
modalContainer.setAttribute("class", "modal-container");
modal.setAttribute("class", "modal");
modalInfoContainer.setAttribute("class", "modal-info-container");
button.setAttribute("type", "button");
button.setAttribute("id", "modal-close-button");
button.setAttribute("class", "modal-close-button");
strong.innerHTML = "X";
button.insertAdjacentElement("beforeend", strong);
modalImg.setAttribute("class", "modal-img");
modalImg.setAttribute("src", "https://placehold.it/125x125");
modalImg.setAttribute("alt", "profile picture");
h3.setAttribute("id", "name");
h3.setAttribute("class", "modal-name cap");
h3.textContent = `Jane Doe`
emailPar.setAttribute("class", "modal-text");
emailPar.textContent = `janedoe@dreamland.com`;
cityPar.setAttribute("class", "modal-text cap");
cityPar.textContent = `City Placeholder`;
phonePar.setAttribute("class", "modal-text");
phonePar.textContent = `(222)222-2222`
addressPar.setAttribute("class", "modal-text");
addressPar.textContent = `222 Portland Ave., Portland, OR 22222`;
birthdayPar.setAttribute("class", "modal-text");
birthdayPar.textContent = `2/22/2012`;
//Append elements to body element
body.appendChild(modalContainer);
modalContainer.appendChild(modal);
modal.append(button, modalInfoContainer);
modalInfoContainer.append(modalImg, h3, emailPar, cityPar, hrTag, phonePar, addressPar, birthdayPar);





