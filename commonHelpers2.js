import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let s={email:"",message:""};const t=document.querySelector(".feedback-form");let n=t.elements.email,u=t.elements.message;const r="feedback-form-state";n.value=localStorage.getItem(r);u.value=localStorage.getItem(r);t.addEventListener("input",i);function i(e){localStorage.setItem(r,e.target.value);let a=document.querySelector(".input");a.textContent=e.currentTarget.email.value;let l=document.querySelector("textarea");l.textContent=e.currentTarget.message.value,s={email:`${email.value}`,message:`${message.value}`};const o=JSON.stringify(s),m=JSON.parse(o);console.log(m)}t.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem(r);const{email:a,message:l}=e.currentTarget.elements,o={email:a.value.trim(),message:l.value.trim()};if(a.value.trim()===""||l.value.trim()===""){alert("All form fields must be filled in");return}console.log(o),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
