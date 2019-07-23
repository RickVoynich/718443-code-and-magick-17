'use strict';

(function () {

  var getRandomElement = function (array) {
    return array[Math.floor((Math.random() * array.length))];
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.util = {
    getRandomElement: getRandomElement,
    getRandomInt: getRandomInt,
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13
  };

})();
