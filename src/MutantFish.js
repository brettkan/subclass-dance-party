var MutantFish = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('mutantFish');
  this.$node.append('<img src="images/3EyeFish.gif">');

  this.rect = {};
  this.rect.top = top;
  this.rect.left = left;
  this.rect.width = 150;
  this.rect.height = 121.4;
};
MutantFish.prototype = Object.create(makeDancer.prototype);
MutantFish.prototype.constructor = MutantFish;


var HomerTwirl = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('homerTwirl');
  this.$node.append('<img src="images/homertwirl.gif">');
  this.rect = {};
  this.rect.top = top;
  this.rect.left = left;
  this.rect.width = 262.5;
  this.rect.height = 200;
};
HomerTwirl.prototype = Object.create(makeDancer.prototype);
HomerTwirl.prototype.constructor = HomerTwirl;


var LisaDance = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('lisaDance');
  this.$node.append('<img src="images/lisadance.gif">');
  this.rect = {};
  this.rect.top = top+40;
  this.rect.left = left+50;
  this.rect.width = 140;
  this.rect.height = 210;
};
LisaDance.prototype = Object.create(makeDancer.prototype);
LisaDance.prototype.constructor = LisaDance;



var HomerHedge = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('homerHedge');
  this.$node.append('<img src="images/homerhedge.gif">');
  this.rect = {};
  this.rect.top = top;
  this.rect.left = left+70;
  this.rect.width = 175;
  this.rect.height = 187.5;
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
  this.location = undefined;
  this.$node.addClass('kang');
  this.$node.append('<img src="images/kang.png">');
};
Kang.prototype = Object.create(makeDancer.prototype);
Kang.prototype.constructor = Kang;
Kang.prototype.randomPosition = function(){
  var randomTop = ($('body').height()-300) * Math.random();
  var randomLeft = ($('body').width()-200) * Math.random();
  this.setPosition(randomTop, randomLeft);
  this.location = {top: randomTop, left: randomLeft, width: 181.5, height: 300};
  for(var i = 0; i < window.dancers.length; i++){
    if(this.location.left < window.dancers[i].rect.left + window.dancers[i].rect.width &&
       this.location.left + this.location.width > window.dancers[i].rect.left &&
       this.location.top < window.dancers[i].rect.top + window.dancers[i].rect.height &&
       this.location.height + this.location.top > window.dancers[i].rect.top){
       // $('body').app('<img src="images/explosion.gif').setPosition(randomTop, randomLeft);
      //setTimeout( window.dancers[i].$node.append('<img class=explosion src="images/explosion.gif">').bind(null) , 5000);
      window.dancers[i].$node.addClass('hidden');
    }
  }
};




Kang.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);//references dance prototype step

  this.randomPosition();
  // for(var i = 0; i < window.dancers.length; i++){
  //   if()
  // }
};


var Bart = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('bart');
  this.$node.append('<img src="images/bart.gif">');
  this.rect = {};
  this.rect.top = top;
  this.rect.left = left;
  this.rect.width = 250;
  this.rect.height = 188;
};
Bart.prototype = Object.create(makeDancer.prototype);
Bart.prototype.constructor = Bart;

var Marge = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('marge');
  this.$node.append('<img src="images/marge.gif">');
  this.rect = {};
  this.rect.top = top;
  this.rect.left = left;
  this.rect.width = 140;
  this.rect.height = 266.7;
};
Marge.prototype = Object.create(makeDancer.prototype);
Marge.prototype.constructor = Marge;
