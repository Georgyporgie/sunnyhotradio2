



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

 $('.btn').click(function () {
            $(this).toggleClass("click");
        });







function update() {
 var el = document.querySelector(
  ".conten, .more");
 el.innerHTML =
  "A beautiful mix of new Dance songs<br> and older Dance & Disco classics!";
};



function update2() {
 var el = document.querySelector(
  ".inhou, .meer");
 el.innerHTML =
  "A beautiful mix of new Rock & Pop songs<br> to help you through the day!";
};




function update3() {
 var el = document.querySelector(
  ".jazzy, .less");
 el.innerHTML =
  "A beautiful mix of Soul & Classicjazz songs<br> to help you through the day!";
};
