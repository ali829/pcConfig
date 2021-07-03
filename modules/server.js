const http = require('http');
const ConfigurationsClass = require('./treat-file');


const confObj = new ConfigurationsClass();

let server = http.createServer((req , res) => {
    if (req.url === '/') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(confObj.readFile);
        res.end();
    }
});

confObj.on('fileCreated' , () => {
    server.listen(8000);
})

confObj.appendFile;


module.exports.server = server;