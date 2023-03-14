console.log('hola mundo');


//Referemncias HTML
const btnSubmit     = document.querySelector('#btn_login');
const userName      = document.querySelector('#name');
const userNickName  = document.querySelector('#username');
const userEmail     = document.querySelector('#email');
const userPassword  = document.querySelector('#password');
const error1        = document.querySelector('#error1');
const error2        = document.querySelector('#error2');
const error3        = document.querySelector('#error3');
const error4        = document.querySelector('#error4');

//Referemcoas HTML advertemcias


//Listeners 
userName.addEventListener('blur', () => {
    validarName(userName);
});
userNickName.addEventListener('blur', () =>{
    validarNickName(userNickName)
});
userEmail.addEventListener('blur', () => {
    validarEmail(userEmail);
})
userPassword.addEventListener('blur', () =>{
    validarPassword(userPassword);
})
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    guardarLocalStorage(userName.value, userNickName.value, userEmail.value, userPassword.value);
})




//Funciones

function validarName(userName){
    const re = /^[a-zA-Z ]{2,50}$/;
    if(re.test(userName.value)){
        habilitarBtn()
        userName.classList.remove('warging')
        error1.classList.add('disabled')
    }else{
        userName.classList.add('warging')
        error1.classList.remove('disabled')
    }
}
function validarNickName(userNickName){
    const re = /^[a-zA-Z ]{2,50}$/;
    if(re.test(userNickName.value)){
        habilitarBtn()
        userNickName.classList.remove('warging')
        error2.classList.add('disabled')
    }else{
        userNickName.classList.add('warging')
        error2.classList.remove('disabled')
    }
}
function validarEmail(userEmail) {
    const re = /^([a-zA-Z0-9_\-\.!#$%&]+)@([a-zA-Z0-9_\-\.!#$%&]+)\.([a-zA-Z]{2,5})$/;
    if(re.test(userEmail.value)){
        habilitarBtn()
        userEmail.classList.remove('warging')
        error3.classList.add('disabled')
    }else{
        userEmail.classList.add('warging')
        error3.classList.remove('disabled')
    }
}
function validarPassword(userPassword){
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(re.test(userPassword.value)){
        habilitarBtn()
        userPassword.classList.remove('warging')
        error4.classList.add('disabled')
    }else{
        userPassword.classList.add('warging')
        error4.classList.remove('disabled')
    }
}
function habilitarBtn(){
    if(userName.value !== '' &&  userNickName.value !== '' && userEmail.value !== '' && userPassword.value !== '' ){
        console.log('Boton activado')
        btnSubmit.classList.remove('disabled')
    }else{
        console.log('Boton desativado')
    }
}

function guardarLocalStorage(userName, userNickName, userEmail, userPassword) {
    const user = {
        name: userName,
        nickName: userNickName,
        email: userEmail,
        password: userPassword
    }
    if ( localStorage.getItem(user.email) ){
        alert('Usuario ya existe')
        return;
    }else{
        localStorage.setItem('user', JSON.stringify(user));

    }
    alert('Nuevo usuario registrado con exito:' + ' ' + userName)
    window.location.href = 'index.html'
}
    
