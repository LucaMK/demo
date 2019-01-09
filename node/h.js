var http = require('http');

let t = Math.random()*10;
let data = {
  code: 0,
  msg: 'success',
  data: [{'a': t},{'a': t},{'a': t},{'a': t},{'a': t},]
}

var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.url == '/favicon.ico') {
      // console.log(req.url);
    return;}
  let user = (Math.random()*9999)+10000;
  console.log("欢迎用户", user);
  // if (req.url === "/list") {
  //   res.writeHead(200,{'content-type':' application/json;charset:utf-8'});
  //   res.end(JSON.stringify(data));
  // } else {
  //   res.end(" this is empty");
  // }
  res.writeHead(200,{'content-type':' application/json;charset:utf-8'});
  fs.readFile('./1.txt', { encoding: 'utf8'},(err,data) => {
    if (err) {
      throw err;
    }
    console.log("文件图区成功"+ user);
    res.end(data);
  })
})

server.listen(9000,"127.0.0.1");