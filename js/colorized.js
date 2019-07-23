'use strict';

(function () {

  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var COAT_COLOR = document.querySelector('[name="coat-color"]');
  var EYES_COLOR = document.querySelector('[name="eyes-color"]');
  var FIREBALL_COLOR = document.querySelector('[name="fireball-color"]');

  coat.addEventListener('click', function () {
    coat.style.fill = window.util.getRandomElement(window.setup.coatColor);
    COAT_COLOR.value = coat.style.fill;
  });

  eyes.addEventListener('click', function () {
    eyes.style.fill = window.util.getRandomElement(window.setup.eyesColor);
    EYES_COLOR.value = eyes.style.fill;
  });

  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = window.util.getRandomElement(window.setup.fireballColor);
    FIREBALL_COLOR.value = fireball.style.backgroundColor;
  });

})();
