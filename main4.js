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
     name: "Welcome! morning program",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 
 timeCategory: "morning"

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
  


},


{
    name: " All Night Long ",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
  


},



{
    name: " You Are My Melody  ",
    artist: "Change  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Change - You Are My Melody.mp3",
  


},

{
    name: " Searchin'  ",
    artist: "Hazel Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Hazel Dean - Searchin'.mp3",
  


},



{
    name: "  20 hz  ",
    artist: " Capricorn  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Capricorn - 20 hz.mp3",
  


},


{
    name: "  Lfo ",
    artist: "Lfo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lfo - Lfo.mp3",
  


},

{
    name: "  Energy Flash ",
    artist: "Joey Beltram  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Joey Beltram - Energy Flash.mp3",
  


},


{
    name: " Sun Is Shining ",
    artist: " Funkstar Deluxe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Sun is shining - Funkstar deluxe.mp3",
  


},


{
    name: " Murphys Law",
    artist: "Cheri ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Cheri -Murphys Law.mp3",
  


},



{
    name: " Open your mind",
    artist: "Usura ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Usura - Open your mind.mp3",
  


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 






{
    name: "  Brazil ",
    artist: "Spectrum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Spectrum - Brazil.mp3",
  


},




{
    name: " French Kiss (1989)",
    artist: "Lil Louis   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lil Louis - French Kiss.mp3",
  


},




{
    name: "  Popcorn Makers",
    artist: "Popcorn ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Popcorn - Popcorn Makers.mp3",
  


},




{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },














































































































































































 






{
    name: " Big Fun",
    artist: "Inner City  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Inner City - Big Fun.mp3",
  },




{
    name: "  Thinkin' about your love",
    artist: "Skipworth & Turner ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Skipworth & Turner - Thinkin' about your love.mp3",
  


},







{
    name: " Higher State Of Consciousness",
    artist: "Josh Wink  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Josh Wink - Higher state of consciousness.mp3",
  


},


{
    name: " Like I like It ",
    artist: " Aurra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Aurra - Like I like It.mp3",
  


},

{
    name: " 19 ",
    artist: " Paul Hardcastle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/19 - Paul Hardcastle.mp3",
  


},


{
    name: " All Night Long ",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
  


},



{
    name: " You Are My Melody  ",
    artist: "Change  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Change - You Are My Melody.mp3",
  


},

{
    name: " Searchin'  ",
    artist: "Hazel Dean ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Hazel Dean - Searchin'.mp3",
  


},



{
    name: "  20 hz  ",
    artist: " Capricorn  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Capricorn - 20 hz.mp3",
  


},


{
    name: "  Lfo ",
    artist: "Lfo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lfo - Lfo.mp3",
  


},

{
    name: "  Energy Flash ",
    artist: "Joey Beltram  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Joey Beltram - Energy Flash.mp3",
  


},


{
    name: " Sun Is Shining ",
    artist: " Funkstar Deluxe ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Sun is shining - Funkstar deluxe.mp3",
  


},


{
    name: " Murphys Law",
    artist: "Cheri ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Cheri -Murphys Law.mp3",
  


},



{
    name: " Open your mind",
    artist: "Usura ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Usura - Open your mind.mp3",
  


},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 






{
    name: "  Brazil ",
    artist: "Spectrum ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Spectrum - Brazil.mp3",
  


},




{
    name: " French Kiss (1989)",
    artist: "Lil Louis   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Lil Louis - French Kiss.mp3",
  


},




{
    name: "  Popcorn Makers",
    artist: "Popcorn ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Popcorn - Popcorn Makers.mp3",
  


},




{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Depeche Mode - Enjoy The Silence.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },







{
  
    name: "Apologize",
    artist: "Timbaland",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Timbaland - Apologize.mp3",
  },

{
    name: "Love Foolosophy",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Jamiroquaii - Love Foolosophy.mp3",
  


},










{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you222.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },




{
    name: "Bang Bang",
    artist: "The Knocks ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/The Knocks - Bang Bang.mp3",
  },







{
    name: "Mad About You",
    artist: "Tammy Whynet ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - Made about you .mp3",
       timeCategory: "morning"

},
   




{
     name: "OldskoolJazz ",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "morning"

},


{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Yellow basket.mp3",
       timeCategory: "morning"

},

{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz.mp3",
        timeCategory: "morning"

},










{
    name: "I ll Get By (1937)",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.7.mp3",
        timeCategory: "morning"

},



{
    name: "Silent Way (1969)",
    artist: "Miles Davis",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/silent way 02.mp3",
    timeCategory: "morning"

},



























    


{
    name: "Ain't Got Rhythm",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Billy Holiday & Lester Young vol.1.mp3",
    timeCategory: "morning"

},
  

{
    name: "Pennys From Heaven",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.21.mp3",
    timeCategory: "morning"

},
  


 {
   name: "Kisses Used To Be",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.2.mp3",
    timeCategory: "morning"

},
  















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
    timeCategory: "morning"

},
  









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "morning"

},
  


{

    name: "I Cry For You",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 18.mp3",
     timeCategory: "morning"

},
  















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
    timeCategory: "morning"

},
  



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
    timeCategory: "morning"

},
      

















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


 timeCategory: "morning"

},










{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",


 timeCategory: "morning"

},




{
     name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",


 timeCategory: "morning"

},



  



{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 2.mp3",
           timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin5 .mp3",
         timeCategory: "morning"

},








{
   name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
          timeCategory: "morning"

},
 




{
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
         timeCategory: "morning"

},



 {
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
         timeCategory: "morning"

},
 



{
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
        timeCategory: "morning"

},

{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
         timeCategory: "morning"

},

 {
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
        timeCategory: "morning"

},
 
{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
          timeCategory: "morning"

},








{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
        timeCategory: "morning"

},



{
    name: "OldskoolJazz",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 01.mp3",
          timeCategory: "morning"

},



{
    name: "OldskoolJazz",
    artist: "Lester Young",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 02.mp3",
        timeCategory: "morning"

},
















{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of8.mp3",
           timeCategory: "morning"

},






{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of9.mp3",
             timeCategory: "morning"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


           timeCategory: "morning"

},









{
    name: "  What Cha Gonna Do ",
    artist: "Chaka Kahn ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Chaka Kahn - What Cha Gonna Do For Me.mp3",
         timeCategory: "morning"

},







 














{
    name: "Prisoner Of Love (1939)",
    artist: "Mildred Bailey ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin14 .mp3",
         timeCategory: "morning"

},
  

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "morning"

},




 {
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 03.mp3",
         timeCategory: "morning"

},






{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 3.mp3",
         timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 5.mp3",
           timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 6.mp3",
         timeCategory: "morning"

},


