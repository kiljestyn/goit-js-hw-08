import { getFromLS, saveTolS } from './helpers';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inInput, 500));
form.addEventListener('submit', onSubmit);

const { email, message } = form.elements;
const KEY = 'feedback-form-state';

function inInput() {
  const info = {
    email: email.value,
    message: message.value,
  };
  saveTolS(KEY, info);
}

const data = getFromLS(KEY) || { email: '', message: '' };

function onStart() {
  email.value = data.email || '';
  message.value = data.message || '';
}
onStart();

function onSubmit(evt) {
  evt.preventDefault();
  const emailValue = email.value;
  const messageValue = message.value;
  if (emailValue === '' || messageValue === '') {
    return alert('Fill in all fields!');
  } else {
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(KEY);
  }
}
