var MutantFish = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('mutantFish');
  this.$node.append('<img src="images/3EyeFish.gif">');
};
MutantFish.prototype = Object.create(makeDancer.prototype);
MutantFish.prototype.constructor = MutantFish;


var HomerTwirl = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('homerTwirl');
  this.$node.append('<img src="images/homertwirl.gif">');
};
HomerTwirl.prototype = Object.create(makeDancer.prototype);
HomerTwirl.prototype.constructor = HomerTwirl;


var LisaDance = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('lisaDance');
  this.$node.append('<img src="images/lisadance.gif">');
};
LisaDance.prototype = Object.create(makeDancer.prototype);
LisaDance.prototype.constructor = LisaDance;



var HomerHedge = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('homerHedge');
  this.$node.append('<img src="images/homerhedge.gif">');
};
HomerHedge.prototype = Object.create(makeDancer.prototype);
HomerHedge.prototype.constructor = HomerHedge;


var Scream = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('scream');
  this.$node.append('<img src="images/scream.gif">');
};
Scream.prototype = Object.create(makeDancer.prototype);
Scream.prototype.constructor = Scream;
