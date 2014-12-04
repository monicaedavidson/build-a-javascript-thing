window.onload = function() {
  var album1 = document.getElementById('album1');
  var album2 = document.getElementById('album2');
  var album3 = document.getElementById('album3');
  var album4 = document.getElementById('album4');
  var album5 = document.getElementById('album5');

  function setDisplayNone() {
    album1.style.display = 'none';
    album2.style.display = 'none';
    album3.style.display = 'none';
    album4.style.display = 'none';
    album5.style.display = 'none';
  }
  setDisplayNone();

  var userNumber = prompt("Enter any number and we will give you an amazing music recommendation");

  var numberParsed = parseInt(userNumber);

  if (numberParsed % 8 === 0) {
    album1.style.display = 'block';
  } else if (numberParsed % 7 === 0) {
    album2.style.display = 'block';
  } else if (numberParsed % 5 === 0) {
    album3.style.display = 'block';
	} else if (numberParsed % 2 === 0) {
    album4.style.display = 'block';
  } else {
    album5.style.display = 'block';
  }
};
