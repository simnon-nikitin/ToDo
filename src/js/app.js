let taskList = document.querySelector('.task-list')
let items = taskList.children;
let template = document.querySelector('#task-template').content
let newElement = template.querySelector('.task-list__item');

let form = document.querySelector('.add-form')
let input = document.querySelector('.create-form__input')

let taskListCheked = document.querySelector('.task-list-cheked')
let chekedItems = taskListCheked.children;

let doneTitle = document.querySelector('.task-list-cheked__title')
let doneCounter = doneTitle.querySelector('span')


let addCheckHandler = function (item) {
    let checkbox = item.querySelector('.create-form__checkbox');
    checkbox.addEventListener('change', function () {
        let clone = item.cloneNode(true);
        clone.classList.add('task-list__item--done')
        taskListCheked.appendChild(clone)

        item.remove();
        doneCounter.textContent = ' ' + chekedItems.length
    });
  };

form.addEventListener('submit', function (evt){
    evt.preventDefault()
  
    let taskText = input.value
    let task = newElement.cloneNode(true);
  
    let taskDescription = task.querySelector('span')
    taskDescription.textContent = taskText;
    addCheckHandler(task);

    taskList.appendChild(task)
    input.value = '' 
  });
  

let checkboxDone = chekedItems.querySelector('input')

  console.log(checkboxDone)
        
 