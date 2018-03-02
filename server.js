var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    
    'article-one': {
        title: 'Article 1',
        heading: 'Article one',
        date: 'Mar 02, 2018' ,
        content: `<p> Responding to being slut-shamed for breastfeeding a baby on the cover of Malayalam magazine 'Grihalakshmi', Gilu Joseph said, "I haven't earned a single penny out of it...How is this a publicity [stunt] at all?" "People would...have no problem seeing graphic images of people getting killed...but cannot bear to see a woman bond with her child by feeding it," she added. </p>
        
        <p>Producer Harvey Weinstein's insurers have refused to pay in his defence of 11 lawsuits alleging sexual assault. Five insurance companies had asked a New York Supreme Court judge to absolve them of any obligation to assist the Hollywood producer.</p>
        
        <p>This is paragraph three </p>`
    },
    'article-two': {
         title: 'Article 2',
        heading: 'Article two',
        date: 'Mar 02, 2018' ,
        content: `
            <p>This is paragraph three: The official teaser of Rajinikanth starrer 'Kaala' has been released. The film also stars Nana Patekar, who will reportedly play the antagonist in the film, Huma Qureshi and Eswari Rao among others. Directed by Pa Ranjith and produced by Rajinikanth's son-in-law Dhanush, 'Kaala' is scheduled to release on April 27.</p>`
        
    }
    
};




function createTemplate(data) {
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
    
 var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
                
                <body>
                    <div class= "container">
                        <div>
                        <a href="/" >Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <hr/>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
                </body>
            </html> 
        `;
        return htmlTemplate;
}
        

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    //articleName = article-one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
})


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

/*app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
