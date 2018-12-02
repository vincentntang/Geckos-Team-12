// *************** SLIDEOUT MENU SCRIPT ***************
const headers = {
  'change-background': 'Change Background',
  'filter-cards-page': 'Filter Cards',
  'settings-page': 'Settings'
};

let menu = {
  toggleSlideout: function() {
    document.getElementById('menu-slideout').classList.toggle("element-invisible");
    document.getElementById('show-menu-link').classList.toggle("element-invisible");
  },
  toggleMainMenu: function(idToHide) {
    document.getElementById('main-menu').classList.toggle("element-invisible");
    document.getElementById(idToHide).classList.toggle("element-invisible");
    document.getElementById('menu-header').classList.toggle("element-invisible");
  },
  togglePage: function(id) {
    document.getElementById('menu-header').classList.toggle("element-invisible");
    document.getElementById('header').innerHTML = headers[id];
    document.getElementById(id).classList.toggle("element-invisible");
    menu.toggleMainMenu();
  },
  changeBackground: function(color) {
    document.body.style.background = color;
  }
};
