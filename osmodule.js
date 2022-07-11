const os = require ('os');//no './' added since os is an inbuilt module but in previous case second.js was saved as file in this folder and not was inbuilt module

console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())