var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var facecolor = rgb(randomNumber(1, 250), randomNumber(1, 250), randomNumber(1, 250));
var bodycolor = rgb(randomNumber(1, 250), randomNumber(1, 250), randomNumber(1, 250));
var trianglecolor = rgb(randomNumber(1, 250), randomNumber(1, 250), randomNumber(1, 250));
var eye = rgb(randomNumber(210, 250), randomNumber(1, 250), randomNumber(1, 250));
var teeth = randomNumber(240, 280);
background("lightblue");
fill(bodycolor);
regularPolygon(200, 200, 5, 200);
fill(trianglecolor);
regularPolygon(97, 85, 3, 20);
regularPolygon(132, 85, 3, 20);
regularPolygon(167, 85, 3, 20);
regularPolygon(202, 85, 3, 20);
regularPolygon(237, 85, 3, 20);
regularPolygon(272, 85, 3, 20);
regularPolygon(307, 85, 3, 20);
regularPolygon(97, 85, 3, 20);
regularPolygon(325, 115, 3, 20);
regularPolygon(325, 140, 3, 20);
regularPolygon(325, 165, 3, 20);
regularPolygon(325, 190, 3, 20);
regularPolygon(325, 215, 3, 20);
regularPolygon(325, 240, 3, 20);
regularPolygon(325, 265, 3, 20);
regularPolygon(325, 290, 3, 20);
regularPolygon(325, 315, 3, 20);
regularPolygon(75, 115, 3, 20);
regularPolygon(75, 140, 3, 20);
regularPolygon(75, 165, 3, 20);
regularPolygon(75, 190, 3, 20);
regularPolygon(75, 215, 3, 20);
regularPolygon(75, 240, 3, 20);
regularPolygon(75, 265, 3, 20);
regularPolygon(75, 290, 3, 20);
regularPolygon(75, 315, 3, 20);
fill(facecolor);
rect(75, 90, 250, 250);
fill("white");
ellipse(165, 180, 70, 70);
ellipse(240, 180, 70, 70);
fill(eye);
ellipse(160, 176, 40, 40);
ellipse(235, 176, 40, 40);
ellipse(200, 270, 200, 100);
fill("white");
shape(140, 310, 154, 315, 158, teeth);
shape(220, 320, 238, 315, 227, teeth);
shape(140, 310, 154, 315, 158, teeth);
shape(139, 231, 171, 223, 152, teeth);
shape(220, 220, 252, 225, 227, teeth);
noFill();
stroke("white");
strokeWeight(13);
rect(100, 130, 200, 90);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
