const { response } = require('express');
const http = require('http');
const { request } = require('https');
const fs = require('fs');
const path = require('path');


const hostname = '127.0.0.1';
const port = 5000;
const server = http.createServer(
    (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let url = request.url;
        // console.log(url);
        if (url === '/') {
            fs.readFile('index.html', 'utf-8', (err, data) => {
                if (err) throw err;
                response.end(data);
            });
            return;
        }
        else if(url ==='/about') {
            fs.readFile('about.html', 'utf-8', (err, data) => {
                if (err) throw err;
                response.end(data);
            });
            return;
        }
        if(url ==='/contact') {
            fs.readFile('contact.html', 'utf-8', (err, data) => {
                if (err) throw err;
                response.end(data);
            });
            return;
        }
        else{
            fs.readFile('404.html', 'utf-8', (err, data) => {
                if (err) throw err;
                response.end(data);
                
            });
             return;
        }
    });
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});






// const http = require('http');

// const port = process.env.PORT || 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
// //   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>Welcome Narayan</h1>')
// })

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// })