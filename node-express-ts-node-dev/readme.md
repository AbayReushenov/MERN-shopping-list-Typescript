### mongoose & typescript https://medium.com/swlh/typescript-with-mongoose-and-node-express-24073d51d2ee

1. npm init -y
2. npm install typescript --save-dev
3. npm install express body-parser --save
4. npx tsc --init
if you are having issues with this or this is throwing an error, install typescript globally like this:
5. npm install typescript -g
6. npm install @types/express --save-dev
7. package.json
 "scripts": {
    "start": "ts-node-dev src/index.ts"
  },
8. npm start
9. import { Router, Request, Response } from 'express';
10. npm install mongoose
11. npm install @types/mongoose --save-dev
