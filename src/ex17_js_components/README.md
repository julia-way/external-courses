# Практическая работа 17 - Компонентный подход

При сборке проекта используется Webpack для объединения js-модулей
Используется транспайлер Babel для поддержки обновленного JavaScript в браузерах

При необходимости установите node.js с официального сайта 
Скопируйте проект к себе в папку и установите зависимости с помощью команды npm install
Для запуска проекта на локальном сервере введите в терминале npm start

Структура файлов выглядит следующим образом:
dist
src
  footer.js
  kanban.css
  kanban.js
  leftLogo.js
  mock.js
  profile.js
  taskBlocks.js
  tasks-management.js
  three-dots.png
  three-dots.svg
  user.jpg
.babelrc
index.html
package-lock.json
package.json
webpack.config.js,

где leftLogo.js, profile.js, taskBlocks.js, footer.js являются веб-компонентами
