# Установка express + mongo на javascript
1. npm init
2. npx create-gitignore Node
3. npm install express --save
4. npm i --save-dev @types/express
5. npm i dotenv
6. npm install --save-dev nodemon 
7. npm install mongoose --save
8. добавит в package.json :
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
   "type": "module",
   ...
9. npm run dev 
или npm start

10. Туториал: https://www.digitalocean.com/community/tutorials/workflow-nodemon-ru
11. Проблемы с портами: 1. sudo lsof -i :3000 2. kill -9 <PID>
