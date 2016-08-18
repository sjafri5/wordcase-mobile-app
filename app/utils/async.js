import { AsyncStorage } from 'react-native';

let Async = function(){ 
  let createWordList = function() {
    AsyncStorage.getItem('wordList', (err, result) => {
      if (!result) {
        AsyncStorage.setItem('wordList', JSON.stringify({}))
      }
    })
  };

  let fetchWordList = function() {
    return AsyncStorage.getItem('wordList', (err, result) => {
      return result;
    })
  };

  let cacheWord = function(word) {
   return AsyncStorage.mergeItem('wordList', JSON.stringify(word))
  };

  return {
    createWordList,
    cacheWord,
    fetchWordList
  }
}()

module.exports = Async;





//var Async = {
  //createWordList() {
    //AsyncStorage.getItem('wordList', (err, result) => {
      //if (!result) {
        //AsyncStorage.setItem('wordList', JSON.stringify({}))
      //}
    //})
  //},
  //fetchWordList() {
    //return AsyncStorage.getItem('wordList', (err, result) => {
      //return result;
    //})
  //},
  //cacheWord(word) {
   //return AsyncStorage.mergeItem('wordList', JSON.stringify(word))
  //}
//}
