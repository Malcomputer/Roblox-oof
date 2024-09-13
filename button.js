function first() {
     button.text1();
}
function show() {
    button.text2();
    time();
}

function time() {
    setTimeout(button.text1, 80);
}
function time1() {
    button.text2();
    setTimeout(button.text1, 500);
}

function Button() {
    this.word = function() {
        if (mouseIsPressed || keyIsPressed || touches === true) {
              button.text2();
            } else {
              button.text1();
            }
    }

    this.text1 = function() {
        fill(255,255,255);
        ellipse(200,350,200,200);
        fill(1);
        textSize(40);
        text('Press Me',115,370);
    }

    this.text2 = function() {
        fill(255,0,0);
        ellipse(200, 350, 200, 200);
        fill(255);
        textSize(40);
        text('oof',165,370);
    }

    this.text3 = function() {
        fill(222);
        textSize(100);
        text('Roblox',50,100);
        textSize(80);
        text('Death',90,180);
        textSize(40);
        text('Sound',140,220)
    }
}

    /*this.phone = function touchStarted() {
        touch();
        return false;
    }
    this.finger = function touchStarted() {
        if (touches === true) {
            touch();
        } else {
            return false;
        }
     }*/