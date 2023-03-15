const contenedorName      = document.querySelector('#navbar__name');
const loginbtn            = document.querySelector('#login__buton');
const user                = localStorage.getItem('user');
const addproductbtn       = document.querySelector('#addproductbtn')

export const loadUserName = () => {
    
    if(user === null){
      contenedorName.innerText = '';
      loginbtn.classList.remove('disabled');
      addproductbtn.classList.add('disabled')
      return
    }
    else{
      contenedorName.innerText = "Hi " + JSON.parse(user).name;
      loginbtn.classList.add('disabled');
      addproductbtn.classList.remove('disabled')
      return 
    }
    
  }

  
