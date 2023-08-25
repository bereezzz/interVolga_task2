document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.querySelector('.open-modal-btn');
    const closeModalButton = document.querySelector('.close-modal-btn');
    const cancelButton = document.querySelector('.cancel-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const form = document.querySelector('.modal-form');
    const inputs = form.querySelectorAll('input');
  
    openModalButton.addEventListener('click', function() {
      modalOverlay.style.display = 'flex';
    });
  
    function closeForm() {
      modalOverlay.style.display = 'none';
    }
  
    closeModalButton.addEventListener('click', closeForm);
  
    cancelButton.addEventListener('click', closeForm);
  
    // Загрузка сохраненных данных из localStorage при загрузке страницы
    inputs.forEach(input => {
      const savedValue = localStorage.getItem(input.id);
      if (savedValue) {
        input.value = savedValue;
      }
      
      //обработчик события input для сохранения данных в localStorage
      input.addEventListener('input', function() {
        localStorage.setItem(input.id, input.value);
      });
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      let isValid = true;

      inputs.forEach(input => {
      
        if (input.value.trim() === '') {
        console.log("Ошибка")
          isValid = false;
          input.classList.add('error');
        } else {
            console.log("все ок")
          input.classList.remove('error');

        }
      });
  
      if (isValid) {
        closeForm();
      }
    });
  });
  