{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 8.mp3",
         timeCategory: "morning"

},













{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Trumpet jazz 9.mp3",
           timeCategory: "morning"

},


{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
           timeCategory: "morning"

},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
  timeCategory: "morning"

},











{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar01.mp3",
  timeCategory: "morning"

},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "morning"

},










{
    name: "Surpise Surprise ",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz8.mp3",
    timeCategory: "morning"

},







   

























{

    name: "  Orange Clouds",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Orange Clouds.mp3",
    timeCategory: "morning"

},



{
     name: "  Sun Goddess",
    artist: "RAMSEY LEWIS - EARTH WIND FIRE  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/RAMSEY LEWIS - EARTH WIND FIRE - Sun Goddess.mp3",
    timeCategory: "morning"

},
  















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
    timeCategory: "morning"

},











{

    name: "Best Of",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of.mp3",
       timeCategory: "morning"

},




{

   name: "Today Only On Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bebop/silent way 01.mp3",
      timeCategory: "morning"

},





{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of5.mp3",
       timeCategory: "morning"

},


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of6.mp3",
       timeCategory: "morning"

},

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of7.mp3",
      timeCategory: "morning"

},







 



{
    name: "Three Little Words",
    artist: "Best of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 16.mp3",
      timeCategory: "morning"

},
   







{
     name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
        timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "morning"

},



{
    name: "OldskoolJazz ",
    artist: "Best Of ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of Jazz Divas s- Vol. 15.mp3",
       timeCategory: "morning"

},




{
    name: "Our Love",
    artist: "Louis Armstrong ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Louis Armstrong - Our Love.mp3",
     timeCategory: "morning"

},

 

  {
    name: "Boo Boo",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Boo boo.mp3",
      timeCategory: "morning"

},


  
 

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "morning"

},




{
    name: "One Fortune",
    artist: "Stan Getz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
       timeCategory: "morning"

},



{
    name: "I Love You ",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - I love you .mp3",
       timeCategory: "morning"

},


{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 4.mp3",
       timeCategory: "morning"

},






{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
        timeCategory: "morning"

},






 







{
 name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin4 .mp3",
         timeCategory: "morning"

},







{
    name: "Don' T Let Go ",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Ella Fitzgerald - Don' t let go.mp3",
         timeCategory: "morning"

},










{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 05.mp3",
         timeCategory: "morning"

},







{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.10.mp3",
         timeCategory: "morning"

},









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
          timeCategory: "morning"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
         timeCategory: "morning"

},



  




{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
 
 timeCategory: "morning"

},





















{
  name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.18.mp3",
       timeCategory: "morning"

},











{
    name: "Brrr",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - Brrr.mp3",
        timeCategory: "morning"

},




{

    name: "Ain't Misbehavin' (1945)",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Benny Goodman - Best of3.mp3",
       timeCategory: "morning"

},






{
    name: "Benny Goodman - Best Of ",
    artist: "Benny Goodman ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Benny Goodman - Best of4.mp3",
       timeCategory: "morning"

},

{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "morning"

},








{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz14.mp3",
       timeCategory: "morning"

},



{

    name: "Oldskool Jazz",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz15.mp3",
       timeCategory: "morning"

},



























  











{

    name: "Hotel Del Mar",
    artist: "Chillout lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar05.mp3",
           timeCategory: "morning"

},

{

    name: "All Of Me",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz17.mp3",
           timeCategory: "morning"

},


 


  
 


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
   timeCategory: "morning"

},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "morning"

},















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
  timeCategory: "morning"

},



{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 20.mp3",
    timeCategory: "morning"

},


{

    name: "God Bless The Child",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 06.mp3",
    timeCategory: "morning"

},

{

    name: "Good Luck",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 05.mp3",
  timeCategory: "morning"

},











  {
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "morning"

},


{
    name: "Yesterdays (1939)",
    artist: "Billie Holiday ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin6 .mp3",
   timeCategory: "morning"

},


{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 16.mp3",
   timeCategory: "morning"

},









   



   





{
    name: "Tonighton Sunny!",
    artist: "Miles Davis - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
             timeCategory: "morning"

},

 


 {
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
              timeCategory: "morning"

},









 














{
    name: "Now They Call It Swing",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.24.mp3",
        timeCategory: "morning"

},




 {
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 13.mp3",
      timeCategory: "morning"

},

 
{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
      timeCategory: "morning"

},







{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
      timeCategory: "morning"

},









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
 timeCategory: "morning"

},





{
    name: "Que Bonito",
    artist: "Café del Mar, José Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "morning"

},

















{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/sweet sue.mp3",
       timeCategory: "morning"

},
  


{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 3.mp3",
       timeCategory: "morning"

},
  













{

   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Trumpet jazz 6.mp3",
       timeCategory: "morning"

},

















 {  
    name: "Schoolboy Pie",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin13 .mp3",
     timeCategory: "morning"

},

   







{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.15.mp3",
          timeCategory: "morning"

},

{



    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 11.mp3",
          timeCategory: "morning"

},









{
    name: "Pennys From Heaven",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.21.mp3",
 
 timeCategory: "morning"

},



 {
   name: "Kisses Used To Be",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.2.mp3",
 
 timeCategory: "morning"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
 
 timeCategory: "morning"

},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
             timeCategory: "morning"

},




{
    name: "One Fortune",
    artist: "Stan Getz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Stan Getz - One Fortune.mp3",
           timeCategory: "morning"

},


{
    name: "I Love You ",
    artist: "Zoot Sims ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Zoot sims - I love you .mp3",
            timeCategory: "morning"

},


{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Trumpet jazz 4.mp3",
           timeCategory: "morning"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
           timeCategory: "morning"

},












{
    name: "Welcome afternoon program!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
   timeCategory: "afternoon"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
    timeCategory: "afternoon"

},
  










{

    name: "Rocking Chair",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas12.mp3",
 timeCategory: "afternoon"

},
  



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
 timeCategory: "afternoon"

},








 {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


timeCategory: "afternoon"

},   


 








{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin9 .mp3",
  timeCategory: "afternoon"

},



{

    name: "Mimosa",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth  - Mimosa.mp3",
  timeCategory: "afternoon"

},




 






{
    name: "Volume 12 ",
    artist: "Cafe Del Mar",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Cafe12 01.mp3",
         timeCategory: "afternoon"

},  

{
    name: "Volume 12 ",
    artist: "Cafe Del Mar",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Cafe12 02.mp3",
           timeCategory: "afternoon"

}, 


{

    name: "M. Dupont",
    artist: "The Dining Rooms ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/The Dining Rooms - M. Dupont.mp3",
 timeCategory: "afternoon"

},
 








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  timeCategory: "afternoon"

},



{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Nina Simone birds.mp3",
 timeCategory: "afternoon"

},

































