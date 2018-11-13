var makeBounceDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer function to instantiate an object 
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="assets/ken.gif">').addClass('bounce');
};

// set makeBounceDancer prototype and its constructor to the appropriate item
makeBounceDancer.prototype = Object.create(makeDancer.prototype);
makeBounceDancer.prototype.constructor = makeBounceDancer;

makeBounceDancer.prototype.step = function() {
  
  this.$node.toggle();
}