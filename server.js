var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var a1= {
    title: 'Article 1',
    heading: 'Article one',
    date: 'Mar 02, 2018' ,
    
    content: " <p> This is paragraph on </p>  <p>This is paragraph two</p>  <p>This is paragraph three: The official teaser of Rajinikanth starrer 'Kaala' has been released. The film also stars Nana Patekar, who will reportedly play the antagonist in the film, Huma Qureshi and Eswari Rao among others. Directed by Pa Ranjith and produced by Rajinikanth's son-in-law Dhanush, 'Kaala' is scheduled to release on April 27.</p> "
}


var htmlTemplate: '

<html>
    
    <head>
        
        <title>
        Article 1
    </title>
     <meta name="viewport" content="width-device-width, initial-scale=0" />
     
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    
    <body>
        
        <div class= "container">
            <div>
            <a href="/" >Home</a>
        </div>
        
        <hr/>
        
        <h3>
            Article One
        </h3>
        
        <hr/>
        
        <div>
            2-03-2018
        </div>
        
        <div>
            $ content[]
        </div>
    </div>
        
    </body>

</html>


'




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
})

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
})

app.get('/article-three', function(req, res){
    res.send('Article 3 is requested and is sent to the browser');
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
