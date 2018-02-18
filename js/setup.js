'use strict';

var WIZARDS_INDEX = 3;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var getRandomIndex = function () {
  return Math.floor(Math.random() * WIZARDS_INDEX);
};

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'].sort(getRandomIndex);
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'].sort(getRandomIndex);
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'].sort(getRandomIndex);
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];
var similarListElement = setupWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var createWizard = function (name, lastName, coatColor, eyesColor) {
  return {
    name: name,
    lastName: lastName,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
};

var generateWizardsArray = function () {

  for (var i = 0; i <= WIZARDS_INDEX; i++) {
    wizards[i] = createWizard(names[i], surnames[i], coatColors[i], eyesColors[i]);
  }
};

generateWizardsArray();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderSimilarWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

renderSimilarWizards(); // Перенести в onSetupOpenClick, но реализовать проверку на 4 макс. айтема

// Обработка событий
var openSetup = function () {
  console.log('setup open');
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  document.removeEventListener('keydown', onEnterPress);
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetup();
    }
  });

  document.addEventListener('keydown', onEscPress);
};

var closeSetup = function () {
  console.log('setup close');
  setupWindow.classList.add('hidden');
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
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetup();
  }
};

var onEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
};

setupOpen.addEventListener('keydown', onEnterPress);

setupOpen.addEventListener('click', onSetupOpenClick);
setupClose.addEventListener('click', onSetupCloseClick);

// Валидация форм
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
var userNameField = setupWindow.querySelector('.setup-user-name');
userNameField.addEventListener('invalid', onInvalidName);

// Кастоматизация волшебника
var myWizard = document.querySelector('.setup-wizard');
var wizardCoat = myWizard.querySelector('.wizard-coat');
var wizardEyes = myWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var sortArray = function (array) {
  return array.sort(getRandomIndex);
};

var getRandomCoatColor = function () {
  sortArray(coatColors);
  wizardCoat.style.fill = coatColors[0];
};

var getRandomEyesColor = function () {
  sortArray(eyesColors);
  wizardEyes.style.fill = eyesColors[0];
};

var getRandomFireballColor = function () {
  sortArray(fireballColors);
  wizardFireball.style.backgroundColor = fireballColors[0];
};

wizardCoat.addEventListener('click', getRandomCoatColor);
wizardEyes.addEventListener('click', getRandomEyesColor);
wizardFireball.addEventListener('click', getRandomFireballColor);
