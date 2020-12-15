import dots from './three-dots.svg';
import dotsPng from './three-dots.png';

class TaskBlocks extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <style>
      .tasks-block {
        padding: 12px 0px 8px 12px;
        width: 280px;
        margin: 0 40px 20px 0;
        background: #EBECF0;
        border-radius: 10px;
        display: table;
        position: relative;
      }

      .tasks-block__title {
        margin-block-start: 0px;
        margin-block-end: 0px;
      }

      .board {
        margin: 20px;
        position: absolute;
        display: flex;
        z-index: 0;
        justify-content: space-between;
        width: 100%;
      }

      .task,
      .tasks-block__title {
        font-family: "Roboto";
        font-size: 18px;
        text-align: left;
        padding: 8px;
        font-weight: normal;
      }

      .task {
        background: white;
        background-attachment: fixed;
        border-radius: 5px;
        margin-bottom: 0px;
        white-space: wrap;
        word-break: break-all;
        margin-right: 12px;
      }

      .input-for-task {
        margin-top: 20px;
        font-family: "Roboto";
        font-size: 18px;
        padding: 8px;
        background: white;
        background-attachment: fixed;
        border-radius: 5px;
        margin-bottom: 0px;
      }

      .tasks-block__add-task-button {
        border: none;
        font-family: "Roboto";
        font-size: 18px;
        color: #5E6C84;
        background: none;
        margin-top: 10px;
      }

      .tasks-block__add-task-button:disabled {
        color: silver;
      }

      .points {
        margin-bottom: 5px;
      }

      .tasks-block__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: -10px;
        margin-right: 12px;
      }

      .tasks-block__add-task-button:enabled:hover {
        opacity: 0.5;
        cursor: pointer;
      }

      .tasks-block__add-task-button:active {
        opacity: 0.8;
      }

      .task-dropdown {
        background-color: rgba(0%, 47%, 75%, 0.5);
        border-radius: 5px;
        padding-right: 0px;
        text-align: center;
        padding-inline-start: 0px;
        margin-right: 12px;
      }

      .dropdown-items {
        list-style-type: none;
        font-family: "Roboto";
        font-size: 18px;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        color: white;
        border-top: 1px solid white;
      }

      .dropdown-items:hover {
        background-color: silver;
      }

      .task-dropdown .dropdown-items:first-child {
        border-top: none;
      }

      .add-card {
        font-size: 22px;
        font-weight: bold;
      }

      .tasks-block__tasks-container {
        position: relative;
        overflow-y: auto;
        max-height: 65vh;
      }
      </style>
      <div class="root">
      <div class="board">
          <div class="tasks-block" data-tasks-block="backlog">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Backlog</h3>
                  <object class="points" type="image/svg+xml" data="${dots}" width="32" height="22">
                      <img src="${dotsPng}" width="32" height="22" alt="dots">
                  </object>
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
          <div class="tasks-block" data-tasks-block="ready">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Ready</h3>
                  <object class="points" type="image/svg+xml" data="${dots}" width="32" height="22">
                      <img src="${dotsPng}" width="32" height="22" alt="dots">
                  </object>
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
          <div class="tasks-block" data-tasks-block="inProgress">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">In Progress</h3>
                  <object class="points" type="image/svg+xml" data="${dots}" width="32" height="22">
                      <img src="${dotsPng}" width="32" height="22" alt="dots">
                  </object>
              </header>
              <main class="tasks-block__tasks-container"></main>
              <footer class="tasks-block__footer">
                  <button class="tasks-block__add-task-button"><span class="add-card">+</span> Add card</button>
              </footer>
          </div>
          <div class="tasks-block" data-tasks-block="finished">
              <header class="tasks-block__header">
                  <h3 class="tasks-block__title">Finished</h3>
                  <object class="points" type="image/svg+xml" data="${dots}" width="32" height="22">
                      <img src="${dotsPng}" width="32" height="22" alt="dots">
                  </object>
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
