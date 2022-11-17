import { GetGiphyService, TrendyGiphyService, RandomGiphyService } from "./giphy-service";
// import { GetGiphyService, RandomGiphy } from './giphy-service.js';
//search GIPHY api function
// function getGiphy(userSearchQuery) { 
//   let promise = GiphyService.getGiphy(userSearchQuery);

//   promise.then(function(giphyData) {
//     printElement(giphyData);
//   }, function(giphyErrorArray) {
//     printError(giphyErrorArray);
//   });
// }

// trendy gif

// function trendyGiphy() {
//   let promise = TrendyGiphyService.trendyGiphy();
  
//   promise.then(function(trendyGiphyData) {
//     printElement(trendyGiphyData);
//   }, function(trendyGiphyErrorArray) {
//     printError(trendyGiphyErrorArray);
//   });
// }

//random giphy
//async function
async function randomGiphy() {
  let response = await RandomGiphyService.randomGiphy();
  if (response.data) {
    printElement(response);
  } else {
    printError(response);
  }
}

// fetch api
// function randomGiphy() {
//   RandomGiphyService.getRandomGiphy()
//     .then(response => {
//       if (response.data) {
//         printElement(response);
//       } else {
//         printError(response);
//       }
//     });
// }

//get giphy
//async function
async function getGiphy(search) {
  let response = await GetGiphyService.getGiphy(search);
  if (response.data) {
    printElement(response);
  } else {
    printError(response, search);
  }
}
// //fetch api
// function getGiphy(search) {
//   GetGiphyService.getGiphy(search)
//     .then(response => {
//       if (response.data) {
//         printElement(response);
//       } else {
//         printError(response, search);
//       }
//     });
// }

//trendy
function trendyGiphy() {
  TrendyGiphyService.trendyGiphy()
    .then(response => {
      if (response.data) {
        printElement(response);
      } else {
        printError(response);
      }
    });
}


// ui logic
//fetch

function printElement(response) {
  document.getElementById('response').innerHTML = null; 
  document.getElementById('gif-input').value = null;
  
  if (response.data[1] !== undefined) {
    response.data.forEach(gif => {
      const img = document.createElement('img');
      img.setAttribute('src', gif.images.original.url);
      img.setAttribute('width', '250px');
      document.getElementById('response').append(img);
    });
  } else if (response.data[0] !== undefined) {
    const img = document.createElement('img');
    img.setAttribute('src', response.data.images.original.url);
    document.getElementById('response').append(img);
  } else {
    const p = document.createElement('p');
    p.innerText = `Enter a valid search`;
    p.style.color = 'red';
    document.getElementById('response').append(p);
  }
}

function printError(error, search) {
  document.getElementById('response').innerHTML = null;
  if (search) {
    document.getElementById('response').innerHTML = `${search} is not a valid search. ${error}`;
  } else {
    document.getElementById('response').innerHTML = `${error}`;
  }
}
// // promises
// function printElement(data) {
//   document.getElementById('response').innerHTML = null; 
//   document.getElementById('gif-input').value = null;
  
//   if (data.data[1] !== undefined) {
//     data.data.forEach(gif => {
//       const img = document.createElement('img');
//       img.setAttribute('src', gif.images.original.url);
//       img.setAttribute('width', '250px');
//       document.getElementById('response').append(img);
//     });
//   } else {
//     const img = document.createElement('img');
//     img.setAttribute('src', data.data.images.original.url);
//     document.getElementById('response').append(img);
//   }
// }

// function printError(error) {
//   document.getElementById('response').innerHTML = null;
//   if (error[2] !== undefined) {
//     document.getElementById('response').innerHTML = `${error[2]} is not a valid search. ${error[0].status} ${error[0].statusText}: ${error[1].meta.msg}`;
//   } else {
//     document.getElementById('response').innerHTML = `${error[0].status} ${error[0].statusText}: ${error[1].meta.msg}`;
//   }
// }
  
window.addEventListener('load', function() {
  document.getElementById('trendy').addEventListener('click', trendyGiphy);
  document.getElementById('random').addEventListener('click', randomGiphy);
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let search = document.getElementById('gif-input').value;
    getGiphy(search);
  });
});

