const fileInputs = document.querySelectorAll('.photo-input');
const functionalInputs = document.querySelectorAll('.photo-input__input');

functionalInputs.forEach(element => {
  const filesList = [];
  
  element.addEventListener('change', event => {
    event.currentTarget.files.forEach(file => filesList.push(file));
    
    filesList.forEach(file => uploadFile(file));
    
    const uploadFile = (file) => {
      
      if (file.size > 10 * 1024 * 1024) {
        alert('Файл должен быть не более 5 МБ.');
        return;
      }
    }
    
    /*      if (file && file.length > 1) {
            if ( file.length <= 4 ) {
              textSelector.textContent = `Выбрано ${file.length} файла`;
            }
            if ( file.length > 4 ) {
              textSelector.textContent = `Выбрано ${file.length} файлов`;
            }
          } else {
            textSelector.textContent = file.name;
          }
        }*/
  })
});
