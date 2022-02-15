const http = require('http')

const server = http.createServer((req,res) => {
    res.write('welcome to the home page nbode.js')
    res.end()
    }
    
    )
    server.listen(4000)