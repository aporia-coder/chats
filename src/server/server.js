const dotenv = require('dotenv').config();
const = require('express');
const socket = require('socket.io');
const app = express();
const port = process.env.PORT || 3001;
app.listen(port => {
  console.log(`Connected to port ${port}`);
});



