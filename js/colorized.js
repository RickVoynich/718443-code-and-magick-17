'use strict';

(function () {

  var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardFireballColors = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];

  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var COAT_COLOR = document.querySelector('[name="coat-color"]');
  var EYES_COLOR = document.querySelector('[name="eyes-color"]');
  var FIREBALL_COLOR = document.querySelector('[name="fireball-color"]');

  coat.addEventListener('click', function () {
    coat.style.fill = window.util.getRandomElement(wizardCoatColors);
    COAT_COLOR.value = coat.style.fill;
  });

  eyes.addEventListener('click', function () {
    eyes.style.fill = window.util.getRandomElement(wizardEyesColors);
    EYES_COLOR.value = eyes.style.fill;
  });

  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = window.util.getRandomElement(wizardFireballColors);
    FIREBALL_COLOR.value = fireball.style.backgroundColor;
  });

})();
