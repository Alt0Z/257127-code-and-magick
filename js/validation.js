'use strict';

(function () {
  console.log('valid connected');
  var userNameField = window.setupWindow.querySelector('.setup-user-name');
  var onInvalidName = function () {
    if (userNameField.validity.tooShort) {
      userNameField.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameField.validity.tooLong) {
      userNameField.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameField.validity.valueMissing) {
      userNameField.setCustomValidity('Имя не может быть пустым');
    } else {
      userNameField.setCustomValidity('');
    }
  };
  userNameField.addEventListener('invalid', onInvalidName);
})();
