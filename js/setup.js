'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireball = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];

var getRandomElement = function (array) {
  return array[Math.floor((Math.random() * array.length))];
};

var similarListElement = userDialog.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [];

for (var i = 0; i < 4; i++) {
  var wizard = {
    name: getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames),
    coatColor: getRandomElement(wizardCoatColor),
    eyesColor: getRandomElement(wizardEyesColor)
  };
  wizards.push(wizard);
}

var renderWizard = function (wizardRandom) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardRandom.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardRandom.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardRandom.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

var setupSimilar = userDialog.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var coat = document.querySelector('.setup-wizard .wizard-coat');
var eyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var COAT_COLOR = document.querySelector('[name="coat-color"]');
var EYES_COLOR = document.querySelector('[name="eyes-color"]');
var FIREBALL_COLOR = document.querySelector('[name="fireball-color"]');

coat.addEventListener('click', function () {
  coat.style.fill = getRandomElement(wizardCoatColor);
  COAT_COLOR.value = coat.style.fill;
});

eyes.addEventListener('click', function () {
  eyes.style.fill = getRandomElement(wizardEyesColor);
  EYES_COLOR.value = eyes.style.fill;
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getRandomElement(wizardFireball);
  FIREBALL_COLOR.value = fireball.style.backgroundColor;
});
