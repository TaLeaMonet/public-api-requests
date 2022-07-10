//Get and display 12 random users
//1. Fetch function
const body = document.querySelector('body');
let employeesArr = [];
const url = "https://randomuser.me/api/?results=12&nat=us";
     fetch(url)
        .then(res => res.json())
        .then(data => {
            employeesArr = data.results;
            displayUserInfo(employeesArr);
        })
        .catch(error => console.log("Looks like there was a problem", error));
/**
 * Create, gallery items
 * and modal to function as main components of app 
 */
//2. Gallery Items
const containerDiv = document.getElementById('gallery');
const displayUserInfo = (data) => {
 const users =  data.forEach((user, index) => {
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
    //Call function to open modal
    openModal(); 
}
//3. Modal Windows
//Function to create elements for modal
const generateModal = (data) => {
//Create modal for employees
//Birthday formatting
    const birthDate = new Date(data.dob.date)
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
            <p class="modal-text">${birthDate.toLocaleDateString('en-US')}</p>
        </div>
    </div>
    `
    body.insertAdjacentHTML("beforeend", modalHtml);
    //Call function to close modal
    closeModal();
}
//Function to open modal when a gallery item is clicked
const openModal = () => {
[...document.getElementsByClassName('card')].forEach(card =>{
    card.addEventListener("click", (e) => {
    const index = card.getAttribute("data-index");
    generateModal(employeesArr[index]);
    })
})
}
//Function to close modal when the button is clicked
const closeModal = () => {
  const button = document.getElementById('modal-close-btn');
  const modalContainer = document.querySelector('.modal-container');
  button.addEventListener("click", (e) => {
      modalContainer.remove(); 
  })  
}




