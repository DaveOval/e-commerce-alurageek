const e=document.querySelector("#navbar__name"),n=document.querySelector("#login__buton"),t=localStorage.getItem("user"),r=()=>{if(t===null){e.innerText="",n.classList.remove("disabled");return}else{e.innerText="Hi "+JSON.parse(t).name,n.classList.add("disabled");return}};r();
