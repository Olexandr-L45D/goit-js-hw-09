import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},r=document.querySelector(".feedback-form");r.addEventListener("submit",i);function i(e){e.preventDefault();const{email:n,message:o}=e.currentTarget.elements;if(n.value.trim(),o.value.trim(),n.value.trim()===""||o.value.trim()===""){alert("All form fields must be filled in");return}}console.log(emailInputText);t.push(emailInputText).join("");console.log(t);const l="feedback-form-state";localStorage.setItem(l,JSON.stringify(t));const a=localStorage.getItem(l);console.log(a);console.log(JSON.parse(a));r.addEventListener("input",m);function m(e){document.querySelector("input"),input.textContent=e.currentTarget.value.trim()}
//# sourceMappingURL=commonHelpers2.js.map
