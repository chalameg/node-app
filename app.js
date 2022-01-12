const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//wrapper for mysql2
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    "host":"127.0.0.1",
    "user":"root",
    "password":"",
    "database":"jogapp",
  }
})

const users = require('./routes/users')(knex)

app.use(bodyParser.json({extended:true}))

app.get('/', (req,res) => {
  res.send('Welcome, app is running...' )
})

app.use('/users', users)

app.listen(3000, err=>{
  if (err) {
    console.log('something went wrong!')
  } else {
    console.log('App listening on port 3000')
  }
})