const BotonLogin = window.document.querySelector('#BotonLogin');



BotonLogin.addEventListener('click',ConfirmaLogin);

function ConfirmaLogin(){

    const inEmail = window.document.querySelector('#Email');
    const inPassword = window.document.querySelector('#Password');
    const VarEmail = inEmail.value;
    const VarPassword = inPassword.value;

    console.log('Email: '+VarEmail+' Password: '+VarPassword);

    inEmail.value = '';
    inPassword.value = '';
    inEmail.focus();
    inPassword.focus();

    if(VarEmail === 'ejemplo@gmail.com' && VarPassword === '123456'){
       console.log('Iniciando sesión…');
       document.getElementById('texting').innerHTML = 'Iniciando sesión…';
       return false
    }
    else{
        console.log('Email y/o contraseña incorrectos');
        document.getElementById('texting').innerHTML = 'Email y/o contraseña incorrectos';
        return false

    }

}