const express = require('express');

const userroute = require('./pages/routes/Userroute')
const vehicleroute = require('./pages/routes/Vehicleroute')
var bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const connectdb = require('./db')
const cors = require('cors');


const path = require('path')




connectdb()
const app = express();
// app.use(express.json())


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});


app.use('/user', userroute);
app.use('/vehicle',vehicleroute);
const PORT = process.env.PORT || 5000;
// Server Setup
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));
