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
  };


let markAsImportant = function(item) {
  let iconBlock = item.querySelector('.js-task-list__item-star-block');
 
  iconBlock.addEventListener('click', function() {
    iconBlock.classList.toggle('filled');

    if (iconBlock.classList.contains('filled')) {
      item.classList.add('important');
    } else {
      item.classList.remove('important');
    }; 
  });
};



let checkboxCreate = document.querySelector('.js-create-form__checkbox');
let starIconCreate = document.querySelector('.js-create-form__icon');

starIconCreate.addEventListener('click', function() {
  starIconCreate.classList.toggle('filled');
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  let taskText = input.value;
  let task = newElement.cloneNode(true);
  let taskDescription = task.querySelector('span');

  taskDescription.textContent = taskText;
  addCheckHandler(task);
  deleteTask(task);
  
    if(starIconCreate.classList.contains('filled')) {
      task.classList.add('important');
    } else {
      task.classList.remove('important');
    };

    markAsImportant(task);

    if (checkboxCreate.checked) {
      task.querySelector('.js-create-form__checkbox').checked = true;
      task.classList.add('task-list__item--done');
      taskListCheked.appendChild(task);
      doneCounter.textContent = ' ' + chekedItems.length;
    } else {
      taskList.appendChild(task);
    };

  input.value = '';
});

let showImportantBtn = document.querySelector('.js-important-tasks-btn');

showImportantBtn.addEventListener('click', function() {
  
  if(showImportantBtn.textContent === 'Важные') {

    showImportantBtn.textContent = 'Все задачи';
  } else {
    showImportantBtn.textContent = 'Важные';
  }
  
  taskList.classList.toggle('task-list--important')
  taskListCheked.classList.toggle('task-list--important')
});



     
