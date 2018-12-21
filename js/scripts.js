window.onload = function() {
  checkForBackground();
};
// *************** SLIDEOUT MENU SCRIPT ***************
//Set background + background tile in menu to previous background setting
function checkForBackground() {
  if (localStorage.getItem('background') !== null) {
    let background = localStorage.getItem('background');
    menu.changeBackground(background);
    menu.changeBackgroundIcon(background);
  }
}

const headers = {
  'change-background': 'Change Background',
  'colors': 'Colors',
  'photos': 'Photos',
  'filter-cards': 'Filter Cards',
  'copy-board': 'Copy Board',
  'settings': 'Settings'
};

const backgroundImages = [
  'assets/eberhard-grossgasteiger-1036384-unsplash.jpg',
  'assets/ernest-porzi-19106-unsplash.jpg',
  'assets/frank-mckenna-140054-unsplash.jpg',
  'assets/hugues-de-buyer-mimeure-335733-unsplash.jpg'
];

let menu = {
  // Toggle menu from view (slide into or out of view)
  toggleMenuContainer: function() {
    document.getElementById('menu-container').classList.toggle("element-invisible");
    document.getElementById('show-menu-link').classList.toggle("element-invisible");
  },
  // Show or hide main menu
  toggleMainMenu: function() {
    //hide or show main menu
    document.getElementById('main-menu').classList.toggle("element-invisible");
    document.getElementById('main-menu-header').classList.toggle("element-invisible");
  },
  //hide all pages (before showing selected page)
  hideAllPages: function() {
    for (let key in headers) {
      if (document.getElementById(key).classList.contains('element-invisible') !== true) {
      document.getElementById(key).classList.toggle('element-invisible');
      }
    }
  },
  // Show or hide a specific page (page id passed as argument when function called from HTML)
  togglePage: function(id) {
    // if (document.getElementById(headers.colors).classList.contains('element-invisible') === true || document.getElementById(headers.photos).classList.contains('element-invisible') === true) {
    // }
    //hide main menu and all pages
    menu.toggleMainMenu();
    menu.hideAllPages();
    //hide or show header for current page
    document.getElementById('menu-header').classList.toggle("element-invisible");
    //set header text to match current page
    document.getElementById('page-header').innerHTML = headers[id];
    //show selected page
    document.getElementById(id).classList.toggle("element-invisible");
  },
  // Change background color
  changeBackground: function(background) {
    localStorage.setItem('background', background);
    if (background.startsWith('rgb')) {
      document.body.style.background = background;
    }
    else {
      document.body.style.background = "url("+ background +")";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    menu.changeBackgroundIcon(background);
  },
  changeBackgroundIcon: function(background) {
    let backgroundIcon = document.getElementById('background-menu-icon');
    if (background.startsWith('rgb')) {
      backgroundIcon.style.background = background;
    }
    else {
      backgroundIcon.style.background = "url("+ background +")";
    }
  }
};

// *************** ADD LISTS ***************

// add new list submit eventlistener
document.getElementById("add-list-form").addEventListener("submit", addList);

function addList(e) {
  e.preventDefault();
  const input = document.getElementById("list-name");
  const name = input.value;
  input.value = '';
  if ('' == name) {
    return;
  }

  const list = document.createElement('div');
  list.setAttribute('class', 'list');
  list.innerHTML =
    `<div class="list-heading" >
      <h3 contenteditable="true">` + name + `</h3>
    <div class= "ellipsis"><a href="#">&#8230;</a></div>
    </div>
      <div> 
        <form class="add-item-form">
          <textarea placeholder="Enter a title for this card..."></textarea>
          <div>
          <input type="submit" value="Add Card">
          <input type="button"><i class="fas fa-times"></i></input>
          <div class= "ellipsis"><a href="#">&#8230;</a></div>
          </div>
        </form>
      </div>`;

  document.getElementById("list-container").appendChild(list);
}

// add new item submit eventlistener
document.addEventListener('submit', function(e) {
  if (e.target.matches('.add-item-form')) {
    e.preventDefault();
    const textarea = e.target.getElementsByTagName('textarea')[0];
    const text = textarea.value;
    textarea.value = '';
    if ('' == text) {
      return;
    }
    //create card
    const cardItem = document.createElement('p');
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    //create pen icon
    const pen = document.createElement('a');
    pen.innerHTML = '<i class="fas fa-pen"></i>';
    cardItem.innerHTML = text;
    card.appendChild(cardItem)
    card.appendChild(pen);
    e.target.parentElement.prepend(card);
  }
});
