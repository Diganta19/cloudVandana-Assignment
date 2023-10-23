const form = document.getElementById('survey-form');
const resetBtn = document.getElementById('reset');
const name = document.getElementById('name');
const email = document.getElementById('email');
const first = document.getElementById('first').value;
const second = document.getElementById('second').value;
const third = document.getElementById('third').value;
const suggestions = document.getElementById('suggestions');
const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
function generatePopupHTML() {

  // Get form values

  let popupHTML = `
  <p>Name: ${name.value}</p>
        <p>Email: ${email.value}</p>
         <p>Email: ${first}</p>
        <p>Email: ${second}</p>
       <p>Email: ${third}</p>
         <p>Email: ${suggestions.value}</p>
  `;

  return popupHTML;

}

form.addEventListener('submit', e => {

  e.preventDefault();

  let popupHTML = generatePopupHTML();

  popup.innerHTML = popupHTML;
  popupContainer.style.display = "block";

});

const closeBtn = document.getElementById('close-btn');


closeBtn.addEventListener('click', () => {

  popupContainer.style.display = "none";

  
  resetForm();
});
function resetForm() {

    const f = document.getElementById('first');
    const s = document.getElementById('second');
    const t = document.getElementById('third');
   
    email.value='';
    name.value='';
    f.checked = false;
    s.checked = false;
    t.checked = false;
    suggestions.value='';  
  }
  