{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 7.mp3",
 timeCategory: "afternoon"

},

{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.19.mp3",
  timeCategory: "afternoon"

},







{
    name: " Get It Out Your System",
    artist: "Millie Jackson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Millie - Jackson - Get It Out Your System.mp3",
   timeCategory: "afternoon"

},





{

    name: "I Cry For You",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 18.mp3",
  timeCategory: "afternoon"

},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
 timeCategory: "afternoon"

},


{
    name: "Tammy Whynet ",
    artist: "You Love Me",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/Tammy Whynet - You love me.mp3",
 timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
    timeCategory: "afternoon"
  },












{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 07.mp3",
       timeCategory: "afternoon"

},



{
    name: "Tonight On Sunny!",
    artist: "Miles Sunny - In A Silent Way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
       timeCategory: "afternoon"

},


{
    name: "Dr Beat (12inch)",
    artist: "Miami Sound Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Miami Sound Machine - Dr Beat.mp3",
       timeCategory: "afternoon"

},







{
    name: "20 Dollars",
    artist: "Angie Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Angie Stone  20 dollars.mp3",
       timeCategory: "afternoon"

},






{
    name: "  Sexy (12inch)",
    artist: "MFSB    ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/MFSB - Sexy (12inch).mp3",
       timeCategory: "afternoon"

},









{
    name: "Get Lucky (12inch)",
    artist: "Daft Punk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Daft Punk - Get Lucky.mp3",
       timeCategory: "afternoon"

},







{
    name: "   Woman Of The Ghetto (1969) ",
    artist: "Marlena Shaw ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Marlena Shaw - Woman Of The Ghetto.mp3",
       timeCategory: "afternoon"

},









{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70.mp3",
        timeCategory: "afternoon"

},



{
    name: "   Sunny Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70 2.mp3",
       timeCategory: "afternoon"

},
















  




 
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "afternoon"

},

   
  {
    name: "Baubles, Bangles And Beads (live 1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Baubles, Bangles And Beads (live 1964).mp3",
      timeCategory: "afternoon"

},



{
    name: " Honeysuckle Rose (live 1964)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Honeysuckle Rose - ( live 1964).mp3",
      timeCategory: "afternoon"

},















{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
 
 timeCategory: "afternoon"

},



{
     name: " Stop To Love",
    artist: "Luther Vandross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Luther Vandross - Stop To Love.mp3",
         timeCategory: "afternoon"

},











{
    name: "In The Dark",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Purple disco machine - in the Dark.mp3",
        timeCategory: "afternoon"

},







{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon3 - Lounge.mp3",
          timeCategory: "afternoon"

},

{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon7 - Lounge.mp3",
          timeCategory: "afternoon"

},

{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
           timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
           timeCategory: "afternoon"

},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
       timeCategory: "afternoon"

},









{
     name: " Manhattan Skyline",
    artist: "Orchestra 88 ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Orchestra 88- Manhattan skyline.mp3",
       timeCategory: "afternoon"

},





{
name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/microfoon Human - Human League.mp3",
       timeCategory: "afternoon"

},






{
     name: " Human ",
    artist: " Human League ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Human - Human League.mp3",
       timeCategory: "afternoon"

},




{  
    name: "You Rock My World",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Michael Jackson - You rock my world.mp3",
       timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "afternoon"

},




{
    name: "  Ain't Nobody ",
    artist: " Chaka Khan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Ain't Nobody - Chaka Khan.mp3",
       timeCategory: "afternoon"

}, 









{
    name: "Indra",
    artist: "Thievery Corporation ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Thievery Corporation - Indra.mp3",
         timeCategory: "afternoon"

}, 













{
     name: "Starlette (instrumental)",
    artist: "BB & Q Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/BB & Q Band - Starlette (instrumental).mp3",
         timeCategory: "afternoon"

}, 






{
     name: "  Orchestra 88",
    artist: "The Love Boat Theme ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The love boat theme.mp3",
        timeCategory: "afternoon"

}, 




{
     name: "Givin' Up Givin' In",
    artist: "Three Degrees ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Three Degrees - Givin' up givin 'in.mp3",
       timeCategory: "afternoon"

}, 


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "afternoon"

}, 
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "afternoon"

}, 








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "afternoon"

}, 




{
    name: " Dancin' (1976)",
    artist: "Crown Heights Affair ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Crown Heights Affair - Dancin' (single).mp3",
       timeCategory: "afternoon"

}, 






{
    name: "  A Woman's Worth",
    artist: "Alicia Keys  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Alicia Keys - A Woman's Worth.mp3",
        timeCategory: "afternoon"

}, 

{
     name: "Do It ",
    artist: "B T Express (1974) ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/B T Express - Do It(Till You're  Satisfied).mp3",
       timeCategory: "afternoon"

},







{
    name: "Now They Call It Swing",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.24.mp3",
       timeCategory: "afternoon"

},





{
     name: "La Vie En Rose ",
    artist: "Grace Jones",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Grace Jones - La Vie En Rose.mp3",
         timeCategory: "afternoon"

},





{
     name: "  Souvenirs",
    artist: "Voyage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Voyage - Souvenirs.mp3",
       timeCategory: "afternoon"

},








{
     name: "Slave To The Rhythm ",
    artist: "Grace Jones (1985)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/GRACE JONES. Slave to the rhythm. 1985..mp3",
       timeCategory: "afternoon"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "afternoon"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of8.mp3",
        timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
        timeCategory: "afternoon"

},


{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
       timeCategory: "afternoon"

},












{
    name: "Tender Lips",
    artist: "Billy Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.12.mp3",
     timeCategory: "afternoon"

},
  




{

    name: "Georgia",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas17.mp3",
       timeCategory: "afternoon"

},





{

    name: "Willow Tree (1936)",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/jazz divas 04.mp3",
      timeCategory: "afternoon"

},

















{
    name: "Lounge Beats ",
    artist: "Lounge",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats04.mp3",
 timeCategory: "afternoon"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
 timeCategory: "afternoon"

},





{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar06.mp3",
 

 timeCategory: "afternoon"

},
 







{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
        timeCategory: "afternoon"

},
















  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon2 - Lounge.mp3",
         timeCategory: "afternoon"

},



{
    name: "Magic",
    artist: "Dinah Washington ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Dinah Washington - Magic.mp3",
 timeCategory: "afternoon"

},


{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon4 - Lounge.mp3",
 timeCategory: "afternoon"

},


  {
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon5 - Lounge.mp3",
 timeCategory: "afternoon"

},



    {
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
   timeCategory: "afternoon"

},






   
{

    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/jazz divas 02.mp3",
 timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


 timeCategory: "afternoon"

},   





{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon6 - Lounge.mp3",
        timeCategory: "afternoon"

},




