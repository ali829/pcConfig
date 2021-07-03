const fs = require('fs');
const EventsEmmiter = require('events')
const sys = require('./sys');


class ConfigurationsClass extends EventsEmmiter{
    emit = this.emit;
    pcConfig = `
    Your Operating-System is : ${sys.getConfig.operatorSys.type_version} \n
    Your Size Pointer is: ${sys.getConfig.operatorSys.size_pointers} \n
    Your Total Memory is: ${sys.getConfig.totMem} GB \n
    Your Free Memory is: ${sys.getConfig.freeMem} GB 
    `
    appendFile = fs.access('file/config.txt', fs.F_OK, (err) => {
        if (err) {
            fs.appendFile('file/config.txt', this.pcConfig, (err) => {
                if (err) console.error(err);
            })
        } else {
            fs.writeFile('file/config.txt' , this.pcConfig , (err) => {
                if (err) console.error(err);
            })
        }
        this.emit('fileCreated' , this.appendFile)
        })
    readFile = fs.readFileSync('file/config.txt').toString();
}


module.exports = ConfigurationsClass;