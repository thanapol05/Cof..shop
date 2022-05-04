const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT||3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout','./layouts/menu');
app.set('view engine','ejs')

const routes = require('./server/routes/recipeRouter.js')
app.use('/', routes)

app.get("/howto",(req,res) =>{
    res.render('./layouts/Howto')
})
app.get("/menu",(req,res) =>{
    res.render('./layouts/menu')
})
app.listen(port,() =>console.log(`Listening to port ${port}`));