'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var FONT_GAP = 50;
var BAR_WIDTH = 40;
var MAX_HEIGHT = 150;

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 4 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, ' + getRandomInt(1, 255) + ', 1)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + FONT_GAP + (BAR_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - CLOUD_Y - GAP - MAX_HEIGHT * times[i] / maxTime, BAR_WIDTH, MAX_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (BAR_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP + (BAR_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - 2 * GAP - CLOUD_Y - MAX_HEIGHT * times[i] / maxTime - GAP);
  }
};
