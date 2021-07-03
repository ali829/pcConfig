const os = require('os');


//  TODO:get FreeMemory , Totalmemory , cpu and Operator System
let MEMORY_ON_GB = 1 / (Math.pow(1024, 3));
let freeMemory = (os.freemem() * MEMORY_ON_GB).toFixed(0);
let totalMemory = (os.totalmem() * MEMORY_ON_GB).toFixed(0);
let cpuModel = os.cpus();
let operatorSystem = {
    type_version: os.version(),
    size_pointers : os.platform()
};


let getConfig = {
    operatorSys: operatorSystem,
    cpu: cpuModel[0].model,
    freeMem: freeMemory,
    totMem: totalMemory
};


module.exports.getConfig = getConfig;