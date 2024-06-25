

let formData = {
     email: "", message: "" };

const formTrackChanges = document.querySelector(".feedback-form");
let inputTaxts = formTrackChanges.elements.email;
let textareaTaxts = formTrackChanges.elements.message;
const localStorageKey = "feedback-form-state";

inputTaxts.value = localStorage.getItem(localStorageKey);
textareaTaxts.value = localStorage.getItem(localStorageKey);

formTrackChanges.addEventListener('input', handlerinput);

function handlerinput(evt) {
  localStorage.setItem(localStorageKey, evt.target.value);
  
  let inputTaxts = document.querySelector('.input')
inputTaxts.textContent = evt.currentTarget.email.value;
let textareaTaxts = document.querySelector('textarea')
textareaTaxts.textContent = evt.currentTarget.message.value;

formData = {email: `${inputTaxts.email.value}`, message: `${textareaTaxts.message.value}`};
const valueForm = JSON.stringify(formData);
const valueFormParse = JSON.parse(valueForm);
console.log(valueFormParse);
};

formTrackChanges.addEventListener("submit", (evt) => {
  evt.preventDefault();
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

