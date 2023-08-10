// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     maxCapacity: 100,
//     currentCapacity: 0
// };

// do {
//     hotel.currentCapacity ++
// } while (hotel.currentCapacity < hotel.maxCapacity);

// if (hotel.currentCapacity > hotel.maxCapacity) {

//     let removeExtraGuestsCalculation = hotel.currentCapacity - hotel.maxCapacity
//     let removeExtraGuests = hotel.currentCapacity - removeExtraGuestsCalculation
//     hotel.currentCapacity = removeExtraGuests

//     console.log(removeExtraGuests)
// };

// console.log(hotel);

// let myArray = {
//     age: 12,
//     city: 'Kyiv'
// };

// myArray.name = 'Sasha';
// myArray.work = 'No work';

// myArray.age = 14;
// myArray.city = 'Menton'
// myArray.work = 'No work'

// let myObject = {
//     name: 'Dwayne Johnson',
//     age: 50,
//     city: 'Los-Angeles',
//     work: 'Hollywood'
// };

// myObject.editAge = function(ageToAdd) {
//     this.age += ageToAdd;
// };

// myObject.editCity = function(cityToChange, ageToRemove) {
//     this.city = cityToChange;
//     this.age -= ageToRemove
// };

// myObject.editCity('New York', 7);
// myObject.editAge(5);

// console.log(myObject);

// const person = {
//     name: 'Vasya',
//     age: '18',
//     gender: 'Male'
// }

// console.log(`${person.name} is ${person.age} years old and his gender is ${gender}`);









// #1

// const balanceDisplay = document.getElementById('balance-text');
// const depositButton = document.getElementById('deposit-button');
// const withdrawlButton = document.getElementById('withdrawl-button');
// const depositInput = document.getElementById('deposit-input');
// const withdrawlInput = document.getElementById('withdrawl-input');

// const bankAccount = {
//     ownerName: '',
//     accountNumber: '',
//     balance: 0,

//     deposit: function(priceToAdd) {
//         if (priceToAdd > 0) {
//             this.balance += priceToAdd;
//         } else {
//             console.log('error');
//         }
//     },

//     withdrawl: function(priceToRemove) {
//         if (priceToRemove > 0 && priceToRemove <= this.balance) {
//             this.balance -= priceToRemove;
//         } else {
//             console.log('error');
//         }
//     }
// };

// balanceDisplay.innerHTML = bankAccount.balance;

// depositButton.addEventListener('click', () => {
//     const depositAmount = parseInt(depositInput.value);
//     bankAccount.deposit(depositAmount);
//     balanceDisplay.innerHTML = bankAccount.balance;
// });

// withdrawlButton.addEventListener('click', () => {
//     const withdrawlAmount = parseInt(withdrawlInput.value);
//     bankAccount.withdrawl(withdrawlAmount);
//     balanceDisplay.innerHTML = bankAccount.balance;
// });



// #2


// const checkToggle = document.getElementById('temp-check-toggle');
// let currentState;

// const wether = {
//     temperature: 0,
//     humidity: 0,
//     windSpeed: 0,

//     tempCheck: function() {
//         if (this.temperature < 0) {
//             currentState = true;
//         } else if (this.temperature >= 0) {
//             currentState = false
//         }
//     }
// };

// checkToggle.addEventListener('click', () => {
//     let tempInput = parseFloat(document.getElementById('temp-input').value);
//     wether.temperature = tempInput;
//     wether.tempCheck();

//     if (currentState === true) {
//         console.log('температура нижче 0 градусів Цельсія')
//     } else if (currentState === false) {
//         console.log('температура вижче 0 градусів Цельсія')
//     } else {
//         console.log('Error')
//     };
// });



// #3 

// const user = {
//     name: '',
//     email: '',
//     password: '',

//     login: function() {
//         const emailInput = document.getElementById('email-input').value;
//         const passwordInput = document.getElementById('password-input').value;

//         if (emailInput === this.email && passwordInput === this.password) {
//             console.log('Login successful');
//         } else {
//             console.log('Login failed');
//         }
//     }
// };

// document.getElementById('login-button').addEventListener('click', () => {
//     user.name = document.getElementById('name-input').value;
//     user.email = document.getElementById('email-input').value;
//     user.password = document.getElementById('password-input').value;

//     user.login();
// });



// 4

// const titleText = document.querySelector('.movie-title');
// const directorText = document.querySelector('.movie-director');
// const yearText = document.querySelector('.movie-year');
// const ratingText = document.querySelector('.movie-rating');

// const movie = {
//     title: 'Oshi no Ko',
//     director: 'Daisuke Hiramaki',
//     year: '2023',
//     rating: 8.8,
// };

// titleText.innerHTML = movie.title;
// directorText.innerHTML = movie.director;
// yearText.innerHTML = movie.year;
// ratingText.innerHTML = movie.rating;

// if (movie.rating > 8) {
//     ratingText.style.color = 'green';
// } else if (movie.rating <= 8) {
//     ratingText.style.color = 'red';
// }