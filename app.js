const os=require('os')
const fs=require('fs')


var totalMemory=os.totalmem()
var freeMemory=os.freemem()

console.log(`Total memory: ${totalMemory}`)
console.log(`Free memory: ${freeMemory}`)


const files= fs.readdirSync('./')
console.log(`Files ${files}`)
