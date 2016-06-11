//import wordsTestKey from './secrets';
import * as secrets from './secrets';

var Api = {
  getDefinition(word) {
    let request = this.createRequestObject('GET', secrets.wordsTestKey)
    let url = `https:\/\/wordsapiv1.p.mashape.com/words/${word}`

    return fetch(url, request)
      .then(function(response){
        return response.json();
      })
  },
  createRequestObject(requestType, apiToken){
      return {  
        method: requestType,
        headers: {
          "X-Mashape-Key": apiToken,
          "Accept": "application/json"
        }
      };
  },
  checkStatus: function(response){
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

module.exports = Api;
