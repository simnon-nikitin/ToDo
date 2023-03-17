let taskList = document.querySelector('.js-task-list')
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
  checkbox.addEventListener('change', function (evt) {
        if(evt.target.checked) {
        item.classList.add('task-list__item--done')
        taskListCheked.appendChild(item)
       //console.log(evt.target.checked);
        }else{
          item.classList.remove('task-list__item--done')
          taskList.appendChild(item)
        }
      
       doneCounter.textContent = ' ' + chekedItems.length
  });
};




let checkboxCreate = document.querySelector('#checkboxcreate')


form.addEventListener('submit', function (evt){
  evt.preventDefault()

  let taskText = input.value
  let task = newElement.cloneNode(true);

  let taskDescription = task.querySelector('span')
  taskDescription.textContent = taskText;
  addCheckHandler(task);

  
    if (checkboxCreate.checked) {
      task.querySelector('.create-form__checkbox').checked = true
      task.classList.add('task-list__item--done')
      taskListCheked.appendChild(task)
    } else {
      taskList.appendChild(task)
    }

  input.value = '' 
});







        
 