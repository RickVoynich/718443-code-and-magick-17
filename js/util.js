'use strict';

(function () {

  var getRandomElement = function (array) {
    return array[Math.floor((Math.random() * array.length))];
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  window.util = {
    getRandomElement: getRandomElement,
    getRandomInt: getRandomInt,
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,
    errorHandler: errorHandler
  };

})();
