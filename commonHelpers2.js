import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},r="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("submit",n);a.addEventListener("input",l);function l(t){t.preventDefault(),a.textContent=t.currentTarget.elements,email=email.value.trim(),message=message.value.trim(),localStorage.setItem(r,JSON.stringify(e)),console.log(e)}function n(t){if(t.preventDefault(),e.email.value.trim()===""||e.message.value.trim()===""){alert("All form fields must be filled in");return}console.log(e)}
//# sourceMappingURL=commonHelpers2.js.map
