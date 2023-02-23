/*

* - Подія submit
* - властивість elements
* - Події елементів форм. focus, blur, change, input.
 */
// const userNameInputEl = document.querySelector('.js-username-input');
// const userNameOutputEl = document.querySelector('.js-username-output');
// const checkboxEl = document.querySelector('.js-policy-checkbox');
// const submitBtnEl = document.querySelector('.js-contact-form-submit');
// const contactFormEl = document.querySelector('.js-contact-form');

// userNameInputEl.addEventListener('focus', event => {
//   console.log('Focus Event');

//   userNameInputEl.style.outlineColor = 'teal';
// });

// userNameInputEl.addEventListener('blur', event => {
//   console.log('Blur Event');
// });

// userNameInputEl.addEventListener('input', event => {
//   console.log('Input Event');

//   if (userNameInputEl.value === '') {
//     userNameOutputEl.textContent = '';

//     return;
//   }

//   userNameOutputEl.textContent = ', ' + userNameInputEl.value;
// });

// userNameInputEl.addEventListener('change', event => {
//   console.log('Change Event');
// });

// checkboxEl.addEventListener('change', event => {
//   console.log('Change Event on checkbox');

//   if (checkboxEl.checked && userNameInputEl.value !== '') {
//     submitBtnEl.removeAttribute('disabled');
//   } else {
//     submitBtnEl.disabled = true;
//   }
// });

// contactFormEl.addEventListener('submit', event => {
//   event.preventDefault();

//   console.log('Submit Event');

//   contactFormEl.reset();

//   submitBtnEl.disabled = true;
//   userNameOutputEl.textContent = '';
// });

// * - Подія submit
// * - властивість elements =====================================

// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log("elements:>>", e.currentTarget.elements);
//   const formEl = e.currentTarget.elements;

//   const mail = formEl.email.value;
//   const password = formEl.password.value;
//   const subscription = formEl.subscription.value;

//   const formData = { mail, password, subscription };
// }
