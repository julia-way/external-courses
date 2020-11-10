const link = document.querySelector(".userMenu");

const elementUL = document.createElement("ul");
elementUL.classList.add("menuItems");

const item1 = document.createElement("li");
item1.innerHTML = "My account";
elementUL.appendChild(item1);
item1.classList.add("string");

const line1 = document.createElement("hr");
elementUL.appendChild(line1);

const item2 = document.createElement("li");
item2.innerHTML = "My tasks";
elementUL.appendChild(item2);
item2.classList.add("string");

const line2 = document.createElement("hr");
elementUL.appendChild(line2);

const item3 = document.createElement("li");
item3.innerHTML = "Log out";
elementUL.appendChild(item3);
item3.classList.add("string");

link.addEventListener("click", showAndHide);
function showAndHide() {
    link.classList.toggle("show");

    if (link.classList.contains("show")) {
        link.appendChild(elementUL);
    } else {
        elementUL.remove();
    }
};
