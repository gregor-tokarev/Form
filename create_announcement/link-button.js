const buttons = document.querySelectorAll('.link-button');
const targets = document.querySelectorAll('.link-button__target');

buttons.forEach( button => {
  button.addEventListener('click', event => {
    const toggleId = event.currentTarget.dataset.toggleId;
    const target = document.querySelector(`#toggle-${toggleId}`);
  
    console.log(toggleId);
    
    target.classList.toggle('link-button__target--active');
    event.currentTarget.classList.toggle('link-button--active');
    event.currentTarget.textContent = event.currentTarget.textContent === 'Меньше параметров' ? 'Блольше параметров' : 'Меньше параметров'
  });
} );
