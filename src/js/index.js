// business logic
//search GIPHY api function
function getGiphy(userSearchQuery) { 
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearchQuery}&limit=25&offset=0&rating=g&lang=en`;
  
  request.addEventListener('loadend', function() {
    let response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElement(response);
    } else {
      printError(this, response, userSearchQuery);
    }
  });
  
  request.open("GET", url, true);
  request.send();
}
//trendy gif
function trendyGiphy() {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`;

  request.addEventListener('loadend', function() {
    let response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElement(response);
    } else {
      printError(this, response);
    }
  });

  request.open("GET", url, true);
  request.send();
}
// ui logic
function printError(request, apiResponse, search) {
  document.getElementById('response').innerHTML = null;
  document.getElementById('response').innerHTML = `${search} is not a valid search. ${request.status} ${request.statusText}: ${apiResponse.meta.msg}`;
}

function printElement(apiResponse) {
  document.getElementById('response').innerHTML = null; 
  document.getElementById('gif-input').value = null;

  apiResponse.data.forEach(gif => {
    const img = document.createElement('img');
    img.setAttribute('src', gif.images.original.url);
    img.setAttribute('width', '150px');
    document.getElementById('response').append(img);
  });
}

// function printError(apiResponse) {
  
// }

window.addEventListener('load', function() {
  document.getElementById('trendy').addEventListener('click', trendyGiphy);
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let search = document.getElementById('gif-input').value;
    getGiphy(search);
  });
});