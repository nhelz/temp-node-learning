const http = require('http');

//req = request, res = response
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is our short story');
    }
    console.log(req.url);
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that you're looking for.</p>
    <a href="/">back home</a>`);
})

server.listen(5000); //