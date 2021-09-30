//to start this server and run it in port 3000 enter "node app.js" in the command line.

const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Home Page');
        res.end();
    }

    if(req.url === '/songs/') {
        res.write(JSON.stringify(["song1", "song2", "song3"]))
        res.end();
    }
})

server.listen(3000);

console.log('Listening on port 3000');