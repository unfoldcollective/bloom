// gui params

var opacity = 150;
var opacityMin = 0;
var opacityMax = 255;

var sepals_amount = 6;
var sepals_radius = 50;
var sepals_size = 40;
var sepals_color = [55, 51, 30];
var sepals_nPoints = 5;

var petals_amount = 8;
var petals_radius = 150;
var petals_size = 150;
var petals_color = [47, 32, 51];
var petals_nPoints = 5;
// slider range
var petals_radiusMin = 0;
var petals_radiusMax = 500;


var stamens_amount = 5;
var stamens_radius = 30;
var stamens_size = 10;
var stamens_color = [254, 218, 89];
var stamens_nPoints = 5;

var carpel_amount = 3;
var carpel_radius = 10;
var carpel_size = 20;
var carpel_color = [248, 66, 116];
var carpel_nPoints = 9;

var guiSepals;
var guiPetals;
var guiStamens;
var guiCarpel;

// Steps of 0.005-0.03 work best for most applications
var seed = 0.0;
var seedDelta = 0.01;
var seedDeltaMin = 0.001;
var seedDeltaMax = 0.1;
var seedDeltaStep = 0.001;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    smooth();

    noStroke();

    // Create GUIs
    guiGlobal  = createGui('Global');
    guiSepals  = createGui('Sepals');
    guiPetals  = createGui('Petals');
    guiStamens = createGui('Stamens');
    // guiCarpel  = createGui('Carpel');

    guiGlobal.addGlobals(
        'opacity',
        'seedDelta',
    );
    guiSepals.addGlobals(
        'sepals_amount',
        'sepals_radius',
        'sepals_size',
        'sepals_color',
    );
    guiPetals.addGlobals(
        'petals_amount',
        'petals_radius',
        'petals_size',
        'petals_color',
        'petals_nPoints',
    );
    guiStamens.addGlobals(
        'stamens_amount',
        'stamens_radius',
        'stamens_size',
        'stamens_color',
    );
    // guiCarpel.addGlobals(
    //     'carpel_amount',
    //     'carpel_radius',
    //     'carpel_size',
    //     'carpel_color',
    // );

    set_gui_styles();


    myFlower = new Flower();

    // Don't loop automatically
    noLoop();
}

function Flower() {
    this.position = {
        x: width / 2,
        y: height / 2
    }

    // Draw Flower
    this.draw = function () {

        for (var i = 0; i < sepals_amount; i++) {
            var pos = getPosOnCircle(this.position, sepals_radius, sepals_amount, i);
            draw_leaf(pos, sepals_size, sepals_nPoints, color_with_alpha(sepals_color, opacity));
        }

        for (var i = 0; i < petals_amount; i++) {
            var pos = getPosOnCircle(this.position, petals_radius, petals_amount, i);
            draw_leaf(pos, petals_size, petals_nPoints, color_with_alpha(petals_color, opacity));
        }

        for (var i = 0; i < stamens_amount; i++) {
            var pos = getPosOnCircle(this.position, stamens_radius, stamens_amount, i);
            pos = noisify_pos(pos, stamens_radius);
            draw_leaf(pos, stamens_size, stamens_nPoints, color_with_alpha(stamens_color, opacity));
            draw_stem(this.position, pos, color_with_alpha(stamens_color, opacity));
        }

        for (var i = 0; i < carpel_amount; i++) {
            var pos = getPosOnCircle(this.position, carpel_radius, carpel_amount, i);
            draw_leaf(pos, carpel_size, carpel_nPoints, color_with_alpha(carpel_color, opacity));
        }        
    }
}

function getPosOnCircle(midPosition, radius, n, index) {
    var angle = index * TWO_PI / n;
    return {
        x: midPosition.x + radius * cos(angle),
        y: midPosition.y + radius * sin(angle),
    }
}

function draw_leaf(center_position, size, nPoints, color) { 
    var positions = _.range(nPoints).map(function(currentValue, index) {
        return getPosOnCircle(center_position, size, nPoints, index);
    });

    fill(color);
    drawSplineLoop(positions);
    noFill();
}

function draw_stem(fromPos, toPos, color) {
    stroke(color);
    var d = dist(fromPos.x, fromPos.y, toPos.x, toPos.y);
    curve(
        noisify_pos(fromPos, d).x, noisify_pos(fromPos, d).y, 
        fromPos.x, fromPos.y, 
        toPos.x, toPos.y, 
        noisify_pos(toPos, d).x, noisify_pos(toPos, d).y
    );
    noStroke();
}

function noisify_pos(pos, scale) {
    return {
        x: noisify(pos.x, scale),
        y: noisify(pos.y, scale)
    }
}

function noisify(x, scale) {
    seed += 0.01;
    return x + (noise(seed)-0.5) * scale;
}

function draw() {
    clear();
    background(0);

    myFlower.draw();
}

function drawSplineLoop(points) {
    beginShape();
        for (var i = 0; i < points.length; i++) {
            curveVertex(points[i].x, points[i].y);
        }   
        curveVertex(points[0].x, points[0].y);
        curveVertex(points[1].x, points[1].y);
        curveVertex(points[2].x, points[2].y);
    endShape();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function color_with_alpha(original_color_spec, alpha) {
    var original_color = color(original_color_spec);
    return color(original_color.levels[0], original_color.levels[1], original_color.levels[2], alpha)
}

function set_gui_styles() {
    $( "div.qs_title_bar:contains('Global')" ).parent().css({"left": "initial", "right":"20px"});

}