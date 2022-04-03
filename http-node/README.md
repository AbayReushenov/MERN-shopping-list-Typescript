# Установка Typescript в проекте nodejs

# npm install -D ts-node
# npm install -D typescript
# npm install -D tslib @types/node
# npm install --save-dev nodemon ("или" npm install -D nodemon)
# npm init -y
# Иногда требуется: sudo apt install node-typescript
# tsc --init

# npm install --save-dev @types/express
# npm install --save-dev express

### Запуск компилятора
# tsc --w
### Запуск сервера nodemon
# npm start
### Отправляем с POSTMAN
http://localhost:3000/5846854
# Получаем 
Сервер работает на порту 3000
{
  'user-agent': 'PostmanRuntime/7.29.0',
  accept: '*/*',
  'postman-token': 'f02f9411-0eba-4382-8c4f-4716257f3d82',
  host: 'localhost:3000',
  'accept-encoding': 'gzip, deflate, br',
  connection: 'keep-alive',
  'content-length': '0'
} /5846854 POST

# Не забыть gitignore
# npx create-gitignore Node
