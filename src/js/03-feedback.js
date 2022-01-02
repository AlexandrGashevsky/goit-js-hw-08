import debounce from "lodash/debounce";
const data = {};
const form = document.querySelector('.feedback-form');
const mail = document.querySelector('.feedback-form input');
const text = document.querySelector('.feedback-form textarea');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const consoleOutput = {
    email: mail.value,
    message: text.value
  }
  console.log(consoleOutput);
 event.currentTarget.reset();
 localStorage.removeItem("feedback-form-state");
}); 

form.addEventListener('input', debounce((event) => {
    data[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(data);
}, 500));

let outputData;
if (localStorage.getItem('feedback-form-state') !== null)
{
    outputData = JSON.parse(localStorage.getItem("feedback-form-state"));
    mail.value = outputData.email;
    text.value = outputData.message;
}



