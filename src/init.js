$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.container2').append(dancer.$node);
  });
 
  $('.lineup-btn').on('click', function() {
    let padding = 0;
    window.dancers.forEach(function(dancr) {
      dancr.lineUp(padding);
      if (padding < $('body').width() - 200) {
        padding += 80;
      } else {
        padding = 0;
      }
    });
  });

  $('.faceoff-btn').on('click', function() {
    const leftFacing = ['ryu', 'ken', 'chunli'];
    window.dancers.forEach(function(dancr) {
      if (leftFacing.includes(dancr.charc)) {
        dancr.faceOff(550);
      } else {
        dancr.faceOff();
      }
    });
    $('.dancer').addClass('rotate');
    setTimeout(() => $('.dancer').removeClass('rotate'), 3000);
  });

  $('.container2').on('click', '.dancer', function(e) {
    $(this).empty();
    $(this).append(`<img class="bounce" src="assets/ken2.gif" width="150" height="220">`);
  });

});

