import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n={email:"",message:""},o=document.querySelector(".feedback-form"),m=o.elements.message,c=o.elements.email,l="feedback-form-state";c.value=localStorage.getItem(l);m.value=localStorage.getItem(l);o.addEventListener("input",e=>{localStorage.setItem(l,e.target.value);const t=document.querySelector(".input");t.textContent=e.currentTarget.value;const a=document.querySelector("textarea");a.textContent=e.currentTarget.value,n={inputTaxt:t,textareaTaxt:a};const r=JSON.stringify(n);console.log(r);const s=JSON.parse(n);console.log(s)});o.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.email.value),console.log(e.target.elements.message.value),localStorage.removeItem(l);const{email:t,message:a}=e.currentTarget.elements,r={email:t.value.trim(),message:a.value.trim()};if(t.value.trim()===""||a.value.trim()===""){alert("All form fields must be filled in");return}console.log(r),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
