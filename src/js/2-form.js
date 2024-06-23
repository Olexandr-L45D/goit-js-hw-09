

const formData = {
     email: "", message: "" };

const formTrackChanges = document.querySelector(".feedback-form");
const textareaTaxt = formTrackChanges.elements.message;
const inputTaxt = formTrackChanges.elements.message;
const localStorageKey = "feedback-form-state";


inputTaxt.value = localStorage.getItem(localStorageKey);
textareaTaxt.value = localStorage.getItem(localStorageKey);

formTrackChanges.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formTrackChanges.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
 
  formData = evt.currentTarget.elements; 
  formData.email = email.value.trim(),
  formData.message = message.value.trim() ;
    if ( email.value.trim()  === "" || message.value.trim()  === "") {
      alert("All form fields must be filled in") 
      return;
    }
    console.log(valueContent);
  formTrackChanges.reset();
});

