'use strict';
(function () {

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizardRandom) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizardRandom.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardRandom.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardRandom.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    similarListElement.innerHTML = '';
    var number = wizards.length > 4 ? 4 : wizards.length;
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < number; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);
  };

  window.backend.load(successHandler, window.util.errorHandler);

})();