{
     name: "   Glide",
    artist: "Pleasure ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Pleasure - Glide.mp3",
         timeCategory: "afternoon"

}, 




{
    name: "Glow Of Love",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Change - Glow Of Love.mp3",
        timeCategory: "afternoon"

}, 








{
     name: "  Fallin' In Love ",
    artist: "Surface ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Surface - Fallin'in love.mp3",
       timeCategory: "afternoon"

}, 












{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
     timeCategory: "afternoon"

},






{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "afternoon"

},















{
    name: "Hi!",
    artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years1.mp3",
    timeCategory: "afternoon"
  },


{
    name: "Hi!",
    artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years3.mp3",
    timeCategory: "afternoon"
  },






{
    name: "Hi!",
   artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years4.mp3",
     timeCategory: "afternoon"
  },




{
    name: "Hi!",
   artist: "Supperclub Best Of 15 Years",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnylounge01.netlify.app/Supperclub - Best of 15 years5.mp3",
       timeCategory: "afternoon"
  },
















{
    name: "Lounge Beats ",
    artist: "Lounge",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats03.mp3",
      timeCategory: "afternoon"

},







{
   name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/are of mine.mp3",
       timeCategory: "afternoon"

},


{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dansez maintenant.mp3",
       timeCategory: "afternoon"

},
 

{

    name: "Ain T Got That Swing",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz2.mp3",
     timeCategory: "afternoon"

},




{

    name: "Very Best Of",
    artist: "Benny Goodman",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/ain t got that swing.mp3",
      timeCategory: "afternoon"

},







{
    name: " Sweet Baby",
    artist: "Macy Gray  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Macy Gray Sweet Baby.mp3",
      timeCategory: "afternoon"

},




{
    name: "  Fallin'",
    artist: "Alicia Keys  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Alicia Keys - Fallin'.mp3",
       timeCategory: "afternoon"

},












{

    name: "Wonderful world",
    artist: "Louis Armstrong",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Wonderful world.mp3",
       timeCategory: "afternoon"

},





{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
        timeCategory: "afternoon"

},







{
    name: "  Popcorn Makers (1969)",
    artist: "Popcorn ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Popcorn - Popcorn Makers.mp3",
       timeCategory: "afternoon"

},





















{
    name: "Rose Rouge",
    artist: "St Germain",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/St Germain - Rose Rouge.mp3",
         timeCategory: "afternoon"

},








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
         timeCategory: "afternoon"

},




{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
         timeCategory: "afternoon"

},



{

    name: " Fortune's Child",
    artist: "Nat Adderley ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Nat Adderley - Fortune's Child - 1979.mp3",
         timeCategory: "afternoon"

},




   {
    name: "OldskoolJazz",
    artist: "Sunny",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "afternoon"

},






{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
          timeCategory: "afternoon"

},

{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",
        timeCategory: "afternoon"

},


{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",
     timeCategory: "afternoon"

},




{
    name: "Foolish Heart",
    artist: "Brenda Lee ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Foolish heart.mp3",
   timeCategory: "afternoon"

},




{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 2.mp3",
          timeCategory: "afternoon"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Best of classicJazz singin5 .mp3",
           timeCategory: "afternoon"

},

 






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
    timeCategory: "afternoon"

},  


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
          timeCategory: "afternoon"

},
 




{
   name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.13.mp3",
    timeCategory: "afternoon"

},


{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
    timeCategory: "afternoon"

},








{
    name: "OldskoolJazz",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 01.mp3",
        timeCategory: "afternoon"

},



{
    name: "OldskoolJazz",
    artist: "Lester Young",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 02.mp3",
         timeCategory: "afternoon"

},


{

    name: "Fly Over The Horizon",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Fly over the horizon.mp3",
         timeCategory: "afternoon"

},


{
    name: " Bewitched (1956)",
    artist: "Ella Fitzgerald ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Ella Fitzgerald - Bewitched (1956).mp3",
        timeCategory: "afternoon"

},





















{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
         timeCategory: "afternoon"

},

















{
    name: " Come Into My Life (1987)",
    artist: "Joyce Sims ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Joyce Sims - Come Into My Life.mp3",
 timeCategory: "afternoon"

},





{
    name: "My Mama Don't Told Me",
    artist: "Dinah Washington  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Dinah Washington - My mama don't told me.mp3",
       timeCategory: "afternoon"

},

























{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
   timeCategory: "afternoon"

},





{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
  timeCategory: "afternoon"

},

  
 


















































































































































{
    name: "Lester Young",
    artist: "Oscar Peterson",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Oscar Peterson 06.mp3",
    timeCategory: "afternoon"

},



{
    name: "Que Bonito",
    artist: "Cafe del Mar, Jose Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
    timeCategory: "afternoon"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "afternoon"

},


{
     name: "  Machine Gun (1974)",
    artist: "Commodores ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Commodores - Machine gun.mp3",
        timeCategory: "afternoon"

}, 




{
    name: " Home Fires Burnin'",
    artist: "Millie Jackson ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Millie Jackson - Keep The Home Fires Burnin'.mp3",
        timeCategory: "afternoon"

}, 




















 



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
         timeCategory: "afternoon"

}, 



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sunny ship/starten met Sunny.mp3",
 timeCategory: "afternoon"

},


















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
        timeCategory: "afternoon"

},





















{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon3 - Lounge.mp3",
       timeCategory: "afternoon"

},







{
    name: "Best Of",
    artist: "Sunny  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
        timeCategory: "afternoon"

},






{
    name: "  If I Ain't Got You",
    artist: "Alicia Keys  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Alicia Keys - If I Ain't Got You.mp3",
        timeCategory: "afternoon"

},















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "afternoon"

},







{
    name: "Somewhere Over The Rainbow (1958)",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - Somewhere Over The Rainbow (live from Holland) (1958).mp3",
         timeCategory: "afternoon"

},






{
     name: " Fall In Love With Me (1982) ",
    artist: "EWF",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek04/EARTH WIND & FIRE - Fall In Love With Me (1982).mp3",
        timeCategory: "afternoon"

}, 






{
    name: "Too Hot (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kool and the gang - Too hot.mp3",
      timeCategory: "afternoon"

},









{
    name: "Midway ",
    artist: "Brenda Lee  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Brenda Lee - Midway.mp3",
        timeCategory: "afternoon"

},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
    timeCategory: "afternoon"

},  




{
    name: "OldskoolJazz",
    artist: "Best Of",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.14.mp3",
        timeCategory: "afternoon"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
 
 timeCategory: "afternoon"

},




{
     name: "Tell Me What We're Gonna Do Now",
    artist: "Joss Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Tell Me What We're Gonna Do Now.mp3",
         timeCategory: "afternoon"

},














