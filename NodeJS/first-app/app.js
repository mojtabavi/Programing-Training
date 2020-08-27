

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();


console.log(`TotalMemory: ${totalMem}`);
console.log(`FreeMemory: ${freeMem}`);
