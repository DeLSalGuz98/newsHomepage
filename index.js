//dom elements
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

//click events
openMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  menu.className = 'movileMenu--navContainer'
});
closeMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  menu.className = 'movileMenu--navContainerOff'
});