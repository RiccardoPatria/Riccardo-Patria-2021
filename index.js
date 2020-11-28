const express = require('express');
const app = express();
const port = 1234;
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');


app.use(express.static('public'))
  

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
    }));
    
    

fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
  }

  app.get('/', (req, res) => {
  res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
  });


app.get("/saluta", (req, res) => {
  const query = req.query
  const headers = req.headers
  const messaggioSaluto = "Ciao " + query.name + ", " + query.cognome  + ". <br/> Hai " + query.anni + "anni"
  res.send(messaggioSaluto)
})

app.get("/informazioni", (req, res) => {
  const headers = req.headers
  const informazioni = "Il tuo user agent è: " + headers["user-agent"]
  const ip = "Il tuo ip è:" + req.headers['x-forwarded-for']
  res.send(informazioni + "<br/>" + ip)
})


app.listen(port, () => console.log(`App listening to port ${port}`));