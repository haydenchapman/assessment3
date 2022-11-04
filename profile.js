//hello if Alec is looking at this!! suuuup dude
//yoyoyoyoyoy

let favColor = document.querySelector("#color");
let favPlace = document.querySelector("#place");
let favRitual = document.querySelector("#ritual");
//yoyoyofunctionsalert!!
let alertColor = (evt) => {
    evt.preventDefault();
    alert('Hayden\'s favorite color is blue! or light coral sometimes, but white on cars.');
  };
let alertPlace = (evt) => {
    evt.preventDefault();
    alert('Hayden\'s favorite place to be is the Philippines, Japan, or the beach!')
}
let alertRitual = (evt) => {
    evt.preventDefault();
    alert('Hayden\'s favorite ritual is to exercise before programming and to judge cars on their wheels and wheels specs XD LOL! and play games sometimes')
}
  


  
favColor.addEventListener("click", alertColor);
  
favPlace.addEventListener("click", alertPlace);
  
favRitual.addEventListener("click", alertRitual);