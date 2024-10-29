let bar = document.getElementById('menu-bar');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

bar.addEventListener('click', function() {
  menu.style.top = '0px';
});

close.addEventListener('click', function() {
  menu.style.top = '-420px';
});