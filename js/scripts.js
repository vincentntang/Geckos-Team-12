// MENU SLIDEOUT 

const headers = {
  'change-background': 'Change Background',
  'filter-cards-page': 'Filter Cards',
  'settings-page': 'Settings'
};

let menu = {
  slideout: function() {
    document.getElementById('menu-slideout').style.display = "block";
    document.getElementById('show-menu-link').style.display = "none";
  },
  showMenu: function(idToHide) {
    document.getElementById('main-menu').style.display = "block";
    document.getElementById(idToHide).style.display = "none";
    document.getElementById('menu-header').style.display = "none";
  },
  showPage: function(id) {
    document.getElementById('menu-header').style.display = "block";
    document.getElementById('header').innerHTML = headers[id];
    document.getElementById(id).style.display = "block";
    menu.hideMenu();
  },
  hideMenu: function() {
    document.getElementById('main-menu').style.display = "none";
  },
  hideSlider: function() {
    document.getElementById('menu-slideout').style.display = "none";
    document.getElementById('show-menu-link').style.display = "block";
  }
};

function changeBackground(color) {
  document.body.style.background = color;
}
