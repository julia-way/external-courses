import "./kanban.css";
import "./leftLogo.js"; 
import "./profile.js"; 
import "./taskBlocks.js";
import "./footer.js"; 
import "./kanban.js"; 
import { initialData } from "./mock.js"

const tasks = initialData;
let idCount = +localStorage.getItem("id-count");

const blocks = {
  backlog: document.querySelector('[data-tasks-block=backlog] .tasks-block__tasks-container'),
  ready: document.querySelector('[data-tasks-block=ready] .tasks-block__tasks-container'),
  inProgress: document.querySelector('[data-tasks-block=inProgress] .tasks-block__tasks-container'),
  finished: document.querySelector('[data-tasks-block=finished] .tasks-block__tasks-container'),
};

const addButtons = {
  backlog: document.querySelector('[data-tasks-block=backlog] > .tasks-block__footer > .tasks-block__add-task-button'),
  ready: document.querySelector('[data-tasks-block=ready] > .tasks-block__footer > .tasks-block__add-task-button'),
  inProgress: document.querySelector('[data-tasks-block=inProgress] > .tasks-block__footer > .tasks-block__add-task-button'),
  finished: document.querySelector('[data-tasks-block=finished] > .tasks-block__footer > .tasks-block__add-task-button'),
};

const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];

const showTasks = () => {
  localStorage.setItem("id-count", `${idCount}`);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  Object.keys(tasks).forEach(key => {
    blocks[key].innerHTML = '';
    tasks[key].forEach(task => {
      const taskElem = document.createElement('p');
      taskElem.innerText = task.title;
      taskElem.className = 'task';
      blocks[key].appendChild(taskElem);
    });
  });
};

const pushButtons = () => {
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

const createTaskForBacklog = (key) => {
  addButtons[key].addEventListener('click', () => {
    const input = document.createElement('input');
    input.classList.add('input-for-task');
    addButtons[key].parentElement.insertBefore(input, addButtons[key]);

    input.addEventListener('blur', ({ target: { value } }) => {
      if (!value) return;

      idCount++;

      tasks[key].push({ id: idCount, title: value });
      input.remove();
      showTasks();
      pushButtons();
    });
  });
};

const createTask = () => {
  taskBlocksOrder.forEach(key => {
    if (key === 'backlog') {
      createTaskForBacklog(key);
    } else {
      addButtons[key].addEventListener('click', () => {
        const tasksDropdown = document.createElement('ul');
        tasksDropdown.classList.add('task-dropdown');
        const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
        const prevBlockName = taskBlocksOrder[blockOrder - 1];

        tasksDropdown.addEventListener('click', ({ target }) => {
          const taskIndex = tasks[prevBlockName].findIndex(({ id }) => {
            return Number(id) === Number(target.value);
          });

          tasks[key] = [...tasks[key], ...tasks[prevBlockName].splice(taskIndex, 1)];
          tasksDropdown.remove();
          addButtons[key].disabled = false;
          showTasks();
          pushButtons();
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
      });
    }
  });
};

showTasks();
pushButtons();
createTask();

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("id-count", "15");
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
