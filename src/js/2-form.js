

let formData = {
     email: "", message: "" };

const formTrackChanges = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

window.addEventListener('load', function () {
  const storData = JSON.parse(this.localStorage.getItem(localStorageKey));
  if (storData) {
      Array.from(formTrackChanges.elements).forEach(function(element) {
          if (element.name && storData[element.name]) {
              element.value = storData[element.name];
              formData[element.name] = storData[element.name];
          }
      });
  }
});

formTrackChanges.addEventListener('input', function (event) {
  if (event.target.name === 'email' || event.target.name === 'message') {
      formData[event.target.name] = event.target.value.trim();
      localStorage.setItem(localStorageKey, JSON.stringify(formData));
  };
});

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

