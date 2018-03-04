'use strict';

(function () {
  window.WIZARDS_INDEX = 3;
  window.ENTER_KEYCODE = 13;
  window.ESC_KEYCODE = 27;

  window.setupWindow = document.querySelector('.setup');

  window.getRandomIndex = function () {
    return Math.floor(Math.random() * window.WIZARDS_INDEX);
  };

  window.names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  window.surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  window.fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  window.wizards = [];
  window.similarListElement = window.setupWindow.querySelector('.setup-similar-list');
  window.similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var shuffleMageParameters = function () {
    window.randomizeArray(window.names);
    window.randomizeArray(window.surnames);
    window.randomizeArray(window.coatColors);
  };

  shuffleMageParameters();

  window.createWizard = function (name, lastName, coatColor, eyesColor) {
    return {
      name: name,
      lastName: lastName,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  };
})();
