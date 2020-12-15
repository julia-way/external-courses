import './leftLogo.css'

class LeftLogo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <div class="unite">
    <div class="circle-line">
        <div class="circle"></div>
        <div class="line"></div>
    </div>
    <div class="circle-line">
        <div class="circle"></div>
        <div class="line"></div>
    </div>
    <div class="circle-line">
        <div class="circle"></div>
        <div class="line"></div>
    </div>
    </div>
    <p class="kanban">Awesome Kanban Board</p>
    `;   
    }
}

customElements.define('left-logo', LeftLogo);
