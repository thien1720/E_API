const express = require('express')
const app = express()

const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3001

const route = require('./routers')
const connectDB = require('./config/dbConfigConect')
connectDB()


// HTTP logger
app.use(morgan('combined'))
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// Router init
route(app)


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))