// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach((item) => {
      item.classList.add('show');
    });

    //Set Meny State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => {
      item.classList.remove('show');
    });

    //Set Meny State
    showMenu = false;
  }
}

var i = 0;
var txt = '......';
var speed = 50;
let innerHTML = document.getElementById('type-writer');
//Type writer Effect
if (innerHTML) {
  setInterval(function typewriter() {
    innerHTML = document.getElementById('type-writer').innerHTML +=
      txt.charAt(i);
    if (innerHTML.length > 5) {
      innerHTML = document.getElementById('type-writer').innerHTML = '';
    }
  }, 400);
}

function toogleVideoPlayer() {
  var videoPlayer = document.querySelector('.video-player');
  var video = document.querySelector('video');
  videoPlayer.classList.toggle('active');
  video.pause();
  video.currentTime = 0;
}

function formSubmitHandler(e) {
  e.preventDefault();
  return;
}