{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar04.mp3",
        timeCategory: "  afternoon"

},






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
  timeCategory: "afternoon"

},






{
    name: "Que Bonito",
    artist: "Cafe del Mar, Jose Padilla  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
    timeCategory: "afternoon"

},

{
     name: " People Gotta Move",
    artist: "Gino Vanelli ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Gino Vanelli - People gotta move.mp3",
    timeCategory: "afternoon"

},


{
    name: "Fall",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Full Flava - Fall.mp3",
      timeCategory: "afternoon"

},



{

    name: " Centrifugal Force",
    artist: "John Klemmer ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/John Klemmer - Centrifugal Force - 1972.mp3",
    timeCategory: "afternoon"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
      timeCategory: "afternoon"

},


 {
     name: "  Nights Over Egypt",
    artist: "Jones Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Jones Girls - Nights Over Egypt.mp3",
     timeCategory: "afternoon"

},





{
     name: " Got My Mind Made Up (1978)",
    artist: "Instant Funk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Instant Funk Got My Mind Made Up (1978).mp3",
        timeCategory: "afternoon"

},



{
     name: "  Lady Sun",
    artist: "Earth, Wind & Fire",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Earth, Wind & Fire - Lady Sun.mp3",
         timeCategory: "afternoon"

},






{

    name: "Hotel Del Mar",
    artist: "Chillout Lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar03.mp3",
        timeCategory: "afternoon"

},
  




























































































































{
     name: " Pipeline ",
    artist: "Bruce Johnston",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Bruce Johnston- Pipeline.mp3",
       timeCategory: "afternoon"

},

















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  
 timeCategory: "afternoon"

},





{

    name: "Blue Skies (1927)",
    artist: "Josephine Baker  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Josephine Baker - Blue Skies (1927).mp3",
 timeCategory: "afternoon"

},






{

    name: "Body & Soul",
    artist: "Frank Sinatra",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/The very best of jazz18.mp3",
timeCategory: "afternoon"

},







{

    name: "Cheeck To Cheeck",
    artist: "Ella & Louis",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of jazz11.mp3",
  timeCategory: "afternoon"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


timeCategory: "afternoon"

},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


timeCategory: "afternoon"

},    





{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.8.mp3",
 timeCategory: "afternoon"

},




{
    name: "OldskoolJazz",
    artist: "Best of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek02/Billy Holiday & Lester Young vol.9.mp3",
 timeCategory: "afternoon"

},



{

    name: "Summertime",
    artist: "Sunny",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 14.mp3",
  timeCategory: "afternoon"

},




{
    name: "Welcome!",
    artist: "Play Sunny JazzRadio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "afternoon"

},










{
     name: " More More More ",
    artist: "Andrea True ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Andrea True Connection - More More More.mp3",
 timeCategory: "afternoon"

},
















































































































{
     name: "Welcome! evening program",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
 timeCategory: "evening"

},

 




















































































































































































{
    name: " On How Life Is",
    artist: "Macy Gray  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Macy Gray - On how life is.mp3",
   timeCategory: "evening"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
  timeCategory: "evening"

},













































































































































































{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
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
     name: " From East to West ",
    artist: "Voyage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Voyage - From East to West.mp3",
  timeCategory: "evening-late"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
   timeCategory: "evening-late"

  },





{

    name: "Am I Blue",
    artist: "Billie Holiday",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/jazz divas 08.mp3",
   timeCategory: "evening-late"


},



{
    name: " The Nightfly",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - The Nightfly.mp3",
        timeCategory: "evening-late"

},





{
    name: " GYC",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - GYC .mp3",
        timeCategory: "evening-late"


},



{
    name: " New Frontier",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - Nightfly2.mp3",
        timeCategory: "evening-late"


},


{
    name: " Ruby Baby",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen -  Ruby Baby.mp3",
        timeCategory: "evening-late"

},









{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female Dj3.mp3",
     timeCategory: "evening-late"


},



{
    name: " Maxime",
    artist: "Donald Fagen ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnydanceoldies08.netlify.app/Donald Fagen - Maxime.mp3",
       timeCategory: "evening-late"

},













{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
       timeCategory: "evening-late"


}, 









  
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
       timeCategory: "evening-late"

}, 








 {
    name: "Tonight On Sunny!",
    artist: "Miles Davis - In a silent way ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
      timeCategory: "evening-late"

}, 




{
     name: "Love Is The Message",
    artist: "MFSB ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/MFSB - Love Is The Message (12inch).mp3",
       timeCategory: "evening-late"


},
  {
     name: " All Night Long",
    artist: "Mary Jane Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Mary Jane Girls - All Night Long.mp3",
        timeCategory: "evening-late"


},


{
     name: "Chinese Whispers",
    artist: "Full Flava ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Full Flava - Chinese Whispers.mp3",
       timeCategory: "evening-late"


},


{
     name: "Welcome! evening program",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
       timeCategory: "evening-late"

},

  {
     name: "Soul Cha Cha",
    artist: "Van McCoy ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Van McCoy - Soul Cha Cha.mp3",
        timeCategory: "evening-late"

},


  {
     name: "Liberian Girl",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Michael jackson -Liberian Girl.mp3",
       timeCategory: "evening-late"

},




  {
     name: " Stranger In Moscow",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Michael Jackson - stranger in moscow.mp3",
       timeCategory: "evening-late"

},









{
    name: " Risin To The Top",
    artist: "Kenny Burke  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kenny Burke - Risin to the Top.mp3",
 timeCategory: "evening-late"


},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "evening"

},





{
     name: " Can You Feel It",
    artist: "The Jackson Five",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/The Jacksons - Can You Feel It.mp3",
  timeCategory: "evening"

},





{
     name: " Love Hangover",
    artist: "Diana Ross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Diana Ross - Love Hangover.mp3",
  timeCategory: "evening-late"


},



{
    name: "Spacer (1979)",
    artist: "Sheila B Devotion",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Sheila B Devotion - Spacer.mp3",
 timeCategory: "evening-late"

},



{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  timeCategory: "evening-late"


},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
timeCategory: "evening-late"

},





  



{
    name: " Win Or Lose",
    artist: "Earth Wind & Fire ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/E W F - Win or lose.mp3",
       timeCategory: "evening-late"


}, 







{
    name: " Corner Of The Earth",
    artist: "Jamiroquai ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Jamiroquai - Corner of the Earth.mp3",
      timeCategory: "evening-late"


}, 





{
     name: " Manhattan Skyline  ",
    artist: "Orchestra 88",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Manhattan Skyline.mp3",
       timeCategory: "evening-late"


}, 










{
     name: "I Can Make You Feel Good ",
    artist: "Shalamar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Shalamar - I can make you feel good.mp3",
        timeCategory: "evening-late"


},














