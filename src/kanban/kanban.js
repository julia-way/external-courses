const link = document.querySelector('#user-menu');

const elementUl = document.createElement('ul');
elementUl.classList.add('menu-items');

const item1 = document.createElement('li');
item1.innerHTML = 'My account';
elementUl.appendChild(item1);
item1.classList.add('string');

const line1 = document.createElement('hr');
elementUl.appendChild(line1);

const item2 = document.createElement('li');
item2.innerHTML = 'My tasks';
elementUl.appendChild(item2);
item2.classList.add('string');

const line2 = document.createElement('hr');
elementUl.appendChild(line2);

const item3 = document.createElement('li');
item3.innerHTML = 'Log out';
elementUl.appendChild(item3);
item3.classList.add('string');

function showMenu() {
    link.classList.add('show');
    link.appendChild(elementUl);
}

function hideMenu() {
    link.classList.remove('show');
    elementUl.remove();
}

document.addEventListener('click', (event) => {
    const isClickInsideLink = link.contains(event.target);
    const isClickInsideMenu = elementUl.contains(event.target);

    if (link.classList.contains('show') && !isClickInsideMenu || !isClickInsideLink) {
        hideMenu();
    } else {
        showMenu();
    }
});
