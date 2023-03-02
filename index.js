//dom elements
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
// const itemContainer = document.getElementById('itemContainer')
const itemMenu = document.getElementsByClassName('movileMenu--item')

//click events
openMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  menu.className = 'movileMenu--navContainer'
});
closeMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  menu.className = 'movileMenu--navContainerOff'
});
for (let i = 0; i < itemMenu.length; i++) {
  itemMenu[i].addEventListener('click', (e)=>{
    e.preventDefault();
  });
}