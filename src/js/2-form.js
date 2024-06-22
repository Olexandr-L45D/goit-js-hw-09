//2form.js
const formData = {
    email: "", message: ""
};

const formTrackChanges = document.querySelector(".feedback-form");
formTrackChanges.addEventListener('input', handlerInput);

function handlerInput(evt) {
      const inputAray = document.querySelector('input')
      inputAray.textContent = evt.currentTarget.value.trim();
    
     if (evt.currentTarget.value.trim() === "") {
        inputAray.textContent = "Fill please all fields"
     }
    }