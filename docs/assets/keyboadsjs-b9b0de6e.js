import{r as o,s as t}from"./storage-a38bb716.js";const e=document.querySelector("#navbar__name"),r=document.querySelector("#login__buton"),n=localStorage.getItem("user"),s=document.querySelector("#keyboard-container"),a=()=>{if(n===null){e.innerText="",r.classList.remove("disabled");return}else{e.innerText="Hi "+JSON.parse(n).name,r.classList.add("disabled");return}};a();o(s,t.keyboard);
