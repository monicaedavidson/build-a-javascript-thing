function getAlbum(albumNumber) {
  var url = "albums.json";
  $.getJSON(url, function(data) {
    var albums = data;
    var albumFigure = '<figure><img src="' + albums[albumNumber].imageURL + '"';
    var albumFigureAlt = 'alt="' + albums[albumNumber].imageAlt + '"';
    var albumClass = 'class="winner">';
    var albumFigCaption = '<figcaption>' + albums[albumNumber].caption + '</figcaption>';
    var albumCloseFig = '</figure>';
    $('#RecommendedAlbum').append(albumFigure + albumFigureAlt + albumClass + albumFigCaption + albumCloseFig);
    $('#RecommendedAlbum').append('<p class="description">' + albums[albumNumber].description + '</p>');
    var albumBtnStart = '<button>';
    var albumBtnLink = '<a href="' + albums[albumNumber].youTubeURL + '">Find</a>';
    var albumBtnClose = '</button>';
    $('#RecommendedAlbum').append(albumBtnStart + albumBtnLink + albumBtnClose);
  });
};

$(document).ready(function() {
  var userNumber = prompt("Enter any number and we will give you an amazing music recommendation");

  var numberParsed = parseInt(userNumber);

  if (numberParsed % 7 === 0) {
    getAlbum(0);
  } else if (numberParsed % 5 === 0) {
    getAlbum(1);
  } else if (numberParsed % 3 === 0) {
    getAlbum(2);
  } else if (numberParsed % 2 === 0) {
    getAlbum(3);
  } else {
    getAlbum(4);
  }
});
