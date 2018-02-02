'use strict';

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_INDEX = 3;
var wizards = [];
var similarListElement = setupWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var generatePerson = function (names, lastNames, coatColors, eyesColors) {
  var wizard = {
    name: names[getRandomIndex(names)],
    lastName: lastNames[getRandomIndex(lastNames)],
    coatColor: coatColors[getRandomIndex(coatColors)],
    eyesColor: eyesColors[getRandomIndex(eyesColors)]
  };
  return wizard;
};
// сделать проверку на неповторяющиеся имена
var generateWizardsArray = function () {
  for (var i = 0; i <= WIZARDS_INDEX; i++) {
    wizards[i] = generatePerson(NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);
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

// реализовать функцию
var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);
setupWindow.querySelector('.setup-similar').classList.remove('hidden');
