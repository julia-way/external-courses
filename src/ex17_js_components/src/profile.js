import userImage from "./user.jpg";

class Profile extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <style>
      .profile {
        display: flex;
        align-items: center;
      }

      .rectangle {
        width: 181px;
        height: 33px;
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        margin-left: 450px;
      }

      .plus {
        font-size: 30px;
      }
    
      .create {
        font-size: 18px;
        color: black;
        margin-left: 15px;
        text-decoration: none;
      }
      
      .link-for-menu {
        display: flex;
        align-items: center;
      } 
   
      .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .down {
        margin-left: 10px;
        font-size: 20px;
        color: white;
        margin-right: 20px;
      }

      .show .down {
        transform: rotate(180deg);
      }
    
      .menu-items {
        background: #0067A3;
        width: auto;
        height: auto;
        position: absolute;
        padding: 15px;
        right: 10px;
        top: 57px;
        border-radius: 10%;
        z-index: 1;
      }
    
      .string {
        list-style-type: none;
      }  
 
      .menu-items .string {
        padding: 5px;
        font-family: "Roboto";
        font-size: 15px;
        color: white;
        text-align: center;
      }
    
      .horizontal-line {
        color: white;
        margin: 0;
      }

      .up {
        margin-left: 10px;
        font-size: 20px;
        color: white;
        margin-right: 20px;
      }
    
      .menu-items .string:hover {
        background: rgb(180, 199, 211);
        cursor: pointer;
      }
      </style>
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
