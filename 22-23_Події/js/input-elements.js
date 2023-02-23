/*
 * Події
 * - focus и blur
 * - input и change
 * - Чекбокси и властивість checked
 */

//  const refs = {
//    input: document.querySelector(".js-input"),
//    nameLabel: document.querySelector(".js-button > span"),
//    licenseCheckbox: document.querySelector(".js-license"),
//    btn: document.querySelector(".js-button"),
// };

const input = document.querySelector(".js-input");
const nameLabel = document.querySelector(".js-button > span");
const licenseCheckbox = document.querySelector(".js-license");
const btn = document.querySelector(".js-button");

// input.addEventListener("focus", onInputFocus);
// input.addEventListener("blur", onInputBlur);
// input.addEventListener("change", onInputChange);
// input.addEventListener("input", onLicensChange);

input.addEventListener("input", onInputChange);
licenseCheckbox.addEventListener("change", onLicensChange);

function onInputFocus(e) {
  console.log("Подія на інпуті:>> подія focus ");
}
function onInputBlur(e) {
  console.log("Подія на інпуті:>> подія blur ");
}
function onInputChange(e) {
  // console.log('e.currentTarget.value:>>', e.currentTarget.value)
  nameLabel.textContent = e.currentTarget.value;
}
function onLicensChange(e) {
  // console.log('e.currentTarget.checked:>>', e.currentTarget.checked)
  btn.disabled = !e.currentTarget.checked;
}

