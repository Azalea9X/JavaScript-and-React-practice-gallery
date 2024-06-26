import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs"; 
import fetch from "node-fetch";
import mysql from "mysql2";
import axios from "axios"; 
import bodyParser from "body-parser";
import {Router} from "express";
import { fileURLToPath } from 'url';
import expressSession from "express-session"; 
import GoogleStrategy from "passport-google-oauth20";
import passport from "passport"; 

import cookieParser from "cookie-parser"; 
const __filename = fileURLToPath(import.meta.url);
const credentialsPath = path.join(path.dirname(__filename), '.credentials.development.json');
async function loadSecretKey() {
  try {
    const credentialsData = await fs.promises.readFile(credentialsPath, 'utf8');
    const credentials = JSON.parse(credentialsData);
    return credentials.secretCookie;
  } catch (error) {
    console.error('Error loading secret key:', error);
    // Handle error appropriately (e.g., exit process)
  }
}
 

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}




const router = express.Router(); 

dotenv.config();

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password:  process.env.password,
  database: process.env.database,
  

}).promise();

import {createCats, updateCats, deleteCats,  createUsers, patchUserandEmail} from "./database.mjs"; 
import {query, body, validationResult} from "express-validator"; 
const app = express();
app.use(expressSession({
  secret: await loadSecretKey(),

  
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
    httpOnly: true,
    sameSite: true,
    secure: true,
  },
}))

let validators = [
 body("email").isEmail().withMessage("Email format is invalid"), 
 body("password").isLength({min:5}).withMessage("Enter at least 5 characters") 
]

const loggingMiddleware = (req, res, next) => 
  next(); 

app.use(loggingMiddleware);
const sql = async () => await pool.query("select * from cats"); 




app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

 // Set the views directory (assuming it's named 'views' in the project root)
app.set("views", path.join("views"));

// Set the view engine (e.g., EJS)
app.set("view engine", "ejs");

let users = [{"id": 1, "username": "Mike" }, {"id": 2, "username": "Sarah" }, {"id": 3, "username": "Adam" }, { "id": 4, "username": "Jake" }];


let newUser; 

const products = [
  { id: 1, label: "Chicken", Price: 99, Rating: 5 },
  { id: 2, label: "Eggs", Price: 33, Rating: 3 },
  { id: 3, label: "Salad", Price: 9, Rating: 3 },
];

// ... other code ... (unchanged)

app.get("", (req, res) => {
res.render("index");
})

app.get("/login", (req, res) => {
  res.render("login");
  
})
// Authentication Routes
app.post('/login', 
 
);

// Protected Routes
 

app.get("/cookie", async (req, res) => {
 await loadSecretKey();
res.cookie("userName", "Jake"); 
  res.cookie("age", "20");
  res.cookie("email", "Jake");
  res.cookie("password", "Jake");
  res.send("Works");
}

)

app.delete("/cookie", async (req, res) => {
 res.clearCookie("name"); 
 res.clearCookie("age"); 
 res.clearCookie("email"); 
res.clearCookie("password");
 
})
app.get("/api/hello", (req, res) => {
  res.write("<H1>FFF</h1>");
})
app.get("/api/cats", async (req, res) => {
const cats = await pool.query("select * from cats").then((result) => {
  
res.json(result[0]);

// To destructure this, you would const [rows], get the first item out of the variaable names. Write a function called get Notes


}).catch((err) => {
  console.error(err); 
})

})

app.get("/api/cats/:id", async (req, res) => {
  const id = req.params.id; 
  const cats = await pool.query("select * from cats where id = ?", [id]).then((result) => {
  
    res.json(result[0]);
    
    // To destructure this, you would const [rows], get the first item out of the variaable names. Write a function called get Notes
    
    
    }).catch((err) => {
      console.error(err); 
    })
});


app.patch("/api/cats/:id", async (req, res) => {
const id = req.params.id; 
const {label, breed, species} = req.body; 
updateCats(label, breed, species, id);

})




app.get("/api/cats/add", async (req, res) => {
  res.render("addCats")});

app.post("/api/cats", query("filter").isString().notEmpty(), async(req, res) => {
let label = req.body.label; let breed = req.body.breed; let species= req.body.species;
  const cats1 = createCats(label, breed, species); 
  res.json(cats1);
})
  
//Need a landing page for API users for the get request method. 

app.get("/api/users/add", async(req, res) => {
  res.render("addUsers");
})
  app.post("/api/users",validators, async(req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   let {username, email, password} = req.body;
   createUsers(username, email, password); 
   res.json({username, email});
  })

 

app.patch("/api/users/:id", (req, res) => {
  const id1 = req.params.id;
  patchUserandEmail("SSS", "DDD", id1);

})

  

 



  // ... other code 


