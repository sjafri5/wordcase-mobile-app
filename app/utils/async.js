import { AsyncStorage } from 'react-native';

var Async = {
  createWordList() {
    AsyncStorage.getItem('wordList', (err, result) => {
      if (!result) {
        AsyncStorage.setItem('wordList', JSON.stringify({}))
      }
    })
  },
  cacheWord(word) {
   return AsyncStorage.mergeItem('wordList', JSON.stringify(word))
  }
}

module.exports = Async;
