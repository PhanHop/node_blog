const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const db = require('./config/db');
const route = require('./routes');



var str ='pHan?/. vAN  ho*p';
var str2 = str.toLocaleLowerCase()
var str3 = str2.replace(/\W/g, ' ');
var s = str3[0].toLowerCase();
for(let i = 1; i < str3.length; i++){
  if(str3.at(i-1) == ' '){
    s+=str3.at(i).toUpperCase();
  }
  else{
    s+=str3.at(i);
  }
}
const s1 = s.replace(/\W/g,'')
console.log(s1);
db.connect();
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));
app.engine('hbs',handlebars.engine({extname: '.hbs'}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})