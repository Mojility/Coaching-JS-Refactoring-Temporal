const sinon = require('sinon');
const expect = require('chai').expect;
const doSomeWork = require('../src/do_some_work');

// Get this tested!

describe('doSomeWork', () => {
  it('should exist', () => {
    expect(doSomeWork).to.exist;
  });

  it('should call the nacho thing', () => {
    // oh oh, let's play...

    const fakeNacho = {
      doSomething: () => {
      }
    };

    sinon.spy(fakeNacho, 'doSomething');

    fakeNacho.doSomething(1,2,3);

    expect(fakeNacho.doSomething.withArgs(1,2,3).calledOnce).to.be.true;
  });
});

