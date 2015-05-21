var MutantFish = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //return blinkyDancer;
  this.$node.addClass('mutantFish');
  this.$node.append('<img src="images/3EyeFish.gif">');
};

MutantFish.prototype = Object.create(makeDancer.prototype);
MutantFish.prototype.constructor = makeOtherDancer;

