'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var openSetup = function () {
    window.setupWindow.classList.remove('hidden');
    window.setupWindow.querySelector('.setup-similar').classList.remove('hidden');
    document.removeEventListener('keydown', onEnterPress);
    setupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.ENTER_KEYCODE) {
        closeSetup();
      }
    });

    document.addEventListener('keydown', onEscPress);
  };

  var closeSetup = function () {
    window.setupWindow.classList.add('hidden');
    setupOpen.addEventListener('keydown', onEnterPress);
    document.removeEventListener('keydown', onEscPress);
  };

  var onSetupOpenClick = function () {
    openSetup();
  };

  var onSetupCloseClick = function () {
    closeSetup();
  };

  var onEscPress = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      closeSetup();
    }
  };

  var onEnterPress = function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      openSetup();
    }
  };

  setupOpen.addEventListener('keydown', onEnterPress);

  setupOpen.addEventListener('click', onSetupOpenClick);
  setupClose.addEventListener('click', onSetupCloseClick);
})();