// Start the server on the specified port from .env
app.listen(`${process.env.port}` || 443, () => {
  console.log("Server is running.");
});

//Note, the mysql instructions come from Sam Meech-Ward. 
/*Dotenv files lets us hard code values and hide info from people. He's going to hard code each of them. 

Now we need to set them somewhere. The most common place to set them is a .env file.   

We are going to use ? for a prepared statements for the MYSQL. Since a select statement always returns an array, we are going to get an array. We want to return the first object out of that array. 

What happens, if we put something that doesn't exist, we will get undefined. insertID is what the ID that we inserted. If we added to the database, we would see a new one. This might be fine. We can potentially return an object here. If we run it again it looks like the object comes out of the database. You can run that query against which note that it is in the ID. I am not going to make a separate file with the database code. Using the express server, he's going to make the server call an error in case he isn't connected to the database. 

*/

/*Helpful links

https://stackoverflow.com/questions/63989459/express-json-not-parsing-post-body-undefined

Back to Anson's tutorial. The middleware that we are going to use is built into express, and, it's this JSON method. 

app.use(express.json()). Let's say that you're trying to parse text, raw data. Let's see what happens when you pass the request in. In the console, it is logging that request body that we are sending through the express server. 

app.use(bodyParser.urlencoded({ extended: true }))

Right now, Anson doesn't have a real database. In the next section, he will show us how to validate a request body. We need to attach the ID to the request body. The DB will be responsible for generating those IDs. 

Anson is going to destructure the request body, using the const {body} = request; 

He's going to reference mockUsers.push(users). We do get back users, he wants to make sure that we get the response status method. I strongly disagree with him that you don't need to use all of them. You need to know PUT, PATCH and DELETE methods. They are technically different. Let's say that you want to update some data on the back-end. We would do that with the PATCH request. It updates a partial field of that entire user, instead of updating everything, you're not updating username and that. With PUT, you're not just editing a partial thing, you're doing every single request. 

With Patch, you don't include anything that you're not trying to update. Delete is used to delete records from the database, if you're deleting a user, product, order, etc. 

I think he's being super lazy with his destructuring, don't like it 

LMAO dude is makng so much work for himself, would be much easier to just do this with a database... 

It can be a nuisance to send all of those fields at one time, that's where PATCH comes in. Patch amkes more sense for specific purposes. 

What we are doing here is destructuring everything all from the request object. With a PUT request, everything will be overwritten, with a PATCH request, if you set displayName, we can only set displayName. I don't really think he's correct? He says that put is for the entire record, and patch is for a partial record. 

DELETE METHOD
Anson has never used the connect method, or others. Anson is going to teach us about middleware. In the main sense, it means one thing, it's a middle process between one and many different functions. It's just a function that has logic, is a request handler as well. You can use middleware funtion to use a response if you want to. 

const loggingMiddleWare = (req, res) => {
  console.log(req.method, req.url);
  next();

  }
In order to use the middleware, we can invoke the function right inside the route, or, we can use a specific input. We can write app.use(loggingMiddleware), like so. It'll now say the request type, and, the URL. If we go to api/users, it'll log that. If we make any request to use it, we could do that. If we only want it to certain middleware, we can pass it as an argument for that middleware. 

app.use("/api/users", loggingMiddleware);

You don't have the next function if you don't call it, in this middleware, you can control the request, and response if you need to. If you combine the request, response, next, if any middleware doesn't have authentication you'll want to go to the next one. If you don't call next() it'll be in an endless loop. 

You need to use the app.use() method before you use your API calls, if you don't use it at the right order, it will not be recognized. Order matters. Any app.use() methods, you can pass in as many middlewares as you want. First it logs the first thing, and then it logs the next one. We call the next() function, the request and response handler is a middleware, but, if you don't have any middlewares to add, then, it doesn't make sense to add it to the function middleware. 

What he's going to do is to create a function called handleUserID, or, resolveUserByID, since it is a middleware, it's a request handler. We want to use this middleware right before this request handler, the purpose of this is to grab that user index, and we want to have the next middleware. We need to pass it somehow. What you can do is to attach properties to the request object, so, we can say req.findUserIndex = findUserIndex;, then, in the next index, they will have access to this. 

app.use((req, res, next) => {
  req.findUserIndex = findUserIndex;
  next();
});

Next expects an error object or null, if we say new Error(), it will assume everything is successful. We reference the request body at the final request Handler function. What he's going to do is use it for the PUT request, he's going to pass it as an argument before the request and response, since we have all that logic, we can delete all the other stuff. We will still need the request body, but, we don't need the request params. 





*/