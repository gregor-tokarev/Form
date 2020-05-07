const selects = document.querySelectorAll('.select');

selects.forEach( select => {
  const header = select.querySelector('.select__header');
  const items = select.querySelectorAll('.select__item');
  const backEndValue = select.querySelector('.select__input');
  
  if (header.querySelector('.select__current').dataset.value === '') {
    header.querySelector('.select__current').dataset.value = items[0].dataset.value;
    header.querySelector('.select__current').textContent = items[0].dataset.value;
    backEndValue.value = items[0].dataset.value;
  }
  
  header.addEventListener('click', event => {
    const target = event.currentTarget;
    const parent = target.parentElement;
    parent.classList.toggle('select--active')
  });
  
  items.forEach(item => {
    item.addEventListener('click', event => {
      const target = item;
      const value = target.dataset.value;
      const current = header.querySelector('.select__current');
  
      current.dataset.value = value;
      current.textContent = value;
      
      backEndValue.value = value;
      
      select.classList.remove('select--active');
    });
  });
} );
