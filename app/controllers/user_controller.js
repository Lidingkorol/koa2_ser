/**
 * Created by Administrator on 2017/6/3.
 */

var mysql = require('mysql');
const { query } = require('../../init/index')
//获取用户
exports.getUser = async (ctx, next) => {
	var connection = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'admin',
	    database:'mysql'
	});
	
	connection.connect();
	//查询
	connection.query('select * from `test` where name = 1 ', function(err, rows, fields) {
	    if (err) throw err;
	    console.log(rows)
	});
	//关闭连接
	connection.end();
    ctx.body = {
    	
        username: 'asdasd',
        age: 30
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}