// Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

document.getElementById("myImage").addEventListener("touchstart", displayMessage);

function displayMessage() {
  document.getElementById("message").innerHTML = "";
}











// Function to get the current time category
function getCurrentTimeCategory() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "afternoon";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "morning";
  } 
else if (currentHour >= 17 && currentHour < 21) {
    return "evening-late";
  } 

else {
    return "evening";
  }
}
















// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define your track list with time categories
let trackList = [
  


{
     name: "Welcome! todays program",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 
 timeCategory: "evening-late"

},





 

























































































































































{
    name: " Rockit",
    artist: "Herbie Hancock  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Herbie Hancock - Rockit.mp3",
  timeCategory: "afternoon"
},









{
    name: " Don't Call  Me Baby ",
    artist: "Madison Avenue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Madison Avenue - Don't Call  Me Baby.mp3",
    timeCategory: "afternoon"
},






































































































































{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 01.mp3",
  timeCategory: "evening"

},

{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 02.mp3",
 timeCategory: "evening"
 },


{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 03.mp3",
  timeCategory: "evening"
},



{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 04.mp3",
 timeCategory: "evening"

 },







































































































































































  













 
























{
    name: " Big Fun",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Big Fun.mp3",
  timeCategory: "evening-late"



},




{
    name: "  Thinkin' about your love",
    artist: "Skipworth & Turner ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Skipworth & Turner - Thinkin' about your love.mp3",
  timeCategory: "evening-late"


},







{
    name: " Higher State Of Consciousness",
    artist: "Josh Wink  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Josh Wink - Higher state of consciousness.mp3",
  
timeCategory: "evening-late"

},


{
    name: " Like I like It ",
    artist: " Aurra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aurra - Like I like It.mp3",
  timeCategory: "evening-late"


},

{
    name: " 19 ",
    artist: " Paul Hardcastle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/19 - Paul Hardcastle.mp3",
    timeCategory: "evening-late"


},


{
    name: " All Night Long ",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
    timeCategory: "evening-late"


},



{
    name: " You Are My Melody  ",
    artist: "Change  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Change - You Are My Melody.mp3",
    timeCategory: "evening-late"


},

{
    name: " Searchin'  ",
    artist: "Hazel Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Hazel Dean - Searchin'.mp3",
    timeCategory: "evening-late"


},



{
    name: "  20 hz  ",
    artist: " Capricorn  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Capricorn - 20 hz.mp3",
  
  timeCategory: "evening-late"

},


{
    name: "  Lfo ",
    artist: "Lfo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lfo - Lfo.mp3",
  
  timeCategory: "evening-late"

},

{
    name: "  Energy Flash ",
    artist: "Joey Beltram  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Joey Beltram - Energy Flash.mp3",
  
  timeCategory: "evening-late"

},


{
    name: " Sun Is Shining ",
    artist: " Funkstar Deluxe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Sun is shining - Funkstar deluxe.mp3",
  
  timeCategory: "evening-late"

},


{
    name: " Murphys Law",
    artist: "Cheri ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Cheri -Murphys Law.mp3",
    timeCategory: "evening-late"


},



{
    name: " Open your mind",
    artist: "Usura ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Usura - Open your mind.mp3",
    timeCategory: "evening-late"


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  timeCategory: "evening-late"


},
 

  


{
    name: "  Brazil ",
    artist: "Spectrum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Spectrum - Brazil.mp3",
    timeCategory: "evening-late"

},




{
    name: " French Kiss (1989)",
    artist: "Lil Louis   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lil Louis - French Kiss.mp3",
    timeCategory: "evening-late"


},




{
    name: "  Popcorn Makers",
    artist: "Popcorn ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Popcorn - Popcorn Makers.mp3",
    timeCategory: "evening-late"


},




{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
    timeCategory: "evening-late"
},



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "evening-late"
},








{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 01.mp3",
  timeCategory: "evening-late"

},

{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 02.mp3",
 timeCategory: "evening-late"
 },


{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 03.mp3",
  timeCategory: "evening-late"
},



{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 04.mp3",
 timeCategory: "evening-late"

 },








