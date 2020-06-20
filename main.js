//Declare Body as Parent Element
const bodyElement = document.querySelector('body');

//Create a Button
const buttonElement = document.createElement('button');
buttonElement.setAttribute('id', 'removeButton');
buttonElement.append('Remove Element');
//Add Button to Body
bodyElement.append(buttonElement);

//Create Main Element
const mainElement = document.createElement('main');
//Add Main Element to Body Element
bodyElement.append(mainElement);

//Create Image Element
const imageElement = document.createElement('img');
imageElement.setAttribute('class', 'image');
imageElement.setAttribute('alt', 'Bugs Bunny');
imageElement.setAttribute('src', 'https://i.pinimg.com/originals/9d/3e/5e/9d3e5e7c1c13ff2dcbf7c1f4e03a0c56.jpg');
imageElement.setAttribute('width', '200px');

mainElement.append(imageElement);

//Create Anchor Element
const aElement = document.createElement('a');
aElement.setAttribute('class', 'link');
aElement.setAttribute('href', 'http://google.com');

aElement.append('Go to Google');
mainElement.append(aElement);

/* Stretch Goals */
// Create Event Listener to Remove Main Element
const removeButton = document.querySelector('#removeButton');
removeButton.addEventListener('click', function(){
    mainElement.remove();
})

// Create Input Textbox
const inputElement = document.createElement('input');
inputElement.setAttribute('id', 'userInput');
bodyElement.append(inputElement);

//Create Add Element Button
const addButtonElement = document.createElement('button');
addButtonElement.append('Add Element');
addButtonElement.setAttribute('id', 'addButton');
bodyElement.append(addButtonElement);

//Add Event Listner for Add Element
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', function(){
    let userText = document.querySelector('#userInput');
    let userValue  = userText.value;
    //Create DIV element
    const divElement = document.createElement('div');
    divElement.append(userValue);
    bodyElement.append(divElement);
})
//*/