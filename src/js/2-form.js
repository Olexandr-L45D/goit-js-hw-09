
const formData = {
    email: "", message: ""
};
const LocalStor_Kay = "feedback-form-state";
const formTrackChanges = document.querySelector(".feedback-form");

    // formTrackChanges.addEventListener('submit', handlerSubmit);
    formTrackChanges.addEventListener('input', handlerinput);
    const formDataTrac = formData;
function handlerinput(event) {
  event.preventDefault();
  // const formDataTrac = formData;
  formDataTrac = event.currentTarget.elements; 
      const formTrack = {
        email: email.value.trim(), 
        message: message.value.trim()} ;
  // formData.email = email.value.trim();
  // formData.message = message.value.trim();
      localStorage.setItem(LocalStor_Kay, JSON.stringify(formData));
    // console.log(formData);
    console.log(formTrack);
    // console.log(formDataTrac);
     }
    

//      function StorageParse(params) {
//       const valueForm = localStorage.getItem(LocalStor_Kay);
//     console.log(valueForm);
//     console.log(JSON.parse(valueForm));
//     }
//     console.log(StorageParse);
    

//     function handlerSubmit(even) {
//       even.preventDefault();
//       const formDataValue = formData;
//       formDataValue = even.currentTarget.elements; 
//       const valueContent = {
//         email: email.value.trim(),
//         message: message.value.trim()} ;
//   if ( email.value.trim()  === "" || message.value.trim()  === "") {
//     alert("All form fields must be filled in") 
//     return;
//   }
//   console.log(valueContent);
//   console.log(formData);
//    form.reset()
// }

// const { email, password} = evt.currentTarget.elements; 
//   const datase = {
//     email: email.value.trim(),
//     password: password.value.trim(),
//   };
//   if ( email.value.trim()  === "" || password.value.trim()  === "" ) {
//     alert("All form fields must be filled in") 
//     return;
// }
//   console.log(datase);