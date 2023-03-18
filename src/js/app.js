let taskList = document.querySelector('.js-task-list');
let items = taskList.children;
let template = document.querySelector('#task-template').content;
let newElement = template.querySelector('.js-task-list__item');

let form = document.querySelector('.js-create-form__form');
let input = document.querySelector('.js-create-form__input');

let taskListCheked = document.querySelector('.js-task-list-cheked');
let chekedItems = taskListCheked.children;

let doneTitle = document.querySelector('.js-task-list-cheked__title');
let doneCounter = doneTitle.querySelector('.js-task-list-cheked__counter');

let addCheckHandler = function (item) {
  let checkbox = item.querySelector('.js-create-form__checkbox');
  checkbox.addEventListener('change', function (evt) {
        if (evt.target.checked) {
        item.classList.add('task-list__item--done');
        taskListCheked.appendChild(item);
        } else {
          item.classList.remove('task-list__item--done');
          taskList.appendChild(item);
        }
      
       doneCounter.textContent = ' ' + chekedItems.length;
  });
};

let deleteTask = function(item) {
  let contextMenu = item.querySelector('.task__context-menu');
  
  item.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    contextMenu.style.top =  `${event.clientY}px`;
    contextMenu.style.left =  `${event.clientX}px`;
    contextMenu.classList.add('task__context-menu--visible');
    
    contextMenu.addEventListener('click', function(){
      item.remove()
      doneCounter.textContent = ' ' + chekedItems.length;
    })
    document.addEventListener('click', function(event){
      if (event.button !== 2) {
        contextMenu.classList.remove('task__context-menu--visible');
      }
    }, false);
  });
  }

let checkboxCreate = document.querySelector('#checkboxcreate');

form.addEventListener('submit', function (evt){
  evt.preventDefault();

  let taskText = input.value;
  let task = newElement.cloneNode(true);
  let taskDescription = task.querySelector('span');

  taskDescription.textContent = taskText;
  addCheckHandler(task);
  deleteTask(task)
  
    if (checkboxCreate.checked) {
      task.querySelector('.js-create-form__checkbox').checked = true;
      task.classList.add('task-list__item--done');
      taskListCheked.appendChild(task);
      doneCounter.textContent = ' ' + chekedItems.length;
    } else {
      taskList.appendChild(task);
    }

  input.value = '';
});






        
 