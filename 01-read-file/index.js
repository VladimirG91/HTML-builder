const fs = require('fs') 
const path = require('path')

const filePath = path.join(__dirname)

fs.readFile(filePath + '/text.txt', 'utf-8', (err, data) => {
  if(err){
    throw err
  }
  console.log(data);
});