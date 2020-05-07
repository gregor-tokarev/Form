const form = document.forms['announcement'];
const resetButtons = document.querySelectorAll('button.submit-button');
const inputs = [...form.elements];
const validators = document.querySelectorAll('.todo-list__item');

const section1 = [];
const section2 = [];
const section3 = [];
const section4 = [];
const section5 = [];
const section6 = [];
const section7 = [];

inputs.forEach(input => input.addEventListener('change', validate));
resetButtons.forEach(button => button.addEventListener('click', reset));

function validate() {
  section1.length = 0;
  section2.length = 0;
  section3.length = 0;
  section4.length = 0;
  section5.length = 0;
  section6.length = 0;
  section7.length = 0;
  
  
  section1.push(form['building-type'].value);
  section1.push(form['object-type'].value);
  
  if (section1.every(element => element)) {
    validators[0].className = '';
    validators[0].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section1.some(element => element)) {
    validators[0].className = '';
    validators[0].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[0].className = '';
    validators[0].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  
  section2.push(form['address'].value);
  
  if (section2.every(element => element)) {
    validators[1].className = '';
    validators[1].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section2.some(element => element)) {
    validators[1].className = '';
    validators[1].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[1].className = '';
    validators[1].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section3.push(form['full-square'].value);
  section3.push(form['level'].value);
  section3.push(form['levels-count'].value);
  section3.push(form['living-square'].value);
  section3.push(form['kitchen-square'].value);
  section3.push(form['repairs-type'].value);
  
  if (section3.every(element => element)) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section3.some(element => element)) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section4.push(document.querySelector('#select-1').dataset.value);
  section4.push(form['passenger-elevators-count'].value);
  section4.push(form['service-elevators-count'].value);
  section4.push(form['name'].value);
  section4.push(form['building-year'].value);
  section4.push(form['ceiling-height'].value);
  section4.push(form['parking-type'].value);
  
  
  if (section4.every(element => element && element !== 'Не выбрано')) {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section4.some(element => element && element !== 'Не выбрано')) {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section5.push(form['photos'].value);
  
  if (section5.every(element => element)) {
    validators[4].className = '';
    validators[4].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section5.some(element => element)) {
    validators[4].className = '';
    validators[4].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[4].className = '';
    validators[4].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section6.push(form['description'].value);
  
  if (section6.every(element => element)) {
    validators[5].className = '';
    validators[5].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section6.some(element => element)) {
    validators[5].className = '';
    validators[5].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[5].className = '';
    validators[5].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section7.push(form['price'].value);
  section7.push(form['sale-type'].value);
  section7.push(form['tariff'].value);
  
  if (section7.every(element => element)) {
    validators[6].className = '';
    validators[6].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section7.some(element => element)) {
    validators[6].className = '';
    validators[6].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[6].className = '';
    validators[6].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  

}
function reset(event) {
  event.preventDefault();
  form.reset();
  
  section1.length = 0;
  section2.length = 0;
  section3.length = 0;
  section4.length = 0;
  section5.length = 0;
  section6.length = 0;
  section7.length = 0;
  
  
  section1.push(form['building-type'].value);
  section1.push(form['object-type'].value);
  
  if (section1.every(element => element)) {
    validators[0].className = '';
    validators[0].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section1.some(element => element)) {
    validators[0].className = '';
    validators[0].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[0].className = '';
    validators[0].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  
  section2.push(form['address'].value);
  
  if (section2.every(element => element)) {
    validators[1].className = '';
    validators[1].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section2.some(element => element)) {
    validators[1].className = '';
    validators[1].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[1].className = '';
    validators[1].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section3.push(form['full-square'].value);
  section3.push(form['level'].value);
  section3.push(form['levels-count'].value);
  section3.push(form['living-square'].value);
  section3.push(form['kitchen-square'].value);
  section3.push(form['repairs-type'].value);
  
  if (section3.every(element => element)) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section3.some(element => element)) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section4.push(document.querySelector('#select-1').dataset.value);
  section4.push(form['passenger-elevators-count'].value);
  section4.push(form['service-elevators-count'].value);
  section4.push(form['name'].value);
  section4.push(form['building-year'].value);
  section4.push(form['ceiling-height'].value);
  section4.push(form['parking-type'].value);
  
  
  if (section4.every(element => element && element !== 'Не выбрано')) {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section4.some(element => element && element !== 'Не выбрано')) {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section5.push(form['photos'].value);
  
  if (section5.every(element => element)) {
    validators[4].className = '';
    validators[4].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section5.some(element => element)) {
    validators[4].className = '';
    validators[4].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[4].className = '';
    validators[4].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section6.push(form['description'].value);
  
  if (section6.every(element => element)) {
    validators[5].className = '';
    validators[5].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section6.some(element => element)) {
    validators[5].className = '';
    validators[5].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[5].className = '';
    validators[5].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section7.push(form['price'].value);
  section7.push(form['sale-type'].value);
  section7.push(form['tariff'].value);
  
  if (section7.every(element => element)) {
    validators[6].className = '';
    validators[6].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section7.some(element => element)) {
    validators[6].className = '';
    validators[6].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[6].className = '';
    validators[6].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  

}

/*

console.log(section2);

const section3 = [];
section3.push(document.querySelector('#room-count').dataset.value);
section3.push(form['is-penthouse'].value);
section3.push(form['is-adjoining'].value);
section3.push(form['is-isolated'].value);
section3.push(form['is-windows-to-courtyard'].value);
section3.push(form['is-windows-to-street'].value);
section3.push(form['is-balcony'].value);
section3.push(form['is-loggia'].value);
section3.push(form['is-separate-bathroom'].value);
section3.push(form['is-garbage-chute'].value);

console.log(section3);
const section4 = [];
section1.push(form['building-type'].value);
section1.push(form['object-type'].value);

console.log(section4);
const section5 = [];
section1.push(form['building-type'].value);
section1.push(form['object-type'].value);

console.log(section5);
*/
