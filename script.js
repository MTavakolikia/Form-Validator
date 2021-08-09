const form=document.getElementById('form');
const password1El = document.getElementById('Password1');
const password2El = document.getElementById('Password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;
let passwordMatch = false;

function validForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message
    if(!isValid){
    message.textContent = 'Please fill out all fields';
    message.style.color='red';
    messageContainer.style.borderColor='red';
    return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }else{
        passwordMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if(isValid && passwordMatch){
        message.textContent='Successfully Registered!';
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
  }

  function storeForDate(){
      const user={
          name: form.name.value,
          phone: form.email.value,
          
      }
  }

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormDate(e){
    e.preventDefault();
    // Validate Form
    validForm();
    // Submit Data if Valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit',processFormDate);