{
    name: " Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Elton & Dua - Cold Heart.mp3",
 timeCategory: "evening-late"


},















{
    name: " Juicy Fruit",
    artist: "Mtume ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mtume - Juicy Fruit.mp3",
  


timeCategory: "evening-late"

},




{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame.mp3",
  


  timeCategory: "evening-late"


},

{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats04.mp3",
   timeCategory: "evening-late"


},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
 timeCategory: "evening-late"

},


{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats05.mp3",
 timeCategory: "evening-late"


},



{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats06.mp3",
 timeCategory: "evening-late"

},












{

    name: " Antes Que Esqueca",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Antes que esqueca.mp3",
 timeCategory: "evening"

},


































{
     name: "  Freak Of Nature ",
    artist: "Amir",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Amir - Freak of Nature.mp3",
  timeCategory: "evening"

},












{
     name: "The Boss",
    artist: "Diana Ross ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Diana Ross - The Boss.mp3",
   timeCategory: "evening"

},








{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Loving You - Michael Jackson.mp3",
  

  timeCategory: "evening"

},


{
    name: " Let Me Show You ",
    artist: " The Jacksons",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Jacksons - Let me show you (Ruud Remix).mp3",
  timeCategory: "evening"

},

{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
  timeCategory: "evening"

},








{
     name: " Lounge",
    artist: "Avalon",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/avalon/Avalon1- Lounge.mp3",
   timeCategory: "evening"

},



































{
     name: " Don't Be Afraid",
    artist: "Diplo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Damian Lazarus - Don't be afraid.mp3",
  timeCategory: "evening"

},


















{
     name: " Don't Forget",
    artist: "Diplo & Miguel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Diplo & Miguel - Don't forget my love.mp3",
 timeCategory: "evening"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://sunnyhotradio.com/muziek/jingles/sunny dance jingle.mp3",
  timeCategory: "evening"

},








{
    name: " Turn On Tune In  ",
    artist: "Freak Power ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Freak Power - Turn On Tune In Cop Out.mp3",
 timeCategory: "evening"

},















{
    name: " You Cant Hide",
    artist: "David Joseph  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/David Joseph - You Cant Hide (Your Love From Me).mp3",
  timeCategory: "evening"

},

































{
    name: " Razzmatazz",
    artist: "Quincy Jones ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Quincy Jones& Patti Austin -  Razzmatazz.mp3",
 timeCategory: "evening"

},




{
    name: "   True Colors   ",
    artist: "Jalisa Rey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Jalisa Rey - True Colors.mp3",
  timeCategory: "evening"

},


{
     name: "La Vie En Rose ",
    artist: "Grace Jones",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Grace Jones - La Vie En Rose.mp3",
         timeCategory: "evening"

},





{
     name: "  Souvenirs",
    artist: "Voyage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Voyage - Souvenirs.mp3",
          timeCategory: "evening"

},











{
    name: "Dr Beat (12inch)",
    artist: "Miami Sound Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Miami Sound Machine - Dr Beat.mp3",
 timeCategory: "evening"

},


{
    name: "Right Here ",
    artist: "SWV ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SWV - Right Here.mp3",
  timeCategory: "evening"

},



{
    name: " It's All The Way Live",
    artist: "Lakeside ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/Lakeside - It's All The Way Live.mp3",    
  timeCategory: "evening"

},
{
    name: "No One's Gonna Love You (1984)",
    artist: "SOS Band ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/SOS Band - No One's Gonna Love You (1984).mp3",
    timeCategory: "evening"

},



{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Boney M - Sunny.mp3",
  timeCategory: "evening"

},


{
    name: "Stomp! (Album Version) ",
    artist: "The Brothers Johnson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/THE BROTHERS JOHNSON - Stomp! (Album Version) HQ.mp3",
  timeCategory: "evening"

},




{
    name: "   True Colors   ",
    artist: "Jalisa Rey ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Jalisa Rey - True Colors.mp3",
       timeCategory: "evening"

},






{
    name: "In The Dark",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Purple disco machine - in the Dark.mp3",
          timeCategory: "evening"

},






{

    name: " Fortune's Child",
    artist: "Nat Adderley ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "https://soulfullforever.netlify.app/Nat Adderley - Fortune's Child - 1979.mp3",
        timeCategory: "evening"

},







{
     name: "   Glide",
    artist: "Pleasure ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Pleasure - Glide.mp3",
        timeCategory: "evening"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1best.mp3",
  timeCategory: "evening"

},


{
     name: " Manhattan Skyline",
    artist: "Orchestra 88 ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Orchestra 88- Manhattan skyline.mp3",
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
    name: " Rockit",
    artist: "Herbie Hancock  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Herbie Hancock - Rockit.mp3",
   timeCategory: "evening"
},



{
    name: " Don't Call  Me Baby ",
    artist: "Madison Avenue  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Madison Avenue - Don't Call  Me Baby.mp3",
   timeCategory: "evening"
},





















{
    name: "  Jazz Carnaval",
    artist: "Azymuth ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/Azymuth - Jazz carnaval.mp3",
  timeCategory: "evening"




},








{
     name: "   I Wanna Be Your Man",
    artist: "Roger ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Roger - I wanna be your man.mp3",
  timeCategory: "evening"

},



{
    name: "   Mellow Mellow Right On ",
    artist: "Lowrell",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Lowrell - Mellow Mellow Right On.mp3",
  timeCategory: "evening"

},

{
     name: "Do It ",
    artist: "B T Express (1974) ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/B T Express - Do It(Till You're  Satisfied).mp3",
       timeCategory: "evening"

},















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj3.mp3",
 timeCategory: "evening"

},


 
{
    name: "Do You I'm Sexy ",
    artist: "Rod Stewart  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Rod Stewarrt - Da Ya Think I'm Sexy.mp3",
         timeCategory: "evening"

}, 



{
    name: "Best Of My Love",
    artist: "T-Connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies04.netlify.app/T-Connection - Best of my Love.mp3",
         timeCategory: "evening"

}, 




{
     name: " Instant Replay",
    artist: "Dan Hartman",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Dan Hartman - Instant replay.mp3",
        timeCategory: "evening"

}, 



{
    name: "  Birdland (1979)",
    artist: "Manhattan Transfer",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Manhattan Transfer - Birdland (1979).mp3",
        timeCategory: "evening"

},





{
    name: "OldskoolJazz ",
    artist: "Best Of",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
       timeCategory: "evening"

},


{
    name: "  Popcorn Makers (1969)",
    artist: "Popcorn ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Popcorn - Popcorn Makers.mp3",
       timeCategory: "evening"

},









{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes03.mp3",
 timeCategory: "evening"

},




