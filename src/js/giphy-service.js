export default class GiphyService {
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