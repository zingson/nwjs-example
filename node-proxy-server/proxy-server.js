/**
 * Created by songz on 2017/7/14.
 */
var http=require("http");
var url=require("url");
var server=http.createServer(function(sreq,sres){
    var url_parts=url.parse(sreq.url);
    console.log(url_parts.host+url_parts.path);
    var opts={
        host:url_parts.host,
        port:url_parts.port,
        path:url_parts.pathname,
        headers:sreq.headers
    };
    var creq=http.get(opts, function (cres) {
        sres.writeHead(cres.statusCode,cres.headers);
        cres.pipe(sres);
    });
    sreq.pipe(creq);
});
server.listen(801,"127.0.0.1", function () {
    console.log("开始监听"+server.address().port+"......");
});