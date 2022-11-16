import { GiphyService, TrendyGiphyService } from "./giphy-service";
//search GIPHY api function
function getGiphy(userSearchQuery) { 
  let promise = GiphyService.getGiphy(userSearchQuery);

  promise.then(function(giphyData) {
    printElement(giphyData);
  }, function(giphyErrorArray) {
    printError(giphyErrorArray);
  });
}
// trendy gif

function trendyGiphy() {
  let promise = TrendyGiphyService.trendyGiphy();
  
  promise.then(function(trendyGiphyData) {
    printElement(trendyGiphyData);
  }, function(trendyGiphyErrorArray) {
    printError(trendyGiphyErrorArray);
  });
}
// // random gif
// function randomGiphy() {
//   let request = new XMLHttpRequest();
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=pg`;

//   request.addEventListener('loadend', function() {
//     let response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       printElement(response);
//     } else {
//       printError(this, response);
//     }
//   });

//   request.open("GET", url, true); 
//   request.send();
// }

// ui logic

function printElement(data) {
  document.getElementById('response').innerHTML = null; 
  document.getElementById('gif-input').value = null;
  
  if (data.data[1] !== undefined) {
    data.data.forEach(gif => {
      const img = document.createElement('img');
      img.setAttribute('src', gif.images.original.url);
      img.setAttribute('width', '250px');
      document.getElementById('response').append(img);
    });
  } else {
    const img = document.createElement('img');
    img.setAttribute('src', data.data.images.original.url);
    document.getElementById('response').append(img);
  }
}

function printError(error) {
  document.getElementById('response').innerHTML = null;
  if (error[2] !== undefined) {
    document.getElementById('response').innerHTML = `${error[2]} is not a valid search. ${error[0].status} ${error[0].statusText}: ${error[1].meta.msg}`;
  } else {
    document.getElementById('response').innerHTML = `${error[0].status} ${error[0].statusText}: ${error[1].meta.msg}`;

  }
}
  
window.addEventListener('load', function() {
  document.getElementById('trendy').addEventListener('click', trendyGiphy);
  // document.getElementById('random').addEventListener('click', randomGiphy);
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let search = document.getElementById('gif-input').value;
    getGiphy(search);
  });
});

