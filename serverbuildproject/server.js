//   Lets build our http server
const http = require ('http')
const path = require ('path')
const process = require('process')
const {static} = require ('./routes/static')
const {add} = require('./routes/add')
const {update} = require('./routes/update')

const host = 'localhost'
const port = 8000

const routes = {
    '/': (req, res) => static ({  
        filename: path.resolve(__dirname, 'public/index.html'),
        contentType: 'text/html'
    }, res),
}

const server = http.createServer((req, res) => {
    const url = require('url')
    if (routes[url.pathname]){
        return routes[url.pathname](req, res)
    }
    res.writeHead(404, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify({
        response: 'failed',
        data: null,
        message: 'resource was not found'
    }))
})

server.listen(port, host, () => {
    console.log(`The server has started on 'http://${host}:${port}'`)
})