{
    name: "Polynomial C",
    artist: "Aphex Twin ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aphex Twin - Polynomial C.mp3",
   timeCategory: "evening-late"
},




 {
    name: " Can You Handle It",
    artist: "Sunny ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/time classic.mp3",
     timeCategory: "evening-late"


},








];



































// Function to filter MP3 files by time category
function filterMp3ByTimeCategory(mp3Files, timeCategory) {
  return mp3Files.filter(mp3 => mp3.timeCategory === timeCategory);4
}

// Get the current time category
const currentTimeCategory = getCurrentTimeCategory();

// Get MP3 files for the current time category
const scheduledMp3Files = filterMp3ByTimeCategory(trackList, currentTimeCategory);

// Load and play the first track in the scheduled MP3 files
if (scheduledMp3Files.length > 0) {
  loadTrack(0);  // Load the first track
}

























// Function to load a track
function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = scheduledMp3Files[track_index].path;
  curr_track.load();

  // Update details of the track
  track_art.style.backgroundImage = "url(" + scheduledMp3Files[track_index].image + ")";
  track_name.textContent = scheduledMp3Files[track_index].name;
  track_artist.textContent = scheduledMp3Files[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + scheduledMp3Files.length;

  // Set an interval of 1000 milliseconds for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current finishes playing using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);

  // Apply a random background color
  random_bg_color();
}






function random_bg_color() {
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
playpause_btn.innerHTML = '<img id= "med"  src="images/pause.png">';

}

// Create the ordered list and append it to the body
let ol = document.createElement('ol');
document.body.appendChild(ol);






function playTrack() {


  // Play the loaded track
  
  curr_track.play();
  isPlaying = true;

  // Replace the play icon with the pause icon
  playpause_btn.innerHTML = '<img id="media" src="images/pause66.gif">';

  // Highlight the current track in the playlist
  let allTracks = document.querySelectorAll('ul li'); // Get all <li> elements
  allTracks.forEach(track => track.classList.remove('blinking')); // Remove "blinking" from all

  // Add "blinking" class to the current track
  if (allTracks[track_index]) { // Ensure the current track exists in the filtered list
    allTracks[track_index].classList.add('blinking');
  } else {
    console.error("Filtered track not found in the DOM!");
  }
}










// Function to display the first 20 tracks in the <ul> excluding 'sunny' tracks
function displayTrackList() {
  const trackListElement = document.getElementById('track-list');
  trackListElement.innerHTML = '';

  // Limit the number of tracks to 20
  const limitedTracks = scheduledMp3Files.slice(0, 31);

  limitedTracks.forEach((track, index) => {
    const lowerCaseName = track.name.toLowerCase();
    const lowerCaseArtist = track.artist.toLowerCase();
    
    if (!lowerCaseName.includes('yyy') && !lowerCaseArtist.includes('zzz')) {
      const li = document.createElement('li');
      li.textContent = `${track.name} - ${track.artist}`;
      
      trackListElement.appendChild(li);
    }
  });
}

// Call the displayTrackList function to populate the <ul> with the filtered track details
displayTrackList();






























function nextTrack() {
  if (track_index < scheduledMp3Files.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
    playTrack();
}



function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

loadTrack(track_index);

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});

window.setInterval(function() {
  startTime();
}, 1);

$('.btn').click(function () {
  $(this).toggleClass("click");
});































/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}







//document.querySelector('li').classList.add('blinking-new');









  // Function to update the image source based on the time
  function updateImage() {
    const img = document.getElementById("myImage");
    const now = new Date();
    const hour = now.getHours(); // Get the current hour (0-23)
    if (hour >= 6 && hour < 12) {
      img.src = 'images/transparent.png'; // Morning GIF
    } else if (hour >= 12 && hour < 17) {
      img.src = 'images/DJ Saphire2.png'; // Afternoon GIF
    } else if (hour >= 17 && hour < 21) {
      img.src = 'images/Miss Chang.png'; // Evening GIF
    } else {
      img.src = 'images/transparent.png';
// Night GIF
    }
  }

  // Call the updateImage function when the page loads
  window.onload = updateImage;



