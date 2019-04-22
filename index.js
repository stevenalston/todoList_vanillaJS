const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');


function newTodo() {
  // get task
  classNames.TODO_TEXT = prompt("Add your task: ");
  if (classNames.TODO_TEXT === '' || classNames.TODO_TEXT === null) {
    alert("please add a task: ");
  } else {
    // print task to document
    list.innerHTML += `<li class="${classNames.TODO_ITEM}">
                        <span>${classNames.TODO_TEXT}</span>
                        <input type="checkbox" onclick="checkInput()" class="${classNames.TODO_CHECKBOX}" />
                        <button class="${classNames.TODO_DELETE}" onclick="deleteItem()">DELETE</button> 
                      </li>
                      `;
    // get the task count
    itemCountSpan.innerHTML = list.children.length;
    checkInput();
  }

}

uncheckedCountSpan.addEventListener('click', checkInput);

function checkInput() {
  // change the unchecked html
  let count = 0;
  const checkbox = document.getElementsByClassName(classNames.TODO_CHECKBOX);
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      console.log('checked');
      count--;
      uncheckedCountSpan.textContent = count;
    }
    console.log('unchecked');
    count++;
    uncheckedCountSpan.textContent = count;

  }
}


function deleteItem() {
  if (list.children.length > 0) {
    document.querySelector('.todo-list').removeChild(list.querySelector('li'));
    itemCountSpan.innerHTML = list.children.length;
    checkInput();
  }
}
