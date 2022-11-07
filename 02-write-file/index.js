const fs = require('fs')
const path = require('path')
const {stdin, stdout} = process

const filePath = path.join(__dirname, 'text.txt')
const writeStream = fs.createWriteStream(filePath, 'utf-8')

stdout.write('Enter your text:\n')
process.on('exit', ()=>{
  stdout.write('Bye, bye see ya later!')
})

stdin.on('data', (data)=>{
  if(data.toString().trim() === 'exit'){
    process.exit()
  }
  writeStream.write(data.toString())
})

process.on('SIGINT', ()=> process.exit())