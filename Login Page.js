function visible(){
    var a = document.getElementById('password');
    if (a.type == 'password') {
        a.type = 'text';
    }
    else {
        a.type = 'password';
    }
}


function validate() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var length = document.getElementById('length');
    
    if (username.value.length >= 10 && password.value.length >= 8){
        alert('Login Succesful');
        return false;
    }
    if (username.value.length < 10 && password.value.length < 8){
        alert('Inputs are invalid');
        return false;
    }
    if (password.value.length < 8){
        alert('Enter your correct password')
    }
    if( username.value.length < 10){
        alert('Enter your correct username')
    }
}
