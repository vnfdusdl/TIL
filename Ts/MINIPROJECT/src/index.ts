const btn = document.getElementById('btn');
const input = document.getElementById('input') as HTMLInputElement;
const form = document.querySelector('form');

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log('submitted');
}
form?.addEventListener('submit', handleSubmit);

// btn?.addEventListener('click', function () {
//   input.value;
// });
