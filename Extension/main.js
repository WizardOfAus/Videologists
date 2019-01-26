/* buildApiRequest('GET',
  '/youtube/v3/search', {
    'maxResults': '25',
    'part': 'snippet',
    'q': 'surfing',
    'type': ''
  }); */

// GET https://www.googleapis.com/youtube/v3/search

// var OAUTH2_CLIENT_ID =


// function loaded(){ -- for loading in body with js script 

var cardContainer = document.getElementById('card-container');

for (var index in result.items) {
    if (index >= 8) {
        break;
    }
    if (index % 4 == 0) {
        row = document.createElement("div");
        cardContainer.appendChild(row);
    }
  console.log(result.items[index].snippet.title);
  var card = document.createElement("div");
  var imgHolder = document.createElement("div");
  var img = document.createElement("img");
  var title = document.createElement("div");
  card.className = "card";
  img.src = result.items[index].snippet.thumbnails.default.url;
  title.innerText = result.items[index].snippet.title;
  if (title.innerText.length > 20)
  	{
    	title.innerText = title.innerText.substring(0, 17) + '...';
    }
  imgHolder.appendChild(img);
  card.appendChild(imgHolder);
  card.appendChild(title);
  row.appendChild(card);
//   cardContainer.appendChild(card);
// }

};





