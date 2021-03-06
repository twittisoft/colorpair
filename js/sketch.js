// Generated by CoffeeScript 2.5.1
var Ball, active, balls, draw, keyPressed, level, mousePressed, radie, reset, setup, start, stopp;

radie = 100;

active = 0;

start = 0;

stopp = 0;

level = 0;

Ball = class Ball {
  constructor(x1, y1, dx1, dy1, r1, g1, b1) {
    this.x = x1;
    this.y = y1;
    this.dx = dx1;
    this.dy = dy1;
    this.r = r1;
    this.g = g1;
    this.b = b1;
    this.active = true;
  }

  rita() {
    sw(7);
    sc(1);
    if (!this.active) {
      return;
    }
    if (this.x > width - radie) {
      this.dx = -this.dx;
    }
    if (this.x < radie) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    if (this.y > height - radie) {
      this.dy = -this.dy;
    } else {
      this.dy += 0.1;
    }
    this.y += this.dy;
    fc(this.r, this.g, this.b);
    return circle(this.x, this.y, radie);
  }

  inside(mx, my) {
    return dist(this.x, this.y, mx, my) < radie;
  }

};

balls = [];

reset = function() {
  var i, j, len, ref, results;
  start = new Date();
  level++;
  radie = radie * 0.99;
  ref = range(level);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    results.push(keyPressed());
  }
  return results;
};

setup = function() {
  createCanvas(windowWidth, windowHeight);
  reset();
  return radie = (windowWidth + windowHeight) / 30;
};

draw = function() {
  var ball, j, len;
  bg(0);
  sc();
  for (j = 0, len = balls.length; j < len; j++) {
    ball = balls[j];
    ball.rita();
  }
  textSize(100);
  textAlign(CENTER, CENTER);
  sw(10);
  sc(0.5);
  fc(1);
  if (active === 0) {
    return text((stopp - start) / 1000, width / 2, height / 2);
  }
};

