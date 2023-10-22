const form = document.getElementById('survey-form');
const resetBtn = document.getElementById('reset');
const name = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('submit', handleSubmit);
resetBtn.addEventListener('click', resetForm);

function handleSubmit(e) {
    e.preventDefault();
  
    // resetErrors();
  
    if(!validateName(name)) {
      showError(name, 'Name is required');
      return;
    }
  
   
    if(!validateEmail(email)) {
      showError(email, 'Email is required');
      return;
    }
  
  
    // validate other fields
  
    if(validateForm()) {
      const data = getFormData();
      displayConfirmation(data);
    }
  
  }
  
  function validateName(field) {
    if(!field.value.trim()) {
      return false;
    }
    return true;
  }
  
  function validateEmail(field) {
    if(!field.value) {
      return false;
    }
    return true;
  }
  
  function validateSelect(field) {
    if(field.selectedIndex === 0) {
      return false;
    }
    return true;
  }
  
  function validateForm() {
    return true;
  }
  
  function getFormData() {
    return {
      name: name.value,
      email:email.value,
      
    };
  }
  
  function displayConfirmation(data) {
    // let html = `
    //   <p>Name: ${data.name}</p>
    //   <p>Email: ${data.email}</p>
    // `;
    // confirmation.innerHTML = html;
    const wndo = window.open();
    wndo.document.body.textContent = data.name + data.email;
  }
  
  function resetForm() {
    
    confirmation.innerHTML = '';
  }
  
  function showError(field, message) {
    field.nextElementSibling.innerText = message;
  }