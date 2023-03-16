const contenedorName      = document.querySelector('#navbar__name');
const loginbtn            = document.querySelector('#login__buton');
const user = localStorage.getItem('user');

//Referencias HTML de iputs
const productTitle  = document.querySelector('#productTitle');
const productPrice  = document.querySelector('#productPrice');
const productIMG    = document.querySelector('#productIMG');
const productStock  = document.querySelector('#productStock');
const productType   = document.querySelector('#productType');
const productDesc   = document.querySelector('#productDescription')
const btnAddProduct = document.querySelector('#addbtn');

console.log('hola ')
//Listener de los inputs
btnAddProduct.addEventListener('click', (e) => {
  if(productTitle.value === '' || productPrice.value === '' || productIMG.value === '' || productStock.value === '' || productType.value === '' || productDesc.value === ''){
    e.preventDefault();
    alert('Please fill all the fields');
  }else{
    e.preventDefault();
    comprobarProducto();
  }
});

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

const comprobarProducto = () => {
  if(productType.value === 'keyboard'){
    AddKeyboardToStorage();
  }else if(productType.value === 'keycaps'){
    AddkeycapsToStorage();
  }else{
    AddSwitchesToStorage();
  }

}

const AddKeyboardToStorage = () => {
  console.log('keyboard');
  const keyboard = {
    title: productTitle.value,
    price: productPrice.value,
    img: productIMG.value,
    stock: productStock.value,
    type: productType.value,
    description: productDesc.value
  }
  localStorage.setItem('keyboard', JSON.stringify(keyboard));
  alert('Keyboard added to storage')
  window.location.href = 'index.html';
}
const AddkeycapsToStorage = () => {
  console.log('keycaps');
  const keycaps = {
    title: productTitle.value,
    price: productPrice.value,
    img: productIMG.value,
    stock: productStock.value,
    type: productType.value,
    description: productDesc.value
  }
  localStorage.setItem('keycaps', JSON.stringify(keycaps));
  alert('Keycaps added to storage')
  window.location.href = 'index.html';
}
const AddSwitchesToStorage = () => {
  console.log('Switchs');
  const switchs = {
    title: productTitle.value,
    price: productPrice.value,
    img: productIMG.value,
    stock: productStock.value,
    type: productType.value,
    description: productDesc.value
  }
  localStorage.setItem('switchs', JSON.stringify(switchs));
  alert('Switchs added to storage')
  window.location.href = 'index.html';
}

loadUserName();


