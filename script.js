const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submit = document.querySelector('.button');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === ''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }


    if(emailValue ===''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Enter a valid email address');
    }
    else{
        setSuccess(email);
    }


    if(passwordValue === ''){
        setError(password,'Password is required');
    }


    else if(passwordValue.length <8){
        setError(password,'Password must have atleast 8 characters');
    }
    else{
        setSuccess(password);
    }



    if(confirmPasswordValue === ''){
        setError(confirmPassword,'Password confirmation is required');
    }
    else if(confirmPasswordValue != passwordValue){
        setError(confirmPassword,'Password must be same');
    }
    else{
        setSuccess(confirmPassword);
    }

}

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(e) {
    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the input email against the regex
    return emailRegex.test(e.trim());
}