import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l={email:"",message:""},n=document.querySelector(".feedback-form"),m=n.elements.message,s=n.elements.email,r="feedback-form-state";s.value=localStorage.getItem(r);m.value=localStorage.getItem(r);n.addEventListener("input",e=>{localStorage.setItem(r,e.target.value);const t=document.querySelector(".input");t.textContent=e.currentTarget.value;const a=document.querySelector("textarea");a.textContent=e.currentTarget.value,document.getElementById("formData").innerText=t.textContent,document.getElementById("formData").innerText=a.textContent,localStorage.setItem(r,JSON.stringify(l))});n.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.message.value),localStorage.removeItem(r);const{email:t,message:a}=e.currentTarget.elements,o={email:t.value.trim(),message:a.value.trim()};if(t.value.trim()===""||a.value.trim()===""){alert("All form fields must be filled in");return}console.log(o),n.reset()});
//# sourceMappingURL=commonHelpers2.js.map
