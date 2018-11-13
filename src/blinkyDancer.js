var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer function to instantiate an object 
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// set makeBlinkyDancer prototype and its constructor to the appropriate item
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call step method from makeDancer prototype with "this" set to the
  // instance of makeBlinkyDancer
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}

