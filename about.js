console.log("hello bob!");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector("#duck");

let overAlert = () => {
  alert('lets go champ, you are beautiful! just like this duck! click ok, then say hello to Bob, the rubber duck!');
};

picture.addEventListener("mouseover", () => {
		overAlert();
	});