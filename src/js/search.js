const contenedorName      = document.querySelector('#navbar__name');
const loginbtn            = document.querySelector('#login__buton');
const user = localStorage.getItem('user');

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
