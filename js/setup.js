'use strict';

var setupWindow = document.querySelector('.setup');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_INDEX = 3;
var wizards = [];
var similarListElement = setupWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomIndex = function () {
  return Math.floor(Math.random() * NAMES.length);
};

var getRandomArr = function (array) {
  var randomArr = array;
  return randomArr.sort(getRandomIndex);
};

var createWizard = function (name, lastName, coatColor, eyesColor) {
  var wizard = {
    name: name,
    lastName: lastName,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

  return wizard;
};

var generateWizardsArray = function () {
  var randomNames = getRandomArr(NAMES);
  var randomLastNames = getRandomArr(LAST_NAMES);
  var randomCoatColors = getRandomArr(COAT_COLORS);
  var randomEyesColors = getRandomArr(EYES_COLORS);
  for (var i = 0; i <= WIZARDS_INDEX; i++) {
    wizards[i] = createWizard(randomNames[i], randomLastNames[i], randomCoatColors[i], randomEyesColors[i]);
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

var displaySetupWindow = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');
};

displaySetupWindow();
