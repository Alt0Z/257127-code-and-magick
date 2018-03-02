'use strict';

(function () {
  var generateWizardsArray = function () {

    for (var i = 0; i <= window.WIZARDS_INDEX; i++) {
      window.wizards[i] = window.createWizard(window.names[i], window.surnames[i], window.coatColors[i], window.eyesColors[i]);
    }
  };

  generateWizardsArray();
})();
