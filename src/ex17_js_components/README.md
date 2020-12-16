# Практическая работа 17 - Компонентный подход

При сборке проекта используется Webpack для объединения js-модулей
Используется транспайлер Babel для поддержки обновленного JavaScript в браузерах

При необходимости установите node.js с официального сайта 
Скопируйте проект к себе в папку и установите зависимости с помощью команды npm install
Для запуска проекта на локальном сервере введите в терминале npm start

Структура файлов выглядит следующим образом:
dist
src
  footer-component
    footer.css
    footer.js
  leftLogo-component
    leftLogo.css
    leftLogo.js
  profile-component
    profile.css
    profile.js
    user.jpg
  taskBlocks-component
    taskBlocks.css
    taskBlocks.js
    three-dots.png
    three-dots.svg
  dropdown-menu.js
  kanban.css
  mock.js
  tasks-management.js  
.babelrc
index.html
package-lock.json
package.json
webpack.config.js,

где leftLogo.js, profile.js, taskBlocks.js, footer.js являются веб-компонентами
