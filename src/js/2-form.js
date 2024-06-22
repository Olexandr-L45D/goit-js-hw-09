
const formData = {
    email: "", message: ""
};

const formTrackChanges = document.querySelector(".feedback-form");
// formTrackChanges.append(placeholder);
// placeholder.textContent = "Fill please all fields"

    formTrackChanges.addEventListener('submit', handlerSubmit);

    function handlerSubmit(event) {
        // event.preventDefault()
        const {email, message} = event.currentTarget.elements;

          const emailInputText = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  if ( email.value.trim()  === "") {
    alert("Fill please all fields") 
};
if ( message.value.trim()  === "") {
    alert("Fill please all fields")  
}
  console.log(emailInputText);
  formData.push(emailInputText).join("")
  console.log(formData);
  formTrackChanges.addEventListener('input', handlerInput);

function handlerInput(evt) {
      const inputAray = document.querySelector('input')
      inputAray.textContent = evt.currentTarget.value.trim();
    
     if (evt.currentTarget.value.trim() === "") {
        inputAray.textContent = "Fill please all fields"
     }
    };
//   form.reset()
}
    //     const textareaAray = document.querySelector('textarea')
    //     textareaAray.textContent = event.currentTarget.value.trim();
    
    //  if (event.currentTarget.value.trim() === "") {
    //     textareaAray.textContent = "Fill please all fields"
    //  }
    // }