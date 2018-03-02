'use strict';

(function () {
  var myWizard = document.querySelector('.setup-wizard');
  var wizardCoat = myWizard.querySelector('.wizard-coat');
  var wizardEyes = myWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var sortArray = function (array) {
    return array.sort(window.getRandomIndex);
  };

  var getRandomCoatColor = function () {
    sortArray(window.coatColors);
    wizardCoat.style.fill = window.coatColors[0];
  };

  var getRandomEyesColor = function () {
    sortArray(window.eyesColors);
    wizardEyes.style.fill = window.eyesColors[0];
  };

  var getRandomFireballColor = function () {
    sortArray(window.fireballColors);
    wizardFireball.style.backgroundColor = window.fireballColors[0];
  };

  wizardCoat.addEventListener('click', getRandomCoatColor);
  wizardEyes.addEventListener('click', getRandomEyesColor);
  wizardFireball.addEventListener('click', getRandomFireballColor);
})();
