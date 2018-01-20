const express = require('express');
const bodyParser = require('body-parser');
const galleryRouter = require('./routes/gallery.router');

const app = express();
let port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// routes
app.use('/gallery', galleryRouter);

app.listen(port, function () {
    console.log('On Port: ', port);
});