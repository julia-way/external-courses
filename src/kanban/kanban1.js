const tasksString = localStorage.getItem("tasks");
const tasks = JSON.parse(tasksString);
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

const renderTasks = () => {
  localStorage.setItem("id-count", `${idCount}`);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(blocks);

  Object.keys(tasks).forEach(key => {
    console.log({ key });
    blocks[key].innerHTML = '';
    tasks[key].forEach(task => {
      const taskElem = document.createElement('p');
      taskElem.innerText = task.title;
      taskElem.className = 'task';
      blocks[key].appendChild(taskElem);
    })
  })

  taskBlocksOrder.forEach((key, i) => {
    const nextKey = taskBlocksOrder[i + 1];

    if (!nextKey) {
      return;
    }

    if (tasks[key].length) {
      addButtons[nextKey].disabled = false;
    } else {
      addButtons[nextKey].disabled = true;
    }
  })
}

taskBlocksOrder.forEach(key => {
  if (key === 'backlog') {
    addButtons[key].addEventListener('click', () => {
      const input = document.createElement('input');
      addButtons[key].parentElement.insertBefore(input, addButtons[key]);

      input.addEventListener('blur', ({ target: { value } }) => {
        if (!value) return;

        idCount++;

        tasks[key].push({ id: idCount, title: value })
        input.remove();
        renderTasks();
      })
    })

    return;
  }

  addButtons[key].addEventListener('click', () => {
    const ul = document.createElement('ul');
    const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
    const prevBlockName = taskBlocksOrder[blockOrder - 1];

    ul.addEventListener('click', ({ target }) => {
      const taskIndex = tasks[prevBlockName].findIndex(({ id }) => {
        console.log({ id, value: target.value });

        return +id === +target.value;
      })

      console.log({ taskIndex, sliceResult: tasks[prevBlockName].slice(taskIndex, 1) })

      tasks[key] = [...tasks[key], ...tasks[prevBlockName].splice(taskIndex, 1)];
      ul.remove();
      addButtons[key].disabled = false;

      renderTasks();
    })

    tasks[prevBlockName].forEach(({ title, id }) => {
      const li = document.createElement('li');
      li.className = "dropdown-items";
      li.innerText = title;
      li.value = id;
      ul.appendChild(li);
    });

    addButtons[key].disabled = true;
    addButtons[key].parentElement.insertBefore(ul, addButtons[key]);
  })

})

renderTasks();
