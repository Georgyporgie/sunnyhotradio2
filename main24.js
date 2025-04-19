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












function getCurrentTimeCategory() {
  const currentHour = new Date().getHours();
  if (currentHour >= 9 && currentHour < 12) {
    return "morning"; // Corrected order
  } else if (currentHour >= 12 && currentHour < 18) {
    return "evening-late";
  } else if (currentHour >= 18 && currentHour < 21) {
    return "afternoon";




} else if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3)) {
    return "evening"; // Fix for wrapping around midnight
  } else if (currentHour >= 3 && currentHour < 7) {
    return "jingle-time";
  } else {
    return "evening"; // Any remaining hours fit here
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
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/return classics.mp3",
     timeCategory: "afternoon"
},




{
    name: "  Another Man (1984)",
    artist: "Barbara Mason",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Barbara Mason - Another Man.mp3",
    timeCategory: "afternoon"
},



{
    name: "How We Do It",
    artist: "Sean Paul & Pia Mia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Sean Paul & Pia Mia - How do we do it.mp3",
    timeCategory: "afternoon"
},




{
    name: " Shy Guy (1995)",
    artist: "Diana King  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies03.netlify.app/Diana King - Shy guy.mp3",
    timeCategory: "afternoon"
},

{
    name: " Persuasive",
    artist: "Doechii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Doechii - Persuasive.mp3",
    timeCategory: "afternoon"
},





{
    name: " Gimme That Funk (1978)",
    artist: "Dennis Coffey  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
     path: "https://sunnyhotradio.com/muziek/oldies07/Dennis Coffey - Gimme That Funk (1978).mp3",
    timeCategory: "afternoon"


},











{
    name: "  Love Me  ",
    artist: "Inna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Inna - Love Me.mp3",
    timeCategory: "afternoon"
},





{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "afternoon"
 },








{
    name: " Fade To Grey",
    artist: "Visage ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Visage - Fade to Grey.mp3",
    timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle.mp3",
    timeCategory: "afternoon"
},







{
   name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you22.mp3",
    timeCategory: "afternoon"
},







{
    name: "Welcome!",
    artist: "Sunny Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/start the party.mp3",
    timeCategory: "afternoon"


},






{
    name: "  On A Ragga Tip",
    artist: "SL2",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/SL2 - On A Ragga Tip.mp3",
   timeCategory: "afternoon"
 },






{
    name: "   Still Believe",
    artist: "Mary J. Blige ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Mary J. Blige - Still Believe In Love.mp3",
  


  timeCategory: "afternoon"
},




{
    name: " Flawless",
    artist: "The Ones ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/The Ones - Flawless.mp3",
  timeCategory: "afternoon"
},







{
    name: " Closer",
    artist: "Saweetie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Saweetie - Closer.mp3",
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
    name: "Sweet Baby",
    artist: "Macy Gray",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Macy Gray Sweet Baby.mp3",
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
    name: " You Know How To (12inch)",
    artist: "Phyllis Hyman  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies05.netlify.app/Phyllis Hyman - You Know How To Love Me (12inch).mp3",
  timeCategory: "afternoon"
},



{
    name: "   Dopamine ",
    artist: "Purple Disco Machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic07.netlify.app/Purple Disco Machine - Dopamine.mp3",
  timeCategory: "afternoon"

 },





{
    name: " Fast",
    artist: "Saweetie",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Saweetie - Fast.mp3",
   timeCategory: "afternoon"

 },








{
    name: " You Are The Universe",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/Full Flava - You are the universe.mp3",
  timeCategory: "afternoon"
},



 
{
    name: " Run On Love",
    artist: "Lucas Nord   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Lucas Nord - Run On Love.mp3",
   timeCategory: "afternoon"
},





{
     name: "Welcome!",
    artist: "Listen Live Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  timeCategory: "afternoon"
},



{
    name: "I'll Be Good",
    artist: "Rene &  Angela",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Rene &  Angela - I'll be good.mp3",
  timeCategory: "afternoon"


},


{
    name: "   Creep (1994)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/TLC - Creep.mp3",
  timeCategory: "afternoon"
},





{
    name: "  Whatta Man (1993)  ",
    artist: "Salt N Pepa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Salt N Pepa - Whatta Man.mp3",
  timeCategory: "afternoon"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  timeCategory: "afternoon"
},






{
    name: "  Lucky Star (2000)  ",
    artist: "Superfunk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/Superfunk - Lucky Star.mp3",
 timeCategory: "afternoon"
},




