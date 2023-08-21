
function checkboxStatusChecking() {
  const personalCheckbox = document.getElementById('personal');
  const errorText = document.querySelector('.feedback__check-error');

  if (personalCheckbox.checked) {
    errorText.style.display = 'none';
  }

  personalCheckbox.addEventListener('change', function () {
    if (!personalCheckbox.checked) {
      errorText.style.display = 'block';
    } else {
      errorText.style.display = 'none';
    }
  });
}

export {checkboxStatusChecking};
