class Footer extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({mode: 'open'});
      shadow.innerHTML = `
      <style>
      .footer-container {
        width: 100%;
        height: 55px;
        background-color: #0067A3;
        display: flex;
        flex-shrink: 0;
      }

      .footer-content {
        width: 100%;
        display: flex;
        color: white;
        white-space: nowrap;
        font-family: "Roboto";
        font-size: 18px;
        margin-left: 67px;
        margin-right: 24px;
        align-items: center;
      }

      .finished-tasks {
        margin-left: 36px;
      }
    
      .by {
        margin-left: auto;
      }

      .active-tasks,
      .finished-tasks,
      .by {
        font-family: "Roboto";
        font-size: 18px;
        text-align: left;
        padding: 8px;
        font-weight: normal;
    }
      </style>
      <div class="footer-container">
        <div class="footer-content">
            <p class="active-tasks">Active tasks: &lt;N&gt;</p>
            <p class="finished-tasks">Finished tasks: &lt;M&gt;</p>
            <p class="by">Kanban board by &lt;NAME&gt;,&lt;YEAR&gt;</p>
        </div>
    </div>
      `;
    }
}

customElements.define('footer-block', Footer);