{
    name: "   No Scrubs (1999)  ",
    artist: "TLC ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnyhotradio.com/muziek/oldies07/TLC - No Scrubs.mp3",
  timeCategory: "afternoon"
},






























































































































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "afternoon"

},

 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "afternoon"
},














































































{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "afternoon"

},

 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance Radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/sunny dance jingle.mp3",
     timeCategory: "afternoon"
},

















{
    name: "   Could Be Something",
    artist: "Minelli  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic05.netlify.app/Minelli - Could be Something.mp3",
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
    name: " Don't Stop ",
    artist: "KID  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/KID - Don't Stop.mp3",
   timeCategory: "evening"
},













{
    name: "  Atomic Playboy",
    artist: "Space Trax ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://danceoldies06.netlify.app/Space Trax - Atomic Playboy.mp3",
  
    timeCategory: "evening"
},





{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
    timeCategory: "evening"
},










{
    name: "Welcome!",
    artist: "Listen Live Sunny Danceradio ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


    timeCategory: "evening"
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
    name: "When I'm Gone",
    artist: "Alesso & Kathy Perry",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Alesso & Kathy Perry - When I'm gone.mp3",
  timeCategory: "evening"

 },

{
     name: " Used To Know Me",
    artist: "Charli XCX ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemusic04.netlify.app/Charli XCX - Used to know me.mp3",
   timeCategory: "evening"
},



{
    name: "Fast Love",
    artist: "George Michael",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Fast Love - George Michael.mp3",
   timeCategory: "evening"
},


{
    name: "Too Much Too Late",
    artist: "Full Flava ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Full Flava - Too much too late.mp3",
   timeCategory: "evening"
},
















{
    name: "Do Your Dance (1977)",
    artist: "Rose Royce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Rose Royce - Do your dance.mp3",
   timeCategory: "evening"
},


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
   timeCategory: "evening"
},

{
    name: "Soul Insurance",
    artist: "Angie Stone ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydancemuziek01.netlify.app/Angie Stone  Soul Insurance.mp3",
   timeCategory: "evening"
},









{
     name: "A Pain That I'm Used To",
    artist: "Depeche Mode",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies02.netlify.app/A Pain That I'm Used To (Jacques Lu Cont Remix).mp3",
   timeCategory: "evening"
},

{
    name: "Lowdown (12inch)",
    artist: "Boz Scaggs",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies01.netlify.app/Boz Scaggs3 - Lowdown.mp3",
  timeCategory: "evening"
 },
















{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  timeCategory: "evening"
 },






 

{
     name: "Welcome!",
    artist: "Listen Live Sunny Dance radio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  timeCategory: "evening"
 },
 
















{
    name: "Hours and Hours",
    artist: "Muni Long ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Muni Long - Hours and Hours.mp3",
  timeCategory: "evening"
 },










{
    name: "  Back In Time",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/back in time jingle.mp3",
   timeCategory: "evening"
},








{
    name: "  Shaft In Africa (1973)",
    artist: "Johnny Pate ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Johnny Pate - Shaft In Africa.mp3",
  
 timeCategory: "evening"

},










































































































































































  













 











{
    name: " Shoot Your Shot (1982) ",
    artist: "Divine   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/oldies07/Divine - Shoot Your Shot (1982).mp3",
   timeCategory: "evening-late"
},
  





{
    name: "Die In The Disco",
    artist: "Nightclub",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic03.netlify.app/Nightclub - Die in the Disco.mp3",
  


  timeCategory: "evening-late"
}, 






























{
    name: " Blue",
    artist: "Miley Cyrus & Bebe Rexha  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunny-dancemusic02.netlify.app/Miley Cyrus & Bebe Rexha- Blue.mp3",
  timeCategory: "evening-late"
},












 







{
    name: "Just For You ",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you33.mp3",
    timeCategory: "evening-late"
},





{
    name: "    Seven Stars",
    artist: "Quazar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "https://sunnydanceoldies08.netlify.app/Quazar - Seven Stars.mp3",
  

  timeCategory: "evening-late"
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
  const trackListElement = document.getElementById('track-list-container');
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













// Function to emphasize the words "classic", "maxi", "12inch", and "new" in a given text
  function emphasizeKeywords(text) {
 return text.replace(/(classic|maxi|12inch|new|\b\d{4}\b)/gi, function(match) {
      if (match.toLowerCase() === 'new') {
        return '<em class="blinking-new">' + match + '</em>';
      }
      return '<em>' + match + '</em>';
    });
  }

 




















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










