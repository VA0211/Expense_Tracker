const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const { runInThisContext } = require('vm')
const app = express()

require('dotenv').config()
const port = parseInt(process.env.PORT) || 5000;
// const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route))) 


const server = () =>{
    db()
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
      });
}

server()