mousePressed = function() {
  var ball, j, len, results;
  if (active === 0) {
    return reset();
  } else {
    results = [];
    for (j = 0, len = balls.length; j < len; j++) {
      ball = balls[j];
      if (ball.active && ball.inside(mouseX, mouseY)) {
        ball.active = false;
        active--;
        if (active === 0) {
          results.push(stopp = new Date());
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  }
};

keyPressed = function() {
  var b, dx, dy, g, r, x, y;
  active++;
  x = random(50, width);
  y = random(50, 100);
  dx = random(-2, 2);
  dy = random(-0.3, 0.3);
  r = random(1);
  g = random(1);
  b = random(1);
  return balls.push(new Ball(x, y, dx, dy, r, g, b));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQTs7QUFBQSxLQUFBLEdBQVE7O0FBQ1IsTUFBQSxHQUFTOztBQUNULEtBQUEsR0FBUTs7QUFDUixLQUFBLEdBQVE7O0FBQ1IsS0FBQSxHQUFROztBQUVGLE9BQU4sTUFBQSxLQUFBO0VBQ0MsV0FBYyxHQUFBLElBQUEsS0FBQSxLQUFBLElBQUEsSUFBQSxJQUFBLENBQUE7SUFBQyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBSSxJQUFDLENBQUE7SUFBSSxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFDekMsSUFBQyxDQUFBLE1BQUQsR0FBVTtFQURHOztFQUVkLElBQU8sQ0FBQSxDQUFBO0lBQ04sRUFBQSxDQUFHLENBQUg7SUFDQSxFQUFBLENBQUcsQ0FBSDtJQUNBLElBQUcsQ0FBSSxJQUFDLENBQUEsTUFBUjtBQUFvQixhQUFwQjs7SUFDQSxJQUFHLElBQUMsQ0FBQSxDQUFELEdBQUssS0FBQSxHQUFNLEtBQWQ7TUFBeUIsSUFBQyxDQUFBLEVBQUQsR0FBTSxDQUFDLElBQUMsQ0FBQSxHQUFqQzs7SUFDQSxJQUFHLElBQUMsQ0FBQSxDQUFELEdBQUssS0FBUjtNQUFtQixJQUFDLENBQUEsRUFBRCxHQUFNLENBQUMsSUFBQyxDQUFBLEdBQTNCOztJQUNBLElBQUMsQ0FBQSxDQUFELElBQU0sSUFBQyxDQUFBO0lBRVAsSUFBRyxJQUFDLENBQUEsQ0FBRCxHQUFLLE1BQUEsR0FBTyxLQUFmO01BQTBCLElBQUMsQ0FBQSxFQUFELEdB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QUFBLEdBQUksTUFBQSxDQUFPLENBQVA7RUFDSixDQUFBLEdBQUksTUFBQSxDQUFPLENBQVA7U0FDSixLQUFLLENBQUMsSUFBTixDQUFXLElBQUksSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsRUFBYixFQUFnQixFQUFoQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQUFYO0FBVlkiLCJzb3VyY2VzQ29udGVudCI6WyJyYWRpZSA9IDEwMFxyXG5hY3RpdmUgPSAwXHJcbnN0YXJ0ID0gMFxyXG5zdG9wcCA9IDBcclxubGV2ZWwgPSAwXHJcblxyXG5jbGFzcyBCYWxsXHJcblx0Y29uc3RydWN0b3IgOiAoQHgsIEB5LCBAZHgsIEBkeSwgQHIsIEBnLCBAYikgLT5cclxuXHRcdEBhY3RpdmUgPSB0cnVlXHJcblx0cml0YSA6IC0+XHJcblx0XHRzdyA3XHJcblx0XHRzYyAxXHJcblx0XHRpZiBub3QgQGFjdGl2ZSB0aGVuIHJldHVybiBcclxuXHRcdGlmIEB4ID4gd2lkdGgtcmFkaWUgdGhlbiBAZHggPSAtQGR4XHJcblx0XHRpZiBAeCA8IHJhZGllIHRoZW4gQGR4ID0gLUBkeFxyXG5cdFx0QHggKz0gQGR4XHJcblxyXG5cdFx0aWYgQHkgPiBoZWlnaHQtcmFkaWUgdGhlbiBAZHkgPSAtQGR5IGVsc2UgQGR5Kz0wLjFcclxuXHJcblx0XHRAeSArPSBAZHlcclxuXHRcdGZjIEByLEBnLEBiXHJcblx0XHRjaXJjbGUgQHgsQHkscmFkaWVcclxuXHRpbnNpZGUgOiAobXgsbXkpIC0+IGRpc3QoQHgsQHksbXgsbXkpIDwgcmFkaWVcclxuXHJcbmJhbGxzID0gW11cclxuXHJcbnJlc2V0ID0gLT5cclxuXHRzdGFydCA9IG5ldyBEYXRlKClcclxuXHRsZXZlbCsrXHJcblx0cmFkaWUgPSByYWRpZSowLjk5XHJcblx0Zm9yIGkgaW4gcmFuZ2UgbGV2ZWxcclxuXHRcdGtleVByZXNzZWQoKVxyXG5cclxuXHJcbnNldHVwID0gLT5cclxuXHRjcmVhdGVDYW52YXMgd2luZG93V2lkdGgsd2luZG93SGVpZ2h0XHJcblx0cmVzZXQoKVxyXG5cdHJhZGllID0gICh3aW5kb3dXaWR0aCArIHdpbmRvd0hlaWdodCkgLzMwXHJcblxyXG5kcmF3ID0gLT5cclxuXHRiZyAwXHJcblx0c2MoKVxyXG5cdGZvciBiYWxsIGluIGJhbGxzXHJcblx0XHRiYWxsLnJpdGEoKVxyXG5cdHRleHRTaXplIDEwMFxyXG5cdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXHJcblx0c3cgMTBcclxuXHRzYyAwLjVcclxuXHRmYyAxXHJcblx0aWYgYWN0aXZlID09IDBcclxuXHRcdHRleHQgKHN0b3BwLXN0YXJ0KS8xMDAwLHdpZHRoLzIsaGVpZ2h0LzJcclxuXHJcblxyXG5tb3VzZVByZXNzZWQgPSAtPlxyXG5cdGlmIGFjdGl2ZT09MFxyXG5cdFx0cmVzZXQoKVxyXG5cdGVsc2VcclxuXHRcdGZvciBiYWxsIGluIGJhbGxzXHJcblx0XHRcdGlmIGJhbGwuYWN0aXZlIGFuZCBiYWxsLmluc2lkZSBtb3VzZVgsbW91c2VZIFxyXG5cdFx0XHRcdGJhbGwuYWN0aXZlID0gZmFsc2VcclxuXHRcdFx0XHRhY3RpdmUtLVxyXG5cdFx0XHRcdGlmIGFjdGl2ZSA9PSAwXHJcblx0XHRcdFx0XHRzdG9wcCA9IG5ldyBEYXRlKCkgXHJcblxyXG5rZXlQcmVzc2VkID0gLT5cclxuXHRhY3RpdmUrK1xyXG5cdHggPSByYW5kb20gNTAsd2lkdGhcclxuXHR5ID0gcmFuZG9tIDUwLDEwMFxyXG5cdGR4ID0gcmFuZG9tIC0yLDJcclxuXHRkeSA9IHJhbmRvbSAtMC4zLDAuM1xyXG5cclxuXHRyID0gcmFuZG9tIDFcclxuXHRnID0gcmFuZG9tIDFcclxuXHRiID0gcmFuZG9tIDFcclxuXHRiYWxscy5wdXNoIG5ldyBCYWxsIHgseSxkeCxkeSxyLGcsYiJdfQ==
//# sourceURL=c:\Users\twittisoft\Desktop\009-experiment\coffee\sketch.coffee