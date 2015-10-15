//Require the fs core module. No need for npm here as this is built in
//https://nodejs.org/docs/latest-v0.10.x/api/fs.html
var fs = require('fs');

//fs.readFile(file, [encoding], [callback]);
//encoding is optional but defaults to utf8
fs.readFile('./hello.txt', 'utf8', function (err,data) {
    //Remember error is the first param
  if (err) {
    // "return" is important here. It stops the execution of any code below
    return console.log(err);
  }
  //If there is no errors log the data
  console.log(data);
});
