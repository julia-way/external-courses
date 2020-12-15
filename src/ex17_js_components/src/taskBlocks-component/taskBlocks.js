import dots from './three-dots.svg';
import dotsPng from './three-dots.png';
import './taskBlocks.css'
const imageDots = `
<object class="points" type="image/svg+xml" data="${dots}" width="32" height="22">
    <img src="${dotsPng}" width="32" height="22" alt="dots">
</object>`

class TaskBlocks extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="root">
      <div class="board">
          <div class="tasks-block" data-tasks-block="backlog">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Backlog</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
          <div class="tasks-block" data-tasks-block="ready">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Ready</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
          <div class="tasks-block" data-tasks-block="inProgress">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">In Progress</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
          <div class="tasks-block" data-tasks-block="finished">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Finished</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
    </div>
    </div>
      `;
    }
}

customElements.define('task-blocks', TaskBlocks);
