var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article={
    'article-one':{
    title:'Article One | Lal George',
    heading :'Article One',
    date:'Sep 20,2017',
    content:`<p>
                The example companies, organizations, products, domain names, email addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, place, or event is intended or should be inferred.
                    </p>
                    <p>
                This book expresses the author's views and opinions. The information contained in this book is provided without any express, statutory, or implied warranties. Neither the authors, Microsoft Corporation, nor its resellers, or distributors will be held liable for any damages caused or alleged to be caused either directly or indirectly by this book.
                    </p>
                    <p>
                If you are new to ASP.NET Web Forms but have familiarity with programming concepts, you have the right tutorial. If you are already familiar with ASP.NET Web Forms, you can benefit from this tutorial series by the new features available in ASP.NET 4.5. If you are unfamiliar with programming concepts and ASP.NET Web Forms, see the additional tutorials provided in the Web Forms Getting Started section on the ASP.NET Web site.
                </p>`
    },
    'article-two':{
    title:'Article Two | Lal George',
    heading :'Article Two',
    date:'Sep 25,2017',
    content:`<p>
                The example companies, organizations, products, domain names, email addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, place, or event is intended or should be inferred.
            </p>
            <p>
                This book expresses the author's views and opinions. The information contained in this book is provided without any express, statutory, or implied warranties. Neither the authors, Microsoft Corporation, nor its resellers, or distributors will be held liable for any damages caused or alleged to be caused either directly or indirectly by this book.
            </p>`
    },
    'article-three':{
    title:'Article Three | Lal George',
    heading :'Article Three',
    date:'Sep 30,2017',
    content:`<p>
              The example companies, organizations, products, domain names, email addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, place, or event is intended or should be inferred.
              </p>
              <p>
              If you are new to ASP.NET Web Forms but have familiarity with programming concepts, you have the right tutorial. If you are already familiar with ASP.NET Web Forms, you can benefit from this tutorial series by the new features available in ASP.NET 4.5. If you are unfamiliar with programming concepts and ASP.NET Web Forms, see the additional tutorials provided in the Web Forms Getting Started section on the ASP.NET Web site.
              </p>`
    },
};
function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate =`<html>
    <head>
        <title> ${title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class= "container">
            <div><a href="/"> Home</a></div>
            <hr/>
            <h3> ${heading} </h3>
            <div>${date}    </div>
            <div>${content} </div>
        </div>
    </body>
    </html>`;
    return htmlTemplate;
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleNmae = req.params.articleName;
   res.send(createTemplate(article[articleName]));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
