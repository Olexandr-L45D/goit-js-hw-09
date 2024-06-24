

const formData = {
     email: "", message: "" };

const formTrackChanges = document.querySelector(".feedback-form");
const textareaTaxt = formTrackChanges.elements.message;
const inputTaxt = formTrackChanges.elements.message;
const localStorageKey = "feedback-form-state";


inputTaxt.value = localStorage.getItem(localStorageKey);
textareaTaxt.value = localStorage.getItem(localStorageKey);

// console.log(JSON.parse(valueForm));

formTrackChanges.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formTrackChanges.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
 
  // formData = evt.currentTarget.elements; 
  // formData.email = email.value.trim(),
  // formData.message = message.value.trim() ;

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



// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const json = JSON.stringify(dog);
// console.log(json); // 

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"