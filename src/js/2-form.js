
// const formData = {
//     email: "", message: "" };
// const LocalStor_Kay = "feedback-form-state";
// const formTrackChanges = document.querySelector(".feedback-form");

//     // formTrackChanges.addEventListener('submit', handlerSubmit);
//     formTrackChanges.addEventListener('input', handlerinput);
    
// function handlerinput(event) {
//   // event.preventDefault();
  
//   const { email, message} = event.currentTarget.elements; 
//       const formTrack = {
//         email: email.value.trim(), 
//         message: message.value.trim()} ;
      
//       localStorage.setItem(LocalStor_Kay, JSON.stringify(formData));
//     console.log(formData);
//     console.log(formTrack);
  
//      }
    

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
// console.log(datase);

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
  const formDataValue = formData;
        formDataValue = evt.currentTarget.elements; 
        
        formDataValue.email = email.value.trim(),
        formDataValue.message = message.value.trim() ;
    if ( email.value.trim()  === "" || message.value.trim()  === "") {
      alert("All form fields must be filled in") 
      return;
    }
    console.log(valueContent);
  formTrackChanges.reset();
});

// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });