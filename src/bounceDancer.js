var makeBounceDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer function to instantiate an object 
  makeDancer.call(this, top, left, timeBetweenSteps);
  const charcs = ['bison', 'chunli', 'feilong', 'ken', 'akuma'];
  const randIdx = Math.floor(Math.random() * charcs.length);
  this.charc = charcs[randIdx];
  this.$node.append(`<img class="bounce" src="assets/${charcs[randIdx]}.gif" width="150" height="220">`);
};

// set makeBounceDancer prototype and its constructor to the appropriate item
makeBounceDancer.prototype = Object.create(makeDancer.prototype);
makeBounceDancer.prototype.constructor = makeBounceDancer;

// makeBounceDancer.prototype.step = function() {
  
//   this.$node.toggle();
// }