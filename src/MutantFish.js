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

var Kang = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('kang');
  this.$node.append('<img src="images/kang.png">');
};
Kang.prototype = Object.create(makeDancer.prototype);
Kang.prototype.constructor = Kang;
Kang.prototype.randomPosition = function(){
  var randomTop = ($('body').height()-300) * Math.random();
  var randomLeft = ($('body').width()-200) * Math.random();
  this.setPosition(randomTop, randomLeft);
};

Kang.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);//references dance prototype step

  this.randomPosition();
};


var Bart = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('bart');
  this.$node.append('<img src="images/bart.gif">');
};
Bart.prototype = Object.create(makeDancer.prototype);
Bart.prototype.constructor = Bart;

var Marge = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('marge');
  this.$node.append('<img src="images/marge.gif">');
};
Marge.prototype = Object.create(makeDancer.prototype);
Marge.prototype.constructor = Marge;
