"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.querySelector('form');
function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
// btn?.addEventListener('click', function () {
//   input.value;
// });
