function getAlbum(albumNumber) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'albums.json');
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      var albums = JSON.parse(xhr.responseText);
      var statusHTML = '<figure><img src="' + albums[albumNumber].imageURL + '" \
        alt="' + albums[albumNumber].imageAlt + '" class="winner">\
        <figcaption>' + albums[albumNumber].caption + '</figcaption>\
        </figure> <p class="description">' + albums[albumNumber].description + '</p>\
        <button><a href="' + albums[albumNumber].youTubeURL + '">Find</a></button>';

      document.getElementById('RecommendedAlbum').innerHTML = statusHTML;
    }
  };
  xhr.send();
}

window.onload = function() {
  var userNumber = prompt("Enter any number and we will give you an amazing music recommendation");

  var numberParsed = parseInt(userNumber);

  if (numberParsed % 8 === 0) {
    getAlbum(0);
  } else if (numberParsed % 7 === 0) {
    getAlbum(1);
  } else if (numberParsed % 5 === 0) {
    getAlbum(2);
  } else if (numberParsed % 2 === 0) {
    getAlbum(3);
  } else {
    getAlbum(4);
  }
}
