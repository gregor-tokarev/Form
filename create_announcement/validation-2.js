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
  section2.push(form['housing-name'].value);
  section2.push(form['body'].value);
  
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
  
  section3.push(form['tax-number'].value);
  section3.push(form['square'].value);
  section3.push(form['is-part'].value);
  section3.push(form['floor'].value);
  section3.push(form['max-floor'].value);
  section3.push(document.querySelector('#is-legal-address').dataset.value);
  section3.push(form['сeiling-height'].value);
  section3.push(form['is-not-empty'].value);
  section3.push(form['layout'].value);
  section3.push(document.querySelector('#wet-spots').dataset.value);
  section3.push(form['electric-power'].value);
  section3.push(document.querySelector('#condition').dataset.value);
  section3.push(form['has-furniture'].value);
  section3.push(form['access'].value);
  section3.push(form['parking-type'].value);
  section3.push(form['place-count'].value);
  section3.push(form['parking-price'].value);
  
  
  if (section3.every(element => element && element !== 'Не выбранно')) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section3.some(element => element && element !== 'Не выбранно' && element !== 'нет')) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section4.push(form['nameing'].value);
  section4.push(form['building-year'].value);
  section4.push(document.querySelector('#building-type').dataset.value);
  section4.push(form['building-level'].value);
  section4.push(form['building-year'].value);
  section4.push(form['building-square'].value);
  // section4.push(form['parking-type'].value);
  section4.push(form['category'].value);
  section4.push(form['developer'].value);
  section4.push(form['management-company'].value);
  
  
  if (section4.every(element => element && element !== 'Выбирите тип здания')) {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section4.some(element => element && element !== 'Выбирите тип здания')) {
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
  section2.push(form['housing-name'].value);
  section2.push(form['body'].value);
  
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
  
  section3.push(form['tax-number'].value);
  section3.push(form['square'].value);
  section3.push(form['is-part'].value);
  section3.push(form['floor'].value);
  section3.push(form['max-floor'].value);
  section3.push(document.querySelector('#is-legal-address').dataset.value);
  section3.push(form['сeiling-height'].value);
  section3.push(form['is-not-empty'].value);
  section3.push(form['layout'].value);
  section3.push(document.querySelector('#wet-spots').dataset.value);
  section3.push(form['electric-power'].value);
  section3.push(document.querySelector('#condition').dataset.value);
  section3.push(form['has-furniture'].value);
  section3.push(form['access'].value);
  section3.push(form['parking-type'].value);
  section3.push(form['place-count'].value);
  section3.push(form['parking-price'].value);
  
  
  if (section3.every(element => element && element !== 'Не выбранно')) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section3.some(element => element && element !== 'Не выбранно' && element !== 'нет')) {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--in-complete')
  } else {
    validators[2].className = '';
    validators[2].classList.add('todo-list__item', 'todo-list__item--not-complete')
  }
  
  section4.push(form['nameing'].value);
  section4.push(form['building-year'].value);
  section4.push(document.querySelector('#building-type').dataset.value);
  section4.push(form['building-level'].value);
  section4.push(form['building-year'].value);
  section4.push(form['building-square'].value);
  // section4.push(form['parking-type'].value);
  section4.push(form['category'].value);
  section4.push(form['developer'].value);
  section4.push(form['management-company'].value);
  
  
  if (section4.every(element => element && element !== 'Выбирите тип здания')) {
    validators[3].className = '';
    validators[3].classList.add('todo-list__item', 'todo-list__item--complete')
  } else if (section4.some(element => element && element !== 'Выбирите тип здания')) {
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

