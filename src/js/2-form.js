
const formData = {
    email: "", message: ""
};
const LocalStor_Kay = "feedback-form-state";
const formTrackChanges = document.querySelector(".feedback-form");

    // formTrackChanges.addEventListener('submit', handlerSubmit);
    formTrackChanges.addEventListener('input', handlerinput);
    
function handlerinput(event) {
  event.preventDefault();
  localStorage.setItem(LS_Ky, JSON.stringify(formData));
      const textValue = document.querySelector('input')
      input.textContent = evt.currentTarget.value.trim();
      formData = event.currentTarget.elements;
      const emailInputText = {
            email: email.value.trim(),
            message: message.value.trim(),
          };
    // тут ще записую в дАТА(треба другий метод не пуш)
// formData.push(textValue).join("")
     }
     formData.push(textValue).join("")

//      function StorageParse(params) {
//       const valueForm = localStorage.getItem(LocalStor_Kay);
//     console.log(valueForm);
//     console.log(JSON.parse(valueForm));
//     }
//     console.log(StorageParse);
    

//     function handlerSubmit(event) {
//       event.preventDefault();
//    
//   if ( email.value.trim()  === "" || message.value.trim()  === "" ) {
//     alert("All form fields must be filled in") 
//     return;
//   }
//   console.log(emailInputText);
//   console.log(formData);
  
// }
