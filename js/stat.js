'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 140;
var TEXT_Y = 260;
var BAR_Y = 240;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var STATS_GAP = 235;

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

var renderCongrats = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + 3 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + 5 * GAP);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');
  renderCongrats(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 1)');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomAlpha = Math.random(0);
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomAlpha + ')';
    }

    ctx.fillRect(TEXT_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, ((-BAR_MAX_HEIGHT * times[i]) / maxTime) + GAP);
  }

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.floor(times[j]), TEXT_X + (BAR_WIDTH + BAR_GAP) * j, ((-BAR_MAX_HEIGHT * times[j]) / maxTime) + STATS_GAP);
    ctx.fillText(names[j], TEXT_X + (BAR_WIDTH + BAR_GAP) * j, TEXT_Y);
  }
};
