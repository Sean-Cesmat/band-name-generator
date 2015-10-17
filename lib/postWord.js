'use strict';

function postWord(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have \"' + word + '\" in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting \"' + word + '\"!'};
}

module.exports = postWord;
