var http = require('http')
var fs = require('fs')

const proxy = http.createServer(function (req, res) {
	res.setHeader("Content-type", "application/json");
	/*res.writeHead(200, {
		'content-type': ''
	})*/
	if (req.url === '/') {
		res.end('hello world')
	}
	if (req.url === '/script.js') {
		res.writeHead(200, {
			'Content-Type': 'text/javascript',
			'Cache-Control': 'max-age=200'
		})
		res.end('console.log("我是服务器返回的")')
	}
})
proxy.listen(8888)

console.log('server listen on 8888')