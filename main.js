const http = require('http')
 
let requestCounter = 0
 
const server = http.createServer((request, response)=>{

    requestCounter++

    switch(request.url){
        case '/':
        case '/students':
            response.write('STUDENTS')
            break
            case '/courses':
            response.write('COURSES') 
            break
             default:
            response.write('404 not found')
            requestCounter--
    }

    response.write(' What the fack...!?' + requestCounter)
    response.end()
})
server.listen(3003)