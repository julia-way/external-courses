import './footer.css'

class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="footer-container">
        <div class="footer-content">
            <p class="active-tasks">Active tasks: &lt;N&gt;</p>
            <p class="finished-tasks">Finished tasks: &lt;M&gt;</p>
            <p class="by">Kanban board by Uvaeva Yulia, 2020</p>
        </div>
    </div>
      `;
    }
}

customElements.define('footer-block', Footer);
