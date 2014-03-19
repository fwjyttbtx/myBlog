//创建数据库
/*模块的依赖*/
var mysql = require('mysql');
var config = require('./config');

/*初始化客户端*/
delete config.database;
var db = mysql.createConnection(config);

/*创建数据库*/
db.query("CREATE DATABASE IF NOT EXISTS myblog");
db.query("USE myblog");
/*创建表*/
db.query("DROP TABLE IF EXISTS posts");
db.query("CREATE TABLE posts(" +
    "id VARCHAR(255)," +
    "title VARCHAR(255)," +
    "content TEXT," +
    "tags VARCHAR(255)," +
    "time DATETIME," +
    "PRIMARY KEY (id))");

/*关闭客户端*/
db.end(function(){
    process.exit();
});/**
 * Created by Administrator on 14-3-19.
 */
