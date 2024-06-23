
const formData = {
    email: "", message: ""
};

const formTrackChanges = document.querySelector(".feedback-form");

    formTrackChanges.addEventListener('submit', handlerSubmit);

    function handlerSubmit(event) {
      event.preventDefault();
        const {email, message} = event.currentTarget.elements;

          const emailInputText = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  if ( email.value.trim()  === "" || message.value.trim()  === "" ) {
    alert("All form fields must be filled in") 
    return;
  }
  // console.log(emailInputText);
  // formData.push(emailInputText).join("")
  // console.log(formData);
}
console.log(emailInputText);
formData.push(emailInputText).join("")
console.log(formData);
const LS_Ky = "feedback-form-state";
localStorage.setItem(LS_Ky, JSON.stringify(formData));
const valueForm = localStorage.getItem(LS_Ky);
console.log(valueForm);
console.log(JSON.parse(valueForm));

formTrackChanges.addEventListener('input', handlerinput);

function handlerinput(evt) {
      const textValue = document.querySelector('input')
      input.textContent = evt.currentTarget.value.trim();
    
     }