{
    name: "Cresecent",
    artist: "John Coltrane ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/John Coltrane - Cresecent04.mp3",
       timeCategory: "evening"

},

 {
    name: "Indra",
    artist: "Thievery Corporation ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Thievery Corporation - Indra.mp3",
       timeCategory: "evening"

},



{
    name: "  A Woman's Worth",
    artist: "Alicia Keys  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/Alicia Keys - A Woman's Worth.mp3",
        timeCategory: "evening"

},


{
    name: "Best Of",
    artist: "Benny Goodman   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/bigband/Benny Goodman - Best of9.mp3",
       timeCategory: "evening"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
     timeCategory: "evening"

},

{
    name: "Arkansa Blues",
    artist: "Mildred Bailey",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Best of classicJazz singin7 .mp3",
  timeCategory: "evening"

},


































{
    name: "Classic",
    artist: "The Knocks (new)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/The Knocks - Classic.mp3",
   timeCategory: "evening"

},


{
     name: " Yes Sir  I Can Boogie  ",
    artist: "Baccara ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Baccara - Yes Sir  I Can Boogie.mp3",
         timeCategory: "evening"

},  









{
    name: "Lounge Beats ",
    artist: "Lounge",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats05.mp3",
         timeCategory: "evening"

},  


{
     name: "Lowdown",
    artist: "Boz Scaggs  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Boz Scaggs3 - Lowdown.mp3",
        timeCategory: "evening"

},

{
    name: "Lounge Beats ",
    artist: "Lounge",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats06.mp3",
           timeCategory: "evening"

},  



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
  timeCategory: "evening"


},


{
    name: "Lounge Beats ",
    artist: "Lounge",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats01.mp3",
        timeCategory: "evening"

}, 






{
    name: "Lounge Beats ",
    artist: "Lounge",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats02.mp3",
        timeCategory: "evening"

}, 






{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj1.mp3",
         timeCategory: "evening"

}, 




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
         timeCategory: "evening"

}, 





{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
         timeCategory: "evening"

}, 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
       timeCategory: "evening"

}, 

















{
    name: "  You Gotta Be",
    artist: "Des'ree ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Des'ree - You gotta be.mp3",
 timeCategory: "evening"

},


{
    name: "This Is It",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Michael Jackson - This is it.mp3",
  


 timeCategory: "evening"

},



{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/New track.mp3",
 timeCategory: "evening"

},


{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes01.mp3",
 timeCategory: "evening"

},




{
    name: "Volume 4",
    artist: "Hotel Costes",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/hotel costes 4/Costes02.mp3",
 timeCategory: "evening"

},






{
    name: " 2nite",
    artist: "Carol Riddick ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Carol Riddick - 2nite.mp3",
         timeCategory: "evening"

},

{
     name: " Starlette (1981)",
    artist: "B B & Q Band   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/B B & Q Band - Starlette (extended version).mp3",
         timeCategory: "evening"

},



{
     name: "  Still In Love",
    artist: "Rose Royce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Rose Royce Still in love.mp3",
         timeCategory: "evening"

},

{
    name: " About them time",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Lizzo - About them time.mp3",
  timeCategory: "evening"

},

{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
    timeCategory: "evening"

},

{
    name: " Miracles (12inch)",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://Sunnydanceoldies04.netlify.app/Change - Miracles.mp3",
  timeCategory: "evening"

},




{
    name: "Make It Right",
    artist: "Donna Odain  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Donna Odain - Make it right.mp3",
    timeCategory: "evening"

},




{
     name: "    Number One",
    artist: "Patrice Rushen",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Patrice Rushen - Number one.mp3",
  timeCategory: "evening"

},



{
     name: " The Greatest Dancer",
    artist: "Sisters Sledge ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Sisters Sledge - He's The Greatest Dancer (12inch).mp3",
  timeCategory: "evening"

},



{
    name: "Super Duper Love",
    artist: "Joss Stone",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Joss Stone - Super Duper Love.mp3",
  timeCategory: "evening"

},





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_07.mp3",
 timeCategory: "evening"

},






{
    name: " Crazy In Love (2003)",
    artist: "Beyonce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Beyonce - Crazy In Love.mp3",
  
timeCategory: "evening"

},
 


{
     name: "  San Salvador",
    artist: "Azoto ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies07.netlify.app/Azoto - San Salvador.mp3",
         timeCategory: "evening"

},





{
    name: "   70 Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70.mp3",
         timeCategory: "evening"

},




{
     name: " Shine (1978)",
    artist: "Bar-Kays ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Bar-Kays - Shine 1978.mp3",
   timeCategory: "evening"

},











{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
      timeCategory: "evening"

},







{
     name: "Slave To The Rhythm ",
    artist: "Grace Jones (1985)",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/GRACE JONES. Slave to the rhythm. 1985..mp3",
           timeCategory: "evening"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
           timeCategory: "evening"

},


{
     name: " And The Beat Goes On ",
    artist: "The Whispers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/The Whispers - And the beat goes on.mp3",
         timeCategory: "evening"

},









{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 
 timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
      timeCategory: "evening"

},




{
    name: "Megamix 2023",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_01.mp3",
    timeCategory: "evening"
  },



{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_03.mp3",
 timeCategory: "zevening"

},





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_05.mp3",
 timeCategory: "evening"

},





{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_06.mp3",
 timeCategory: "evening"

},













{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj4.mp3",
 timeCategory: "evening"

},







{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/female dj2.mp3",
    timeCategory: "evening"

},







{

    name: " Biaozinho Carioca",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Biaozinho Carioca.mp3",
     timeCategory: "evening"

},





{

name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/jazz jingle.mp3",
     timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "evening"

},





{

    name: "Hotel Del Mar",
    artist: "Chillout lounge",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Hotel del Mar05.mp3",
       timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
       timeCategory: "evening"

},

{
     name: "  Sun Goddess",
    artist: " Earth Wind & Fire  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/RAMSEY LEWIS - EARTH WIND FIRE - Sun Goddess.mp3",
       timeCategory: "evening-late"

},
  






























































{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female DJ1.mp3",
         timeCategory: "evening"

},















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj6.mp3",
         timeCategory: "evening"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


 timeCategory: "evening"

},



{
    name: "  70 Disco ",
    artist: "Discomix 70",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Discomix 70 2.mp3",
         timeCategory: "evening"

},
















{
     name: "  Let's Go Together",
    artist: "Change ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Change - Let's go together.mp3",
         timeCategory: "evening"

},



{
    name: " Waterfalls",
    artist: "TLC ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek04/TLC - Waterfalls.mp3",
        timeCategory: "evening"

},



{
     name: "I Like (single)",
    artist: "Young & Company ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Young & Company - I Like (single).mp3",
        timeCategory: "evening"

},







