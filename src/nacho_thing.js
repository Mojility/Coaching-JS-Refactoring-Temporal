/**
 * Let's pretend that this thing is not yours, it's someone elses.
 */

class NachoThing {
  doSomething(str) {
    return new Promise((resolve, reject) => {
      console.log("Third Party", str);
      resolve();
    });
  }
}

module.exports = NachoThing;