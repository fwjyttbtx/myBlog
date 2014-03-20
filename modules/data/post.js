/**
 * Created by Administrator on 14-3-19.
 */
var db = require('./db');

function Post(title, content, tags, time){
    this.id = new Date().getTime();
    this.title = title;
    this.content = content;
    this. tags = tags;
    if(time){
        this.time = time;
    }else{
        this.time = new Date();
    }
}

module.exports = Post;

Post.prototype.save = function(callback){
    var post = {
        id: this.id,
        title: this.title,
        content: this.content,
        tags: this.tags,
        time: this.time
    };
    db.query('INSERT INTO posts SET ?', post, function(err, result){
        if(err) {
            return callback(err);
        }
        return callback(null);
    });
};

Post.getOne = function(id, callback){
    db.query('SELECT title, content, tags, time FROM posts WHERE id = ?', [id], function(err, rows){
        if(err) callback(err);
        callback(err, rows[0]);
    })
}
