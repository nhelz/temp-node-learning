//CommonJS, every file is a module (by default)
//Modules = Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);
//Creating your own module, you must start the parameter with ./
console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

require('./7-mind-grenade'); //Code will run from here even outside of the function!
//importing a module also invokes it.