function formValidate() {
    var userName = document.getElementById("username").value;

    var email = document.getElementById("email").value;

    var phone = document.getElementById("phone").value;

    var error = document.getElementById("error");

    var text  = "";

    if (userName.length < 5){
        text ="please enter valid username"
        error.innerHTML = text;
        return false;
    }
    else if (email.indexOf("@") == -1 && email.length < 10) {
        text ="please enter valid email"
        error.innerHTML = text;
        return false;  
    }
    else if (isNaN(phone) || phone.length !=11 ){
        text ="please enter valid phone"
        error.innerHTML = text;
        return false;   
    }
    else {
        alert ("Done ?")
        return true;
    }


}