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
  }
5. npm run dev 
или 
6. npm start
8. npm i dotenv
9.  sudo systemctl restart mongod
или посмотри в заметках Google Keep (mongo)
10. STOP
- sudo systemctl stop mongod
11. 

## https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Start MongoDB.
You can start the mongod process by issuing the following command:

sudo systemctl start mongod

If you receive an error similar to the following when starting mongod:

Failed to start mongod.service: Unit mongod.service not found.

Run the following command first:

sudo systemctl daemon-reload

Then run the start command above again.

2
Verify that MongoDB has started successfully.
sudo systemctl status mongod

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

sudo systemctl enable mongod

3
Stop MongoDB.
As needed, you can stop the mongod process by issuing the following command:

sudo systemctl stop mongod

4
Restart MongoDB.
You can restart the mongod process by issuing the following command:

sudo systemctl restart mongod

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.

5
Begin using MongoDB.
Start a mongosh session on the same host machine as the mongod. You can run mongosh without any command-line options to connect to a mongod that is running on your localhost with default port 27017.

mongosh
