const form = document.querySelector('.form');

//wywoływanie funkcji tworzenia obietnic
function handleSubmit(event) {
  event.preventDefault();
  console.log('34534534');
}

//tworzenie obietnic
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

//nasłuchiwanie formularza
form.addEventListener('submit', handleSubmit);
