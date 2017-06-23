/**
 * Created by Administrator on 2017/6/3.
 */

var mysql = require('mysql');
const { query } = require('../../init/sql/index')
const cookies = require('../../init/cookie/cookie')



/*
// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        let parseData = parseQueryStr( postdata )
        resolve( parseData )
      })
    } catch ( err ) {
      reject(err)
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log( queryStrList )
  for (  let [ index, queryStr ] of queryStrList.entries()  ) {
    let itemList = queryStr.split('=')
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  return queryData
}
*/

/*
 * 
 *	接口
 * 
 */



//获取用户
exports.getUser = async (ctx, next) => {

    console.log(ctx.cookies.get('cid'))
	let dataList = await setData()

    ctx.body = {
        username: dataList,
        age: 30
    }

}



exports.registerUser = async (ctx, next) => {
    console.log(ctx.cookies.get('cid'))
	let postData = ctx.request.body

	let dataList = await selectAllData()
    ctx.body = postData
}




/*
 * 
 *	sql查询语句
 * 
 */



async function selectAllData( ) {
  	let sql = 'select * from `test` where name = 1 '
  	let dataList = await query( sql )
  	return dataList
}




async function setData( ) {
  	let sql = 'select * from `test` '
  	let dataList = await query( sql )
  	return dataList
}




