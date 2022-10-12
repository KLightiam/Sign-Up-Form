let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone-number');
let passwordMsg = document.querySelector('.pass');
let submitButton =document.querySelector("button[type='submit']");
let submitMsg = document.querySelector('.submitMsg');


const emailCheck = /([a-zA-Z0-9]+)@([\w]+)\.(\w+)(\.(.+))?/;
const nameCheck = /[\w]+/;
const phoneCheck = /(^((\+233)|0)[\d]{9})|(^(\+233)0?[\d]{9})|(.?(\d{3}).*(\d{3}).*(\d{4}))/;


password.addEventListener('input',isPasswordValid);
email.addEventListener('input',isEmailValid);
confirmPassword.addEventListener('input',isPasswordSame);
phone.addEventListener('input',isPhoneValid);
lastName.addEventListener('input',isLastNameValid);
firstName.addEventListener('input',isFirstNameValid);
submitButton.addEventListener('click',isFormValid);



function isPasswordValid(){
    if(password.value.length >=1 && password.value.length < 8){
        password.classList.add('error');
        passwordMsg.textContent='Password must be more than 7 characters';
        password.classList.remove('valid');

    }else if(password.value == ""){
        password.classList.add('error');
        password.classList.remove('valid');
        passwordMsg.textContent= "";

    }else if(!(/[\<\>\!@\$\%\^\&\*\(\)\_\-\=\+\?\.,'\/]+/.test(password.value))){
        passwordMsg.textContent='Password needs to contain a special character including (?/@&+!) etc';
        password.classList.remove('valid');
        password.classList.add('error');

    }else if(!(/[A-Z]+/.test(password.value))){
        passwordMsg.textContent='Password must contain an UPPERCASE letter';
        password.classList.remove('valid');
        password.classList.add('error');
        
    }else if(!(/[a-z]+/.test(password.value))){
        passwordMsg.textContent="Password must contain a lowercase letter";
        password.classList.remove('valid');
        password.classList.add('error');
        
    }else if(!(/[0-9]+/.test(password.value))){
        passwordMsg.textContent='Password must contain a number';
        password.classList.remove('valid');
        password.classList.add('error');
        
    }else{
        password.classList.remove('error');
        password.classList.add('valid');
        passwordMsg.textContent = "";
    }
}



function isPasswordSame(){
    if((confirmPassword.value === password.value) && (password.value !== '')){
        confirmPassword.classList.add('valid');
        confirmPassword.classList.remove('error');
        document.querySelector('.passConfirm').textContent = '';
    
    }else if((confirmPassword.value !== password.value) && (confirmPassword.value !== "")){
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('valid');
        document.querySelector('.passConfirm').textContent = 'Must be the same as password';
    
    }else{
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('valid');
        document.querySelector('.passConfirm').textContent = '';
    }
}



function isEmailValid(e){
    if(emailCheck.test(email.value)){
        email.classList.add('valid');
        email.classList.remove('error');
        setTimeout(()=> {document.querySelector('.email').textContent=""},3000)
 
    }else if(email.value == ""){
        setTimeout(()=> {document.querySelector('.email').textContent=""},3000)
        email.classList.remove('valid');
        email.classList.add('error');
        
    }else if(e.inputType == 'deleteContentBackward'){
        email.classList.remove('valid');
        email.classList.add('error');
        document.querySelector('.email').textContent = 'email is invalid';
    
    }else{
        email.classList.remove('valid');
        email.classList.add('error');
       let timed = setTimeout(()=> {document.querySelector('.email').textContent="email is invalid"},3000); 
    }
}


function isPhoneValid(e){
    if(phoneCheck.test(phone.value)){
        phone.classList.add('valid');
        phone.classList.remove('error');
        setTimeout(()=> {document.querySelector('.tel').textContent=""},2000);
    
    }else if(phone.value == ""){
        setTimeout(()=> {document.querySelector('.tel').textContent=""},2000);
        phone.classList.remove('valid');
        phone.classList.add('error');
        
    }else if(e.inputType == 'deleteContentBackward'){
        phone.classList.remove('valid');
        phone.classList.add('error');
        document.querySelector('.tel').textContent = 'Phone number is invalid';
    
    }else{
        phone.classList.remove('valid');
        phone.classList.add('error');
       let timed = setTimeout(()=> {document.querySelector('.tel').textContent="Phone number is invalid"},2000); 
    }
}


function isFirstNameValid(){
    if(firstName.value == ""){
        firstName.classList.add('error');
        firstName.classList.remove('valid');
        document.querySelector('.fname').textContent='';
    }
    else if((nameCheck.test(firstName.value)) && !(/[\<\>\!@\$\%\^\&\*\(\)\_\-\=\+\?\.,'\/]+/.test(firstName.value))){
        firstName.classList.add('valid');
        firstName.classList.remove('error');
        document.querySelector('.fname').textContent='';
    }
    else{
        firstName.classList.add('error');
        firstName.classList.remove('valid');
        document.querySelector('.fname').textContent='Invalid Name';
    }
}


function isLastNameValid(){
    if(lastName.value == ""){
        lastName.classList.add('error');
        lastName.classList.remove('valid');
        document.querySelector('.lname').textContent='';
    }
    else if((nameCheck.test(lastName.value)) && !(/[\<\>\!@\$\%\^\&\*\(\)\_\-\=\+\?\.,'\/]+/.test(lastName.value))){
        lastName.classList.add('valid');
        lastName.classList.remove('error');
        document.querySelector('.lname').textContent='';
    }
    else{
        lastName.classList.add('error');
        lastName.classList.remove('valid');
        document.querySelector('.lname').textContent='Invalid Name';
    }
}


function isFormValid(e){
    e.preventDefault();
    let allInputs = document.querySelectorAll('input');
    const inputArr = [...allInputs];
    inputArr.forEach(checkForm)


    function checkForm(input,index){
        if(!(input.classList.contains('valid')) || (input.value == "")){
            submitMsg.textContent = 'Check Invalid fields';
            submitMsg.style.color = 'red';
            input.classList.add('error');
            input.classList.remove('valid');
        }
        else{
            submitMsg.textContent = 'All Good!';
            submitMsg.style.color = 'green';
            input.classList.add('valid');
            input.classList.remove('error');
        }
    }
}