const http = require('http'); //places http module in a variable
const fs = require('fs') //places file system module in a const
const url = require('url'); //places url(handling url spec duties) module in a cost
const querystring = require('querystring'); //places querystring module inside of a const - look at query parameters in our url
const figlet = require('figlet') //places function for error in a const / ascii art

const server = http.createServer(function(req, res) {//create a server using the createServer method
  const page = url.parse(req.url).pathname; //enabling us to look at the path in the url. looking at url and parsing the path of it
  const params = querystring.parse(url.parse(req.url).query); //look at any query parameters 
  console.log(page);
  if (page == '/') { 
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data); 
      res.end();
    });
  }
  else if (page == '/api') {
    arrayCoin = ['heads', 'tails']
    if('student' in params){
      console.log(params['student'])
      if(params['student']== 'heads'){ 
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flip = arrayCoin[Math.floor(Math.random() * arrayCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult == flip ){
          congrats = "won"
        }else{
          congrats = "lost"
        }// Prepare the JSON response
        
        const objToJson = {
          playerChoice: `${checkResult}`,
          cpuChoice: `${flip}`,
          winOrLose: `${congrats}`
        }
        // Send the response
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        flip = arrayCoin[Math.floor(Math.random() * arrayCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult == flip ){
          congrats = "won"
        }else{
          congrats = "lost"
        }
        const objToJson = {
          playerChoice: `${checkResult}`,
          cpuChoice: `${flip}`,
          winOrLose: `${congrats}`
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['student'] !== 'tails' || params['student'] !== 'heads' ){
      res.writeHead(200, {'Content-Type': 'application/json'});
      flip = arrayCoin[Math.floor(Math.random() * arrayCoin.length)]
      checkResult = params['student'].toLowerCase()
      if(checkResult !== flip ){
        congrats = 'Please Enter "heads" or "tails"' // Invalid choice, send error response
    }
const objToJson = {
  winOrLose: `${congrats}`
}
res.end(JSON.stringify(objToJson));
      }
    }
  }

  //else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);//listen to local host port 8000
