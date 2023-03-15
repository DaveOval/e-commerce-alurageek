//loadusername
import {loadUserName} from './src/js/usecases/userName'

//renderizar productos al HTML
import { renderProducts } from './src/js/usecases/renderProducts';

//productos
import { state } from './src/js/storage.js/storage.js';

console.log('main js enlazado')

  

  // Referencias HTML
  const contenedorTeclados  = document.querySelector('#keyboard-container');
  const contenedorKeycaps   = document.querySelector('#keycaps-container');
  const contenedorSwitchs   = document.querySelector('#switchs-container');
  
  
  // Funcion para renderizar los productos
  
  // Funcion para crear un nuevo producto

  //Esta funcion sirve para renderizar los productos en el DOM
  renderProducts(contenedorTeclados, state.keyboard,);
  renderProducts(contenedorKeycaps, state.keycaps, );
  renderProducts(contenedorSwitchs, state.switchs, );
  
  
  //Funcion para mostrar el nombre del usuario 

  loadUserName();

  
