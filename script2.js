const nameError=document.getElementById("name-error");
const phoneError=document.getElementById("phone-error");
const emailError=document.getElementById("Email-error");
const messageError=document.getElementById("message-error");
const submitError=document.getElementById("submit-error");

function validatename(){
    const name =document.getElementById("contact-name").value;
    if(name.lenght==0){
        nameError.innerHTML="name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="write full name";
        return false;
    }
    nameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validatephone(){
    const phone =document.getElementById('contact-phone').value;
    if(phone.lenght==0){
        phoneError.innerHTML='phone number is required';
        return false;
    }
    if(phone.lenght !==10){
        phoneError.innerHTML='NO should be 10 digits';
        return false;

    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='only digits please';
         return false;
   }
    phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
        return true; 
}
function validateemail(){
    const email =document.getElementById("contact-Email").value;
    if(email.lenght==0){
        emailError.innerHTML="email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {

        emailError.innerHTML="email invalid";
        return false;
    }
    
     emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validatemessage(){
    const message = document.getElementById("contact-message").value;
    const required= 30;
    const left = required - message.lenght;
    if(message.lenght==0){
        messageError.innerHTML='message  is required';
        return false;
    }
    if(left>0){

        messageError.innerHTML= left + 'more charecter  is required';
        return false;
    }
    messageError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateform(){
   if(!validatename()|| !validatephone() || !validateemail()||!validatemessage()){
    submitError.style.display='block';
    submitError.innerHTML='please fix error to submit';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
   }
}
