'use strict';

function getRandomColor(colors) {
  var colorArray = colors;
  var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  return randomColor;
}

module.exports = getRandomColor;
