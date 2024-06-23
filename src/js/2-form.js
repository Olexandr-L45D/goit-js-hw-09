
const formData = {
    email: "", message: ""
};
const LocalStor_Kay = "feedback-form-state";
const formTrackChanges = document.querySelector(".feedback-form");

    formTrackChanges.addEventListener('submit', handlerSubmit);
    formTrackChanges.addEventListener('input', handlerinput);
    
function handlerinput(event) {
  event.preventDefault();
      
  formTrackChanges.textContent = event.currentTarget.elements;
      email = email.value.trim();
      message = message.value.trim();
      localStorage.setItem(LocalStor_Kay, JSON.stringify(formData));
    console.log(formData);
     }
    

//      function StorageParse(params) {
//       const valueForm = localStorage.getItem(LocalStor_Kay);
//     console.log(valueForm);
//     console.log(JSON.parse(valueForm));
//     }
//     console.log(StorageParse);
    

    function handlerSubmit(eve) {
      eve.preventDefault();
      // formData.email = email.value.trim();
      // formData.message = message.value.trim();
  if ( formData.email.value.trim()  === "" || formData.message.value.trim()  === "" ) {
    alert("All form fields must be filled in") 
    return;
  }
  
  console.log(formData);
  // form.reset()
}
