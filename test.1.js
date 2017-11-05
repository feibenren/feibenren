//通过127.0.0.1:3000/1.jpg,可以看到test目录下面的图片
var http = require('http');
var process = require('process');
var path = require('path');
var fs = require('fs');
var args = process.argv.slice(2);
var server = http.createServer(function (request, response) {
    request.setEncoding('utf-8');
    var file = path.join(__dirname, 'test', request.url);
    fs.stat(file, function (err, stat) {
        if (err) {
            console.log(err);
            response.end('报错了');
        }
        if (stat &&stat.isFile()) {
            var stream = fs.createReadStream(file);
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            var res = fs.readFileSync(file);
            response.end(res);
            response.on('end', function () {
                console.log('传输完成');
            })
        } else {
            response.writeHead('404',{"Content-Type":"text/plain"});
            response.write('查找文件不存在');
            response.end();
        }
    });


    request.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    response.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

});

var host = (typeof args[0] != "undefined") ? args[0] : '127.0.0.1';
var port = (typeof args[1] != "undefined") ? args[1] : 3000;

server.listen(port, host, function () {
    console.log(`server start at http://${host}:${port}`);
});