/**
 * Created by Administrator on 14-3-19.
 */
var config = require('../../config');
var mysql = require('mysql');

module.exports = mysql.createConnection(config);