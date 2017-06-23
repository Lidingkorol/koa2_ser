/**
 * Created by Administrator on 2017/6/23.
 */
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')


// 配置存储session信息的mysql
let store = new MysqlSession({
    host     : '127.0.0.1',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'admin',   // 数据库密码
    database : 'mysql'  // 选中数据库
})


