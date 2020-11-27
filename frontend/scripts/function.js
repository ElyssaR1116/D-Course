$(document).ready(function(){
    $("#showbtn").click(function(){
        $("#show").css("display","block");
        $("#show2").css("display","block");
        $("#show3").css("display","block");
        $("#showbtn").css("display","none");
    });
});

function openInfo(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function myMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function toShare() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function myFunction() {
  var x = document.getElementById("show4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("show5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

jQuery(function($) {
  $('#showbtn2').on('click', function() {
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('i').toggleClass('fa-chevron-down fa-chevron-up');
    textNode.nodeValue =($el.hasClass('showDown') ? 'Down' : 'Up')
    $el.toggleClass('showDown');
  });
});

$('#datepicker').datepicker();

