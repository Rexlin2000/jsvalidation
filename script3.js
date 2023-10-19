var form = document.querySelector('#form')

var email = document.querySelector('#email')
var password = document.querySelector('#password')


form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs()
{
    
    var emailVal = email.value.trim()
    var passwordVal = password.value.trim()
    
    var success=true

   

    if(emailVal==='')
    {
        success=false
        setError(email, 'Email is Required')
    }
    else if(!validateEmail(emailVal)){
        success=false
        setError(email,'Please enter the valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        success=false
        setError(password,'Password is Required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'Passord Must be alteast 8 character')
    }
    else{
        setSuccess(password)
    }

    
    return success;

}
function setError(element,message)
{
    var inputGroup = element.parentElement
    var errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element)
{
    var inputGroup = element.parentElement
    var errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = ''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

var validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    );
}