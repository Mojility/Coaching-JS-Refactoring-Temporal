const doSomeWork = require('./src/do_some_work');

doSomeWork('One', 'Two', 'Three', 'Four')
  .then(() => console.log("Done!"));
