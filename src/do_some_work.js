const NachoThing = require('./nacho_thing');

const nachoThing = new NachoThing();

function doSomeWork(arg1, arg2, arg3, arg4) {
  return nachoThing.doSomething(arg1)
    .then(() => {
      console.log("The thing we need to do", arg2, arg3);
    })
    .then(() => {
      nachoThing.doSomething(arg4);
    });
}

module.exports = doSomeWork;
