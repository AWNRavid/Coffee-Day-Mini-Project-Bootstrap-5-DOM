const alert1 = document.getElementsByClassName('alert-1')[0];

alert1.innerHTML = 'Release at 28 February 2022. Stay tune 😊';

const submitBtn = document.getElementsByClassName('btn')[16];
const inputField = document.getElementsByTagName('input')[0];
const textAreaField = document.getElementsByTagName('textarea')[0];

submitBtn.addEventListener('click', () => {
  alert('Message sent!');
  inputField.value = '';
  textAreaField.value = '';
});

// console.log(document.getElementsByTagName('i'));

// document.getElementsByTagName('i')[0].style.color = 'red';
const icon = document.getElementsByTagName('i');

for (let i = 0; i < icon.length; i++) {
   icon[i].style.color = '#9C0F48'; 
}