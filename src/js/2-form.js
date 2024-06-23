
const formData = {
    email: "", message: ""
};
const LocalStor_Kay = "feedback-form-state";
const formTrackChanges = document.querySelector(".feedback-form");

    formTrackChanges.addEventListener('submit', handlerSubmit);
    formTrackChanges.addEventListener('input', handlerinput);
    
function handlerinput(event) {
  event.preventDefault();
      const textValue = document.querySelector('input')
      textValue.textContent = event.currentTarget.value.trim();
      formData.email = event.currentTarget.elements;
      formData.message = event.currentTarget.elements;
      localStorage.setItem(LocalStor_Kay, JSON.stringify(formData));
    console.log(formData);
     }
    

//      function StorageParse(params) {
//       const valueForm = localStorage.getItem(LocalStor_Kay);
//     console.log(valueForm);
//     console.log(JSON.parse(valueForm));
//     }
//     console.log(StorageParse);
    

    function handlerSubmit(event) {
      event.preventDefault();
      formData.email = email.value.trim();
      formData.message = message.value.trim();
  if ( email.value.trim()  === "" || message.value.trim()  === "" ) {
    alert("All form fields must be filled in") 
    return;
  }
  
  console.log(formData);
  
}
