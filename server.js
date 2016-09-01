var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/home', (req, res) => {
  res.send('<h1>~`~Home Home Home ``~~</h1>');
})

app.all('*', (req, res) => {
   res.send('\
     <!DOCTYPE html>\
     <html>\
      <head>\
        <title> MEAN todo title </title>\
        <base href="/">\
      </head>\
      <body>\
        <div ui-view></div>\
        <script src="bundle.js"></script>\
      </body>\
     </html>\
   ');
});


app.listen(PORT, () => {
  console.log('Server listening on ' + PORT);
});
