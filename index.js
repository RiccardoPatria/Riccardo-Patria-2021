const express = require('express');
const app = express();
const port = 3000;//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
//new configuration parameter
extname: 'hbs'
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});
app.listen(port, () => console.log(`App listening to port ${port}`));

app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
defaultLayout: 'planB',
//new configuration parameter
partialsDir: __dirname + '/views/partials/'
}));
app.get('/', (req, res) => {
//Using the index.hbs file instead of planB
res.render('main', {layout: 'index'});});


//I would like to use a real api but let's use this for the sake of //the simplicity of the article
 const fakeApi = () => 'Faker';

app.get('/', (req, res) => {
res.render('main', {layout: 'index', proPlayer: fakeApi()});
});