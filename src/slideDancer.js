var makeSlideDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer function to instantiate an object 
  makeDancer.call(this, top, left, timeBetweenSteps);
  const charcs = ['vega', 'ryu', 'dhalsim', 'deejay', 'cammy'];
  const randIdx = Math.floor(Math.random() * charcs.length);
  this.charc = charcs[randIdx];
  this.$node.append(`<img class="slide" src="assets/${charcs[randIdx]}.gif" width="150" height="220">`);
};

// set makeSlideDancer prototype and its constructor to the appropriate item
makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;