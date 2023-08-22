const controlButtons = document.querySelectorAll('.news__control');

function controlButtonsToggle() {
  controlButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      controlButtons.forEach(function (btn) {
        btn.classList.remove('is-active');
      });
      button.classList.add('is-active');
    });
  });
}

export {controlButtonsToggle};
