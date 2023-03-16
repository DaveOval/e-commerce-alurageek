import { renderProducts } from './usecases/renderProducts';
import { state } from './storage.js/storage.js';


const contenedorName      = document.querySelector('#navbar__name');
const loginbtn            = document.querySelector('#login__buton');
const user = localStorage.getItem('user');
const contenedorTeclados  = document.querySelector('#keyboard-container');

const loadUserName = () => {
    
    if(user === null){
      contenedorName.innerText = '';
      loginbtn.classList.remove('disabled');
      return
    }
    else{
      contenedorName.innerText = "Hi " + JSON.parse(user).name;
      loginbtn.classList.add('disabled');
      return 
    }
    
  }

loadUserName();
renderProducts(contenedorTeclados, state.keyboard,);




