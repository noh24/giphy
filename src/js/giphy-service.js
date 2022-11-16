export class GiphyService {
  static getGiphy(userSearchQuery) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearchQuery}&limit=25&offset=0&rating=r&lang=en`;
      
      request.addEventListener('loadend', function() {
        let response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response, userSearchQuery]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class TrendyGiphyService {
  //create static method
  static trendyGiphy() {
    //return new promise object
    return new Promise(function(resolve, reject) {
      // create request object
      let request = new XMLHttpRequest();
      // create a url variable
      let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`;
  
      //open request (method, url, async)
      request.open('GET', url, true);
      //send request
      request.send();
  
      //add event listener to request to wait for sent request to finish
      request.addEventListener('loadend', function() {
        //JSON parse the response you get from the request
        let response = JSON.parse(this.responseText);
        // conditional to determine what is resolve or rejected promise
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response]);
        }
      });
    });
  }
}