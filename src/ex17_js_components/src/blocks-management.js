import './taskBlocks-component/taskBlocks.js';
import './footer-component/footer.js';
import './tasks-management.js';
import { countTasks, createTask, showTasks, eventForFirstButton, eventForOtherButtons } from './tasks-management.js';
import { initialData } from './mock.js';
import { transform } from '@babel/core';
const linkCreate = document.querySelector('.rectangle');
const board = document.querySelector('.board');
const linkDots = Array.from(document.querySelectorAll('.points'));
/* const allButtons = Array.from(document.querySelectorAll('.tasks-block__add-task-button')); */
/* const titleBlocks = Array.from(document.querySelectorAll('.tasks-block__title')); */
export const blocks = {
    backlog: document.querySelector('[data-tasks-block=backlog] .tasks-block__tasks-container'),
    ready: document.querySelector('[data-tasks-block=ready] .tasks-block__tasks-container'),
    inProgress: document.querySelector('[data-tasks-block=inProgress] .tasks-block__tasks-container'),
    finished: document.querySelector('[data-tasks-block=finished] .tasks-block__tasks-container'),
  };
console.log(blocks);
export const addButtons = {
    backlog: document.querySelector('[data-tasks-block=backlog] > .tasks-block__footer > .tasks-block__add-task-button'),
    ready: document.querySelector('[data-tasks-block=ready] > .tasks-block__footer > .tasks-block__add-task-button'),
    inProgress: document.querySelector('[data-tasks-block=inProgress] > .tasks-block__footer > .tasks-block__add-task-button'),
    finished: document.querySelector('[data-tasks-block=finished] > .tasks-block__footer > .tasks-block__add-task-button'),
  };

export const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];
  
const createNewBlock = () => {
    const createBlock = document.createElement('div');
    createBlock.classList.add('tasks-block');
    let theFirstChild = board.firstChild;
    board.insertBefore(createBlock, theFirstChild);
    checkPresenceOfBlocks();

    const createHeaderOfBlock = document.createElement('header')
    createHeaderOfBlock.classList.add('tasks-block__header');
    createBlock.appendChild(createHeaderOfBlock);

    const inputNameOfBlock = document.createElement('input');
    inputNameOfBlock.classList.add('input-for-name'); 
    inputNameOfBlock.setAttribute('type', 'text');
    createHeaderOfBlock.appendChild(inputNameOfBlock);
    inputNameOfBlock.focus();

    const linkDotsNew = document.createElement('button');
    linkDotsNew.classList.add('points');
    linkDotsNew.textContent = '•••';

    linkDotsNew.addEventListener('click', (event) => {
        const isClickInsideLinkDots = linkDotsNew.contains(event.target);
        const isClickInsideMenuDelete = elementUlDelete.contains(event.target);
      
        if (!linkDotsNew.classList.contains('show') && isClickInsideLinkDots) {
            linkDotsNew.classList.add('show');
            linkDotsNew.appendChild(elementUlDelete);
        } else if (linkDotsNew.classList.contains('show') && !isClickInsideMenuDelete) {
            linkDotsNew.classList.remove('show');
            elementUlDelete.remove();
        } else if (isClickInsideMenuDelete && linkDotsNew.classList.contains('show')) {
            linkDotsNew.parentNode.parentNode.remove();
            linkDotsNew.classList.remove('show'); 
            checkPresenceOfBlocks();     
           /*  localStorage.removeItem("tasks", "backlog"); */ 
        }
    });
    
    createHeaderOfBlock.appendChild(linkDotsNew);
    linkDots.unshift(linkDotsNew);

    const mainContainer = document.createElement('main');
    mainContainer.classList.add('tasks-block__tasks-container');
    createBlock.insertBefore(mainContainer, buttonAddCard);

    const buttonAddCard = document.createElement('div');
    buttonAddCard.innerHTML = '<footer class="tasks-block__footer"><button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button></footer>';
    createBlock.appendChild(buttonAddCard);

    const createNewNameOfBlock = () => {
        const nameOfBlock = document.createElement('h3');
        nameOfBlock.classList.add('tasks-block__title');
        nameOfBlock.setAttribute('type', 'text');
        nameOfBlock.innerHTML = inputNameOfBlock.value;
        createHeaderOfBlock.insertBefore(nameOfBlock, linkDotsNew);
        inputNameOfBlock.remove();
        
      /*  for (key in addButtons) { 
            if (key !== nameOfBlock.innerHTML) {
               key.removeEventListener('click', eventForFirstButton(key));
               } else {
               key.removeEventListener('click', eventForOtherButtons(key));}
               
           }  */
        /* Object.values(addButtons).forEach(element => {
            element.removeEventListener('click', eventForFirstButton);
            element.removeEventListener('click', eventForOtherButtons);
           }) */

         /*  for (key in addButtons) {
               
               key.removeEventListener('click', eventForFirstButton);
               key.removeEventListener ('click', eventForOtherButtons);
           } */
        blocks[nameOfBlock.innerHTML] = document.querySelector('[data-tasks-block='+nameOfBlock.innerHTML+'] .tasks-block__tasks-container');
        addButtons[nameOfBlock.innerHTML] = document.querySelector('[data-tasks-block='+nameOfBlock.innerHTML+'] .tasks-block__add-task-button');
        taskBlocksOrder.unshift(nameOfBlock.innerHTML);
        initialData[nameOfBlock.innerHTML] = [];
      
       createTask(); 

        localStorage.setItem('tasks', JSON.stringify(initialData));
        showTasks();
        
        /* showTasks(); */
    };
    
    inputNameOfBlock.addEventListener('blur', ({ target: { value } }) => {
        if (value) {
            inputNameOfBlock.parentNode.parentNode.setAttribute('data-tasks-block', value);
            createNewNameOfBlock(); 
        } else {
            board.removeChild(createBlock);
        }
    }); 
};

