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

    });

}