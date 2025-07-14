const express = require ('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');

mongoose.connect('mongodb://localhost:27017/yelpcamp', {

});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
