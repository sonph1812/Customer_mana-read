const http = require('http');
const fs = require('fs');
 let server = http.createServer(function (req, res){
     //đọc dữ liệu từ file data
     let dataFile ='';
     let html ='';
     fs.readFile('./data/data.txt','utf-8',function (err, data){

         dataFile = data.split(',')
         dataFile.forEach((value,index)=>{
             html += '<tr>';
             html += `<td>${index+1}</td>`
             html += `<td>${value}</td>`
             html += `<td><button class="btn btn-danger">Delete</button></td>`
             html += '</tr>';
         });
     });
     fs.readFile('./template/index.html','utf-8',function (err, data){
         res.writeHead(200,{'Content-type': 'text/html'});
         data = data.replace('{list-user}',html)
         res.write(data);
         res.end()
     });
 })
server.listen(3000,function(){
    console.log("running at localhost:3000")
})