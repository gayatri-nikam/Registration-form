const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const sendData = (sRate, count) => {
    if (sRate === count) {
        swal("Welcome!", "Registration successful", "success");
    }

}
const succmsg = () => {
    let formcon = document.getElementsByClassName('input-control');
    let count = formcon.length - 1;
    for (let i = 0; i < formcon.length; i++) {
        if (formcon[i].className === "input-control success") {
            let sRate = 0 + i;
            sendData(sRate, count);
        } else {
            return false;
        }

    }
}

//strictly validate email
const isEmail = (emailVal) => {
    var atSym = emailVal.indexOf("@");
    if (atSym < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSym + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

const validate = () => {

    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const phoneVal = phone.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()

    //validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username min 3 char');
    } else {
        setSuccessMsg(username);
    }

    //validate email
    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not valid email');
    } else {
        setSuccessMsg(email);
    }

    //phone validate
    if (phoneVal === "") {
        setErrorMsg(phone, 'Mobile number cannot be blank');
    } else if (phoneVal.length < 10 || phoneVal.length > 10) {
        setErrorMsg(phone, 'Enter valide number');
    }
    else {
        setSuccessMsg(phone);
    }

    //password validate
    if (passwordVal === "") {
        setErrorMsg(password, 'Passward cannot be null');
    } else if (passwordVal.length < 5) {
        setErrorMsg(password, 'Password should be greater than 5 charcter or number');
    }
    else {
        setSuccessMsg(password);
    }
    //confirm password validate
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Passward cannot be null');
    } else if (cpasswordVal != passwordVal) {
        setErrorMsg(cpassword, 'Passward should be same');
    }
    else {
        setSuccessMsg(cpassword);
    }
    succmsg();

    function setErrorMsg(input, errormsg) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "input-control error"
        small.innerText = errormsg;
    }
    function setSuccessMsg(input) {
        const formControl = input.parentElement;
        formControl.className = "input-control success"
    }
}

