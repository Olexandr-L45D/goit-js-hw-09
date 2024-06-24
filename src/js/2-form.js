

const formData = {
     email: "", message: "" };

const formTrackChanges = document.querySelector(".feedback-form");
const textareaTaxt = formTrackChanges.elements.message;
const inputTaxt = formTrackChanges.elements.email;
const localStorageKey = "feedback-form-state";

inputTaxt.value = localStorage.getItem(localStorageKey);
textareaTaxt.value = localStorage.getItem(localStorageKey);

formTrackChanges.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
  const inputTaxt = document.querySelector('.input')
inputTaxt.textContent = evt.currentTarget.value.trim();
const textareaTaxt = document.querySelector('.textarea')
textareaTaxt.textContent = evt.currentTarget.value.trim();
const valueFormSum = document.getElementById( 'idvalueform' ).value;
document.getElementById( "formData" ).innerText = valueFormSum;
localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formTrackChanges.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  const { email, message} = evt.currentTarget.elements; 
  const valueContent = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
    if ( email.value.trim()  === "" || message.value.trim()  === "") {
      alert("All form fields must be filled in") 
      return;
    }
    console.log(valueContent);
  formTrackChanges.reset();
});

// const inputTaxt = document.querySelector('.input')
// inputTaxt.textContent = evt.currentTarget.value.trim();
// const textareaTaxt = document.querySelector('.textarea')
// textareaTaxt.textContent = evt.currentTarget.value.trim();

// const valueFormSum = document.getElementById( 'idvalueform' ).value;
// document.getElementById( "formData" ).innerText = valueFormSum;