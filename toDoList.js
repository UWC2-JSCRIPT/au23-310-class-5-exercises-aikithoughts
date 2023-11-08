// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const todayList = document.querySelector('.today-list');

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  console.log("Text", text);

 // const todayList = document.querySelector('.today-list');
  const newItem = document.createElement('li', );
  const newItemTitle = document.createElement('span');
  newItemTitle.innerHTML = text;

  const deleteButton = document.createElement('a');
  deleteButton.className = 'delete';
  deleteButton.innerText = 'Delete';

  newItem.appendChild(newItemTitle);
  newItem.appendChild(deleteButton);
  todayList.appendChild(newItem);
  // Clear the input
  input.value = "";
};



const markAsDone = (e) => {
  if (e.target.tagName = 'LI') {
    e.target.parentNode.classList.toggle('done');
  }
}

const addButton = document.querySelector('.add-item');
const taskList = document.querySelector('.today-list');

addButton.addEventListener('click', addListItem);
taskList.addEventListener('click', markAsDone);

// Delete the list item when Delete is clicked
todayList.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('delete')) {
    const listItem = e.target.parentElement;
    listItem.remove();
  }
});


