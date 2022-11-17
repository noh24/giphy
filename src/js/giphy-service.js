// export class GiphyService {
//   static getGiphy(userSearchQuery) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearchQuery}&limit=25&offset=0&rating=r&lang=en`;
      
//       request.addEventListener('loadend', function() {
//         let response = JSON.parse(this.responseText);
//         if (this.status === 200) {
//           resolve(response);
//         } else {
//           reject([this, response, userSearchQuery]);
//         }
//       });
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }

// export class TrendyGiphyService {
//   //create static method
//   static trendyGiphy() {
//     //return new promise object
//     return new Promise(function(resolve, reject) {
//       // create request object
//       let request = new XMLHttpRequest();
//       // create a url variable
//       let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`;
  
//       //open request (method, url, async)
//       request.open('GET', url, true);
//       //send request
//       request.send();
  
//       //add event listener to request to wait for sent request to finish
//       request.addEventListener('loadend', function() {
//         //JSON parse the response you get from the request
//         let response = JSON.parse(this.responseText);
//         // conditional to determine what is resolve or rejected promise
//         if (this.status === 200) {
//           resolve(response);
//         } else {
//           reject([this, response]);
//         }
//       });
//     });
//   }
// }

// export class RandomGiphyService {
//   static getRandomGiphy() {
//     return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=pg`)
//       .then(response => {
//         if (!response.ok) {
//           const errorMsg = `${response.status} ${response.statusText}`;
//           throw new Error(errorMsg);
//         } else {
//           return response.json();
//         }
//       })
//       .catch(error => {
//         return error;
//       });
//   }
// }

// export class GetGiphyService {
//   static getGiphy(search) {
//     return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=r&lang=en`)
//       .then(response => {
//         if (!response.ok) {
//           const errorMsg = `${response.status} ${response.statusText}`;
//           throw new Error(errorMsg);
//         } else {
//           return response.json();
//         }
//       })
//       .catch(error => error);
//   }
// }

export class TrendyGiphyService {
  static trendyGiphy() {
    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`)
      .then(response => {
        if (!response.ok) {
          const errorMsg = `${response.status} ${response.statusText}`;
          throw new Error(errorMsg);
        } else {
          return response.json();
        }
      })
      .catch(error => error);
  }
}

// random giphy
export class RandomGiphyService {
  static async randomGiphy() {
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=pg`);
      let jsonResponse = await response.json();

      if (!response.ok) {
        const errorMsg = `${response.status} ${response.statusText} ${jsonResponse.meta.msg}`;
        throw new Error(errorMsg);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}

export class GetGiphyService {
  static async getGiphy(search) {
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=r&lang=en`);
      let jsonResponse = await response.json();

      if (!response.ok) {
        const errorMsg = `${response.status} ${response.statusText} ${jsonResponse.meta.msg}`;
        throw new Error(errorMsg);
      }
      return jsonResponse;
    } catch(error) {
      return error;
    }
  }
}