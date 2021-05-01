function formAction() {
    let userName = document.querySelectorAll('#username');
    let text1 = document.querySelectorAll('#text1');//error message1
    let email = document.querySelectorAll('#email');
    let text2 = document.querySelectorAll('#text2');//error mesage2
    let validateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let pass = document.querySelectorAll('#pass');
    let text3 = document.querySelectorAll('#text3');//error mesage3
    let passRep = document.querySelectorAll('#pass-rep');
    let text4 = document.querySelectorAll('#text4');//error message4
    let trueBorder = '2px solid green';
    let falseBorder = '2px solid red';

    //Configuring username
    if (userName[0].value.length === '' || userName[0].value.length < 3) {
        text1[0].innerHTML = 'Username must be at least 3 characters long';
        userName[0].style.border = falseBorder;
    } else {
        userName[0].style.border = trueBorder;
    }
    //Configuring email
    if (email[0].value.match(validateEmail)) {
        email[0].style.border = trueBorder;
    } else {
        text2[0].innerHTML = 'Enter a valid email';
        email[0].style.border = falseBorder;
    }
    //Configuring password
    if (pass[0].value.length === '' || pass[0].value.length < 6) {
        text3[0].innerHTML = 'Your password must be at least 6 characters';
        pass[0].style.border = falseBorder;
    } else {
        pass[0].style.border = trueBorder;
    }
    //Configuring password step 2
    if (passRep[0].value.length === pass[0].value.length) {
        passRep[0].style.border = trueBorder;
    } else {
        text4[0].innerHTML = 'Confirm password';
        passRep[0].style.border = falseBorder;
    }

}
document.querySelector('#submit').addEventListener('click', formAction)