//yo yo yo yo
//comments ayo swag
//if you put comments that means you are a good programmer
let randomBtn = document.querySelector('#random')
let myPlaces = ['Sanford House','Instanbul Grill','Picolo Mondo']
const randomElement = myPlaces[Math.floor(Math.random() * myPlaces.length)];
let randomPlace = () => {console.log(randomElement, myPlaces[randomElement])};
randomBtn.addEventListener('click', () => {
    randomAlert();
});
let randomAlert = () => {alert(`Random selection: ${randomElement}`)}
