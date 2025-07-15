const express = require ('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const Campground = require('./models/campground');

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
app.get('/make_campgrounds', async (req, res) => {
    const camp = new Campground({
        name: 'Granite Hill',
        image: 'https://source.unsplash.com/collection/483251',
        description: 'A huge granite hill, no bathrooms. No water. Beautiful granite!',
    });
    await camp.save();
    res.send(camp);
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
