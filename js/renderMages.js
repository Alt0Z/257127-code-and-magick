'use strict';

(function () {
  var renderWizard = function (wizard) {
    var wizardElement = window.similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderSimilarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.wizards.length; i++) {
      fragment.appendChild(renderWizard(window.wizards[i]));
    }

    window.similarListElement.appendChild(fragment);
  };

  renderSimilarWizards();
})();