linkCreate.addEventListener('click', (event) => {    
        createNewBlock(); 
}); 

/* document.addEventListener('click', (event) => {  
if (linkCreate.contains(event.target)) {
    createNewBlock();
}
  if (addButtons.contains(event.target)) {
    createTask();
  }
}); */

const checkPresenceOfBlocks = () => {
    if (!document.querySelectorAll('.tasks-block').length) {
        const message = document.createElement('h2');
        message.classList.add('message');
        message.innerHTML = "You've got no active task blocks. You may use button 'Create new list' to make new block";
        board.appendChild(message);
    } else if (document.querySelector('.message')) {
        document.querySelector('.message').remove();
    }
}; 

const elementUlDelete = document.createElement('ul');
elementUlDelete.classList.add('menu-delete');
const itemDelete = document.createElement('li');
itemDelete.innerHTML = 'Delete this block';
elementUlDelete.appendChild(itemDelete);
itemDelete.classList.add('string-delete');

linkDots.forEach(item => { 
    document.addEventListener('click', (event) => {
        const isClickInsideLinkDots = item.contains(event.target);
        const isClickInsideMenuDelete = elementUlDelete.contains(event.target);
  
        if (!item.classList.contains('show') && isClickInsideLinkDots) {
            item.classList.add('show');
            item.appendChild(elementUlDelete);
        } else if (item.classList.contains('show') && !isClickInsideMenuDelete) {
            item.classList.remove('show');
            elementUlDelete.remove();
        } else if (isClickInsideMenuDelete && item.classList.contains('show')) {
            const header = item.parentNode;
            const titleOfDeletedBlock = header.querySelector('.tasks-block__title');
            console.log(titleOfDeletedBlock); 
            header.parentNode.remove(); 
            delete blocks[titleOfDeletedBlock];                
            item.classList.remove('show'); 
            checkPresenceOfBlocks();   
            countTasks();
        }
    });
});
