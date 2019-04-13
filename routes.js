// const Router = require('router');
// const router = Router()


// module.exports =

//     router.get('/', function (req, res) {
//         res.setHeader('Content-Type', 'text/plain; charset=utf-8')
//         res.end('Welcome to our site ^_^')
//     })

// router.get('/files', function (req, res) {
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(imgArr))
// })

// router.get('/files/:id', function (req, res) {
//     // console.log(req.params.id);
//     res.setHeader('Content-Type', 'image/gif')

//     fs.readFile('./assets/' + imgArr[req.params.id], (err, data) => {
//         if (err) console.log(err);
//         console.log(data);
//         res.end(data)
//     });

// })