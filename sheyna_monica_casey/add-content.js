var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening! Why are you at CF so late??....yeah that is right, javascript is totally keeping track of time :)';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!, user....yeah, javascript is totally keeping track the time of day :)';
} else if (hourNow > 0) {
  greeting = 'Good morning user!!...yeah, javascript is totally keeping track of the time of day :)';
} else {
  greeting = 'Welcome CF user!!!!!!';
}

document.write('<h2>' + greeting + '</h2>');
