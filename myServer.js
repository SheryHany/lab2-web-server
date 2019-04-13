//from librarys and node
const http = require('http');
const Router = require('router');
const finalhandler = require('finalhandler');

//my files
const imgArr = require('./readFiles');
// const server = require('./server');

// const routes = require('./routes');
// console.log(routes);


const hostname = '127.0.0.1';
const port = 3000;

const router = Router();

const server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(3000, () => {
    console.log('server listening on port 3000')
})


router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Welcome to our site ^_^')
})

router.get('/files', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(imgArr))
})

router.get('/files/:id', function (req, res) {
    // console.log(req.params.id);
    res.setHeader('Content-Type', 'image/gif')

    fs.readFile('./assets/' + imgArr[req.params.id], (err, data) => {
        if (err) console.log(err);
        console.log(data);
        res.end(data)
    });

})















// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });