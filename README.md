# Notes-By-Nerds
Mini project on providing online platform to sell, lend or donate old class notes &amp; textbooks using MEAN stack technology.

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2+](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment

# Run
Run the following command in both the sub directories ([FrontEnd](https://github.com/nikhil-amin/Notes-By-Nerds/tree/master/FrontEnd), [BackEnd](https://github.com/nikhil-amin/Notes-By-Nerds/tree/master/BackEnd))

> `npm install`

Next run the following command from the [FrontEnd](https://github.com/nikhil-amin/Notes-By-Nerds/tree/master/FrontEnd) folder to start the Angular application.

> `ng serve`

Now run the following command from the [BackEnd](https://github.com/nikhil-amin/Notes-By-Nerds/tree/master/BackEnd) folder to start the Node app and the Backend.

> `npm start`

Now open your browser and go to http://127.0.0.1:4200 

## Please open an issue if
* you have any suggestion to improve this project
* you noticed any problem or error

## .env File for Backend format
Create a `.env` file and paste the following content in backend Folder and change the username and password as required
```code
PORT = 3000

MONGO_ONLINE_URL = mongodb://<username>:<password>147233.mlab.com:47233/notesbynerdsdb

MONGO_LOCAL_URL = mongodb://127.0.0.1:27017/notesbynerdsdb

BASE_URL_FRONTEND_1 = http://localhost:4200

BASE_URL_FRONTEND_2 = http://127.0.0.1:4200
```

### Author
* [Nikhil Amin](https://github.com/nikhil-amin)
