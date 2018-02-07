'use strict';

var WIZARDS_INDEX = 3;

var setupWindow = document.querySelector('.setup');

var getRandomIndex = function () {
  return Math.floor(Math.random() * WIZARDS_INDEX);
};

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'].sort(getRandomIndex);
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'].sort(getRandomIndex);
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'].sort(getRandomIndex);
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
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

var displaySetupWindow = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');
};

displaySetupWindow();
