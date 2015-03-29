var express = require('express');
var hbs = require('hbs');

var app = express();
var blogEngine = require('./blog');

app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(express.static('./resource'));

app.get('/', function(req, res){
    res.render('index',{
        title: '最近文章',
        entries: blogEngine.getBlogEntries()
    });
});

app.get('/about', function(req, res){
    res.render('about', {
        title: '自我介绍'
    });
});

app.get('/artical/:id', function(req, res){
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('artical',{
        title: entry.title,
        blog: entry
    });
});

app.listen(3000, function(){
    console.log('listening at port 3000 ...');
});