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
            res.redirect('/blog/show/' + post.id);
        });
    });

    app.get('/blog/show/:postId', function(req, res){
        Post.getOne(req.params.postId, function(err, data){
            if(err) throw err;
            if(!data) return res.render(404);
            //处理下日期的格式
            data.year = data.time.getFullYear();
            var month = ['一月', '二月', '三月', '四月', '五月',
                '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            data.month = month[data.time.getMonth()];
            data.day = data.time.getDate();
            res.render('blog-show', { data: data });
        });
    });

}