var Post = require('../modules/data/post');

module.exports = function(app){
    app.get('/', function(req, res){
        console.log(req.params.code);
        res.render('index', { title: 'Entize\'s Blog' });
    });

    app.get('/admin/:code', function(req, res){
        console.log(req.params.code);
        res.render('index', { title: 'Entize\'s Blog', secret: req.params.code });
    });

    app.get('/blog/write', function(req, res){
        res.render('blog-write', { title: 'Blog Write' });
    });

    app.post('/blog/publish', function(req, res){
        //console.log(req);
        var data = req.body;
        var post = new Post(data.title, data.content, data.tags, data.time);
        post.save(function(err){
            if(err) return res.redirect('/');
            console.log('发表成功');
        });
    });

}