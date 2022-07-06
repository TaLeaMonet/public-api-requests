//Get and display 12 random users
//Create Fetch functions 
function fetchRandomUser(url) {
    return fetch(url) 
            .then(res => res.json())
            .then(data => console.log(data.results))
            .catch(error => console.log("Looks like there was a problem", error));
}
function displayUserInfo(data) {
    for(let i = 0; i < 12; i++ ) {
        console.log(fetchRandomUser("https://randomuser.me/api/"));
    }
}
displayUserInfo();

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
//Generate gallery items
function galleryItems(data) {
    const containerDiv = document.getElementById('gallery');
    for (let i = 0; i < 12; i ++) {
    const cardDiv = document.createElement('div');
    const cardInfoContainer = document.createElement('div');
    const cardImgContainer = document.createElement('div');
    const cardImg = document.createElement('img')
    const nameH3 = document.createElement('h3');
    const emailP = document.createElement('p');
    const locationP = document.createElement('p');    
    //Create classnames
    cardDiv.className = 'card';
    cardInfoContainer.className = 'card-info-container';
    cardImgContainer.className = 'card-img';
    //Set Attributes
    cardImg.setAttribute("class", "card-img")
    cardImg.setAttribute("src", `${data}`);
    cardImg.setAttribute("alt", "profile picture");
    cardImgContainer.appendChild(cardImg);
    nameH3.setAttribute("id", "name");
    nameH3.setAttribute("class", "card-name cap");
    nameH3.textContent = `${data}`
        emailP.setAttribute("class", "card-text");
    emailP.textContent = `Email Placeholder`;
    locationP.setAttribute("class", "card-text cap");
    locationP.textContent = `City, State Placeholder`;
    //Append elements to divs
    containerDiv.appendChild(cardDiv);
    cardDiv.append(cardImgContainer);
    cardDiv.insertAdjacentElement("beforeend", cardInfoContainer);
    cardInfoContainer.append(nameH3, emailP, locationP);    
    }
}
galleryItems();

// //3. Modal Windows
// //Create elements for modal
// const body = document.getElementsByTagName('body')[0];
// const modalContainer = document.createElement('div');
// const modal = document.createElement('div');
// const modalInfoContainer = document.createElement('div');
// const button = document.createElement('button');
// const strong = document.createElement('strong');
// const modalImg = document.createElement('img');
// const h3 = document.createElement('h3');
// const emailPar = document.createElement('p');
// const cityPar = document.createElement('p');
// const hrTag = document.createElement('hr');
// const phonePar = document.createElement('p');
// const addressPar = document.createElement('p');
// const birthdayPar = document.createElement('p');
// //Set attributes for each element
// modalContainer.setAttribute("class", "modal-container");
// modal.setAttribute("class", "modal");
// modalInfoContainer.setAttribute("class", "modal-info-container");
// button.setAttribute("type", "button");
// button.setAttribute("id", "modal-close-button");
// button.setAttribute("class", "modal-close-button");
// strong.insertAdjacentHTML("beforeend", "X");
// button.insertAdjacentElement("beforeend", strong);
// modalImg.setAttribute("class", "modal-img");
// modalImg.setAttribute("src", "https://placehold.it/125x125");
// modalImg.setAttribute("alt", "profile picture");
// h3.setAttribute("id", "name");
// h3.setAttribute("class", "modal-name cap");
// h3.textContent = `Jane Doe`
// emailPar.setAttribute("class", "modal-text");
// emailPar.textContent = `janedoe@dreamland.com`;
// cityPar.setAttribute("class", "modal-text cap");
// cityPar.textContent = `City Placeholder`;
// phonePar.setAttribute("class", "modal-text");
// phonePar.textContent = `(222)222-2222`
// addressPar.setAttribute("class", "modal-text");
// addressPar.textContent = `222 Portland Ave., Portland, OR 22222`;
// birthdayPar.setAttribute("class", "modal-text");
// birthdayPar.textContent = `2/22/2012`;
// //Append elements to body element
// body.appendChild(modalContainer);
// modalContainer.appendChild(modal);
// modal.append(button, modalInfoContainer);
// modalInfoContainer.append(modalImg, h3, emailPar, cityPar, hrTag, phonePar, addressPar, birthdayPar); 








