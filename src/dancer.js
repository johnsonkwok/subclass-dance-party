// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // set timeBetweenSteps property so step method can access it
  this.timeBetweenSteps = timeBetweenSteps;
  
  // invoke step method so it can begin cycle of calling step with setTimeout
  this.step();

  // this sets the position to some random default point within the body
  this.setPosition(top, left);
  
  window.dancers.push(this);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  
  // bind step method to a function with "this" set to the instance of makeDancer
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(pad) {
  var styleSettings = {
    top: $('body').height() / 2,
    left: 10 + (pad || 0)
  };
  this.$node.css(styleSettings);
};
  
makeDancer.prototype.faceOff = function(pad) {
  var styleSettings = {
    left: 400 + (pad || 0)
  };
  this.$node.css(styleSettings);
};
  