import "./kanban.css";
import "./leftLogo-component/leftLogo.js"; 
import "./profile-component/profile.js"; 
import "./taskBlocks-component/taskBlocks.js";
import "./footer-component/footer.js"; 
import "./dropdown-menu.js"; 
import "./blocks-management.js"; 
import { initialData } from "./mock.js";
import { blocks, addButtons, taskBlocksOrder } from "./blocks-management.js";
const tasks = initialData;

localStorage.setItem("id-count", "15");
localStorage.setItem("tasks", JSON.stringify(tasks));

export let idCount = +localStorage.getItem("id-count");

export const showTasks = () => {
    localStorage.setItem("id-count", `${idCount}`); 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 

    Object.keys(tasks).forEach(key => {
        blocks[key].innerHTML = '';
        tasks[key].forEach(task => {
            const taskElem = document.createElement('p');
            taskElem.innerText = task.title;
            taskElem.className = 'task';
            blocks[key].appendChild(taskElem)
        });
    });
};

export const pushButtons = () => {
    taskBlocksOrder.forEach((key, i) => {
        const nextKey = taskBlocksOrder[i + 1];
        const isNotEmptyPrevBlock = tasks[key].length;

        if (!nextKey) {
            return;
        }

        if (isNotEmptyPrevBlock) {
            addButtons[nextKey].disabled = false;
        } else {
            addButtons[nextKey].disabled = true;
        }
    });
};

export const countTasks = () => {
    const amountOfTasksBacklog = Array.from(document.querySelectorAll('[data-tasks-block="backlog"] p')).length;
    const amountOfTasksFinished = Array.from(document.querySelectorAll('[data-tasks-block="finished"] p')).length;
    const activeTasks = document.querySelector('.active-tasks');
    const finishedTasks = document.querySelector('.finished-tasks');
    activeTasks.innerHTML = `Backlog: ${amountOfTasksBacklog}`; 
    finishedTasks.innerHTML = `Finished: ${amountOfTasksFinished}`;
};

export const eventForFirstButton = () => {
    const input = document.createElement('input');
    input.classList.add('input-for-task');
    addButtons[taskBlocksOrder[0]].parentElement.insertBefore(input, addButtons[taskBlocksOrder[0]]);

    input.addEventListener('blur', ({ target: { value } }) => {
        if (!value) return;

        idCount++;

        tasks[taskBlocksOrder[0]].push({ id: idCount, title: value });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.remove();
        showTasks();
        pushButtons();
        countTasks();
    });
}; 

export const eventForOtherButtons = (key) => () => {
    const tasksDropdown = document.createElement('ul');
    tasksDropdown.classList.add('task-dropdown');
    const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
    const prevBlockName = taskBlocksOrder[blockOrder - 1];
    console.log(prevBlockName);

    tasksDropdown.addEventListener('click', ({ target }) => {
        const taskIndex = tasks[prevBlockName].findIndex(({ id }) => {
            return Number(id) === Number(target.value);
        });

    tasks[key] = [...tasks[key], ...tasks[prevBlockName].splice(taskIndex, 1)];
    tasksDropdown.remove();
    addButtons[key].disabled = false;
    showTasks();
    pushButtons();
    countTasks();
    });

    tasks[prevBlockName].forEach(({ title, id }) => {
        const dropdownItem = document.createElement('li');

        dropdownItem.className = 'dropdown-items';
        dropdownItem.innerText = title;
        dropdownItem.value = id;
        tasksDropdown.appendChild(dropdownItem);
    });

    addButtons[key].disabled = true;
    addButtons[key].parentElement.insertBefore(tasksDropdown, addButtons[key]);
};

export const createTask = () => {
    taskBlocksOrder.forEach((key, index) => {
        if (index === 0) {
            addButtons[key].addEventListener('click', eventForFirstButton); 
            countTasks(); 
        } else {
            addButtons[key].addEventListener('click', eventForOtherButtons(key));
        }
    });
};

showTasks();
pushButtons();
createTask();
