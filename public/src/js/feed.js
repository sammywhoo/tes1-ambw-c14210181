var sharedMomentsArea = document.querySelector('#shared-moments');

function clearCards() {
  while(sharedMomentsArea.hasChildNodes()) {
    sharedMomentsArea.removeChild(sharedMomentsArea.lastChild);
  }
}

function createCard(data) {
  var cardWrapper = document.createElement('div');
  cardWrapper.className = 'card';
  cardWrapper.id = data.name;
  cardWrapper.onclick = function() {
    // openCreatePostModal(data.title);
    var url = 'detail.html';
    url += '?name='+data.name;
    url += '&url='+data.url;
    url += '&desc='+data.desc;
    
    console.log(url);
    
    window.location.href = url;
  };
  
  var cardTitle = document.createElement('div');
  cardTitle.className = 'image';
  cardTitle.style.backgroundImage = 'url(' + data.url + ')';
  cardTitle.style.backgroundSize = 'cover';
  cardTitle.style.height = '180px';
  cardWrapper.appendChild(cardTitle);

  var cardSupportingText = document.createElement('p');
  cardSupportingText.className = 'mdl-card__supporting-text';
  cardSupportingText.textContent = data.name;
  cardSupportingText.style.textAlign = 'center';

  cardWrapper.appendChild(cardSupportingText);
  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);
}


function updateUI(data) {
  clearCards();
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}

var url = 'https://tes1-ambw-c14210181-default-rtdb.firebaseio.com/posts.json';
var networkDataReceived = false;

fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    networkDataReceived = true;
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
      dataArray.push(data[key]);
    }
    updateUI(dataArray);
  });

if ('indexedDB' in window) {
  readAllData('posts')
    .then(function(data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}
