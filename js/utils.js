'use strict';
(function () {
  window.randomizeArray = function (array) {
    array.sort(window.getRandomIndex);
  };

  window.getRandomIndex = function () {
    return Math.floor(Math.random() * window.WIZARDS_INDEX);
  };
})();