{
     name: " Got My Mind Made Up (1978)",
    artist: "Instant Funk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Instant Funk Got My Mind Made Up (1978).mp3",
   timeCategory: "evening"

},


{
     name: "  Again (1980)",
    artist: "The Night People  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/The Night People - Again (1980).mp3",
  timeCategory: "evening"

},




{
     name: "  Street Player ",
    artist: "Chicago  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Chicago -  Street player.mp3",
    timeCategory: "evening"

},










{

    name: "Jazzy Beats",
    artist: "Lounge Beats",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/lounge/Lounge Beats03.mp3",
    timeCategory: "evening"

},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  timeCategory: "evening"

},





















































{
     name: "  Sunny Dance",
    artist: "80's Mix  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnylounge01.netlify.app/80 mix 01.mp3",
   timeCategory: "evening-late"

},






 

{
     name: "  Fly Robin Fly",
    artist: "Silver Convention ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Silver Convention - Fly Robin Fly.mp3",
         timeCategory: "evening"

}, 


{
    name: " Let's go ",
    artist: "Average White Band  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Average White Bans - Let's go round again.mp3",
         timeCategory: "evening"

},

 



{
     name: "  Black Sun",
    artist: "The far Out Monster Orchestra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/The far out monster orchestra - Black sun.mp3",
          timeCategory: "evening"

},








{
    name: "Too Hot (12inch)",
    artist: "Kool And The Gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Kool and the gang - Too hot.mp3",
         timeCategory: "evening"

},




{
     name: " Shine (1978)",
    artist: "Bar-Kays ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Bar-Kays - Shine 1978.mp3",
       timeCategory: "evening"

},


{
     name: "   Disco Nights",
    artist: "G.Q ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/G.Q - Disco Nights.mp3",
        timeCategory: "evening"

},




{
    name: " All Night Long",
    artist: "Splendor ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Splendor - All night long.mp3",
  


         timeCategory: "evening"

},



{
     name: " The Chase",
    artist: "Gorgio Moroder ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Gorgio Moroder - The Chase.mp3",
   timeCategory: "evening"

},







{
     name: "  Lady Sun",
    artist: "Earth, Wind & Fire",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Earth, Wind & Fire - Lady Sun.mp3",
   timeCategory: "evening"

},





{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
       timeCategory: "evening"

},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
           timeCategory: "evening"

},









{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
         timeCategory: "evening"

},

















{
    name: "Do Watcha Wanna Do",
    artist: "Neil Rodgers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Neil Rodgers - Do watcha wanna do.mp3",
  


 timeCategory: "evening"

},






{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 timeCategory: "evening"

},

 
{
    name: "If Dreams Come True",
    artist: "Ella Fitzgerald",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek03/The very best of Jazz Divass - Vol. 4.mp3",
    timeCategory: "evening"

},

 {
    name: "Welcome!",
    artist: "Play Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
   timeCategory: "evening"

},
















{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
        timeCategory: "evening"

}, 



{
    name: "You Are Not Alone",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Michael Jackson- You are not alone.mp3",
         timeCategory: "evening"

}, 

{

    name: "Fly Over The Horizon",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Fly over the horizon.mp3",
       timeCategory: "evening"

},




{
    name: "In A Sentimental Mood (1961) Live",
    artist: "Sarah Vaughan",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/sarah vaughn/Sarah Vaughan - In A Sentimental Mood (1961) Live (1964).mp3",
         timeCategory: "evening"

},

{
    name: "Silent Way (1969)",
    artist: "Miles Davis",
   image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/silent way 02.mp3",
       timeCategory: "evening"

},















  



{
    name: " I Love Your Smile",
    artist: "Shanice ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Shanice - I Love Your Smile.mp3",
 timeCategory: "evening"

},











 







{

    name: "Butterfly",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Butterfly.mp3",
      timeCategory: "evening"

},



{

    name: "Last Summer In Rio",
    artist: "Azymuth ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/latin/Azymuth - Last Summer in Rio.mp3",
        timeCategory: "evening"

},


{

    name: "Last Summer In Rio",
    artist: "Sunny ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
        timeCategory: "evening"

},


















 












{
     name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/New track.mp3",
       timeCategory: "evening"

}, 




{
     name: "What You Waiting For  (12inch)",
    artist: "Stargard ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Stargard - What you waiting for 12inch.mp3",
         timeCategory: "evening"

}, 


{
    name: "   Save Your Soul",
    artist: "Tink ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Tink - Save Your Soul.mp3",
       timeCategory: "evening"

}, 








{
     name: " Everybody Dance (1978)",
    artist: "Chic  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Chic - Everybody Dance (1978).mp3",
       timeCategory: "evening"

}, 








{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
        timeCategory: "evening"

}, 



{
    name: " Don't Stop The Music (1980)",
    artist: "Yarbrough & Peoples  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Yarbrough & Peoples - Don't Stop The Music.mp3",
          timeCategory: "evening"

}, 








{
     name: "  Sunshine Hotel (1978)",
    artist: "Richard  T. Bear ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://soulfullforever.netlify.app/Richard  T. Bear - Sunshine Hotel.mp3",
       timeCategory: "evening"

},



{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
 timeCategory: "evening"

},


{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj5.mp3",
 timeCategory: "evening"

},



















{
    name: " Megamix 2023",
    artist:  "Purple Disco Machine  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://purplediscomachine2023.netlify.app/Purple Disco Machine - Megamix 2023_04.mp3",
 timeCategory: "evening"

},





























{
    name: "  The Love We Had",
    artist: "Joss Stone ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Joss Stone - The Love We Had.mp3",
   timeCategory: "evening"

},



{
    name: "A Walk In The Park ",
    artist: "Nick Straker ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Nick Straker Band - A walk in the park 7inch.mp3",
 timeCategory: "evening"

},



{
    name: " Juicy Fruit",
    artist: "Mtume ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Mtume - Juicy Fruit.mp3",
  


 timeCategory: "evening"

},




{
    name: "Welcome!",
    artist: "Listen Live Sunny Jazzradio ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/discjockeys/Female dj2.mp3",
   timeCategory: "evening"

},





{
    name: " Sunrise (12inch)",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Simply Red - Sunrise (Extended).mp3",
  timeCategory: "evening"

},


{
    name: "Best Of",
    artist: "Sunny Jazz   ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles/smooth jazz jingle.mp3",
  timeCategory: "evening"

},






{
    name: "Fever ",
    artist: "Peggy Lee",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/muziek01/Peggy Lee - Fever.mp3",
       timeCategory: "evening"

},




{
    name: "My Mama Don't  ",
    artist: "Sunny Jazz  ",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/jingles//smooth jazz jingle.mp3",
       timeCategory: "evening"

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



