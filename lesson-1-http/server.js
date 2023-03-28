const http = require('http')
const url = require('url');

const requestListener = function (req, res) {
    const baseUrl = url.parse(req.url, true)
    const pathName = baseUrl.pathname
    const query = baseUrl.query
    if (pathName === '/'){
        res.writeHead(200);
        res.end('Welcome to the Marcy Lab School!');
    }else if (pathName === '/apply'){
        if (query.name){
            res.writeHead(200)
            res.end(`You've applied, ${query.name}!`)
        }else{
            res.writeHead(200);
            res.end('Thank you for applying to Marcy!');
        }
    } else {
        res.writeHead(404);
        res.end('Sorry, that route does not exist.');
    }
}

const server = http.createServer(requestListener);
server.listen(8080); 

/**
 
http://localhost:8080/                  => 'Welcome to the Marcy Lab School!'
http://localhost:8080/apply             => 'Thank you for applying to Marcy!'
http://localhost:8080/apply?name=Carmen => 'You've applied, Carmen!'
http://localhost:8080/apply?name=Zohaib => 'You've applied, Zohaib!'
http://localhost:8080/asdfjkl           => 'Sorry, that route does not exist.'

 */