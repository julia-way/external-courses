import userImage from "./user.jpg";
import './profile.css'

class Profile extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="profile">
          <div class="rectangle">
              <div class="plus"><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
              <a href="#" class="create">Create new list</a>
          </div>
          <div id="user-menu">
              <a href="#" class="link-for-menu">
                  <img class="user" src="${userImage}" alt="user">
                  <div class="down"><i class="fa fa-angle-down" aria-hidden="true"></i></div>
              </a>
          </div>
      </div>
      `; 
    }
}

customElements.define('profile-menu', Profile);
