

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
inputTaxt.textContent = evt.currentTarget.value;
const textareaTaxt = document.querySelector('textarea')
textareaTaxt.textContent = evt.currentTarget.value;
formData = {inputTaxt, textareaTaxt };
//  localStorage.setItem(localStorageKey, JSON.stringify(formData));
const valueForm = JSON.stringify(formData);

console.log(valueForm);
const valueFormParse = JSON.parse(formData);
console.log(valueFormParse);
});

formTrackChanges.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.email.value);
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

