class LeftLogo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    .unite {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }
  
    .circle {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      border: 2px solid white;
      margin-top: 2px;
      margin-bottom: 2px;
      margin-right: 5px;
    }
  
    .line {
      width: 25px;
      height: 1.5px;
      background-color: white;
      margin-bottom: 3px;
      margin-top: 3px;
    }
  
    .circle-line {
      display: flex;
      align-items: center;
    }
  
    .kanban {
      font-size: 28px;
      color: white;
      margin-left: 20px;
      margin-right: auto;
    }  
    </style>
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
