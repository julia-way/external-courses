import './taskBlocks.css'
const imageDots = `<button class="points">•••</button>`

const button = `
<footer class="tasks-block__footer">
<button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
</footer>
`

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
              ${button}
          </div>
          <div class="tasks-block" data-tasks-block="ready">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Ready</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              ${button}
          </div>
          <div class="tasks-block" data-tasks-block="inProgress">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">In Progress</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              ${button}
          </div>
          <div class="tasks-block" data-tasks-block="finished">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Finished</h3>
                  ${imageDots}
              </header>
              <main class="tasks-block__tasks-container"></main>
              ${button}
          </div>
    </div>
    </div>
      `;
    }
}

customElements.define('task-blocks', TaskBlocks);
