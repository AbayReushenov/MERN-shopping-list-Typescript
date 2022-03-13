#### Установка express + mongo на javascript
# https://www.digitalocean.com/community/tutorials/workflow-nodemon-ru
# sudo lsof -i :3000
# kill -9 <PID>
1. npm init
2. npx create-gitignore Node
3. npm install express --save
3. npm i dotenv
4. npm i --save-dev @types/express
5. npm install --save-dev nodemon 
6. npm install mongoose --save
# or using yarn: yarn add nodemon -D
# package.json :
#   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
   "type": "module",
   ...
5. npm run dev 
или 
6. npm start
8. npm i dotenv
