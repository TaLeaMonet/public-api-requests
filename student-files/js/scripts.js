//Get and display 12 random users
//Create Fetch function
const body = document.querySelector('body');
let employeesArr = [];
const url = "https://randomuser.me/api/?results=12&nat=us"
// function fetchRandomUser(url) {
     fetch(url)
        .then(res => res.json())
        .then(data => {
            employeesArr = data.results;

            displayUserInfo(employeesArr);

        })
        //.catch(error => console.log("Looks like there was a problem", error));
//}
//fetchRandomUser("https://randomuser.me/api/?results=12&nat=us");

/**
 * Create search feature,
 * gallery items
 * and modal to function as main components of app 
 */


//2. Gallery Items
const containerDiv = document.getElementById('gallery');
const displayUserInfo = (data) => {
 const users =  data.forEach((user, index) => {
        console.log(user, index);
        const html = `
        <div class="card" data-index=${index}>
        <div class="card-img-container">
            <img class="card-img" src="${user.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
            <p class="card-text">${user.email}</p>
            <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
        </div>
        </div>
                `;
        containerDiv.insertAdjacentHTML("beforeend", html);
    })
    openModal();
}
//3. Modal Windows
// //Create elements for modal
const generateModal = (data) => {
    //Create modal for employees
    const modalHtml = `
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${data.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
            <p class="modal-text">${data.email}</p>
            <p class="modal-text cap">${data.location.city}</p>
            <hr>
            <p class="modal-text">${data.cell}</p>
            <p class="modal-text">${data.location.street.number} ${data.location.street.name}</p>
            <p class="modal-text">${data.dob.date}</p>
        </div>
    </div>
    `
    body.insertAdjacentHTML("beforeend", modalHtml);
}
const openModal = () => {
[...document.getElementsByClassName('card')].forEach(card =>{
    card.addEventListener("click", (e) => {
    const index = card.getAttribute("data-index");
    console.log(index);
    generateModal(employeesArr[index]);
    })
})
}





