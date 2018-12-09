// *************** ADD - DELETE - EDIT CARDS  **************

/*** Creates an inputField which contains a textarea, a 'Add a Card' button and a delete 'X' button.***/
function displayInputField() {
  //checks to see if there is a div#inputField in our DOM (null means we do not have div#inputField), and creates it if its not there
  var a = document.getElementById("inputField");
  var inputFieldExist = true;
  if (a === null) {
  a = document.createElement("inputField");
  a.id = "inputField";
  inputFieldExist = false;
}

  // Creates form to wrap around textarea
  let form = document.createElement("form");
  form.id = "inputForm";
  // Creates a textarea for input
  var b = document.createElement("textarea");
  b.setAttribute("type", "text");
  b.setAttribute("id", "userInput");
  b.setAttribute("overflow", "break-word");
  b.setAttribute("placeholder", "Enter a title for this card...");
  // Creates submit button for form
  let button = document.createElement("button");
  button.innerHTML = "Add Card";
  button.setAttribute("id", "createNewCard");
  button.type = "submit";
  // Adds textarea and button to form
  form.appendChild(b);
  form.appendChild(button);
  // Adds form to inputField
  a.appendChild(form);


// ****************************************************
// BUG: form doesn't submit when enter key is pressed -- why not?
// *****************************************************


  //Call the CreateCard() function to create a new card when the 'Add a Card' form is submitted (or button is clicked).
  form.addEventListener("submit", function(e) {
    //Checks to see if the textarea is empty. If it is a card will not be created when the user clicks the 'Add a Card' button.
    if (document.getElementById("userInput").value ==="") {
      return false;
    } else {
      createACard();
    } e.preventDefault();
  });

  // Creates a delete "x" button and set attributes to it
  var closeButton = document.createElement("closeButton");
  closeButton.innerHTML = '<i class="fas fa-times"></i>';
  closeButton.setAttribute("id", "createNewCloseBtn");
  a.appendChild(closeButton);

  //Checks to see if a div#inputField exists and creates one if it does not exist and appends it to its parentNode
  if (!inputFieldExist) {
    document.querySelector(".cardContainer").appendChild(a);
  }
  // adds an event listener which will call the removeCard () function to delete the div#inputField when clicked
  closeButton.addEventListener("click", function() {
    removeCard();
  });
}

//Hides the 'Add a Card' and 'Add another card' links when they are clicked.
function hideButton(x) {
document.getElementById(x).style.display = "none"; // hide the button
}

//Takes the input from div#inputField and creates a new 'titled' card
function createACard() {
  var createCardElem = document.getElementById("createCard");
  var createNewCard = document.createElement("div");
  createNewCard.setAttribute("id", "newCard");
  createCardElem.appendChild(createNewCard);
  var inputTaker = document.getElementById("userInput").value;
  //appending the user's input to the new card
  createNewCard.innerHTML = inputTaker;
  document.getElementById("userInput").value = ""; //empties the text-area after 'Add a Card' button is clicked.
}

//removes the inputField and buttons from the document and shows the 'addAnotherCardLink' after it has been clicked.
function removeCard(inputField) {
  var element = document.getElementById("inputField");
  element.parentNode.removeChild(element);
  document.getElementById("addAnotherCardLink").style.display = "block";
}
