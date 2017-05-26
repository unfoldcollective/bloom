// gui params
var sepals_amount = 6;
var sepals_radius = 50;
var sepals_size = 40;
var sepals_color = [55, 51, 30];

var petals_amount = 8;
var petals_radius = 150;
var petals_size = 150;
var petals_color = [47, 32, 51];
var petals_nPoints = 5;

var stamens_amount = 5;
var stamens_radius = 30;
var stamens_size = 10;
var stamens_color = [254, 218, 89];

var carpel_amount = 3;
var carpel_radius = 10;
var carpel_size = 20;
var carpel_color = [248, 66, 116];

var guiSepals;
var guiPetals;
var guiStamens;
var guiCarpel;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    smooth();

    noStroke();

    // Create Layout GUI
    guiSepals  = createGui('Sepals');
    guiPetals  = createGui('Petals');
    // guiStamens = createGui('Stamens');
    // guiCarpel  = createGui('Carpel');

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
    // guiStamens.addGlobals(
    //     'stamens_amount',
    //     'stamens_radius',
    //     'stamens_size',
    //     'stamens_color',
    // );
    // guiCarpel.addGlobals(
    //     'carpel_amount',
    //     'carpel_radius',
    //     'carpel_size',
    //     'carpel_color',
    // );


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
            draw_sepal(pos, sepals_size, sepals_color);
        }

        for (var i = 0; i < petals_amount; i++) {
            var pos = getPosOnCircle(this.position, petals_radius, petals_amount, i);
            draw_petal(pos, petals_size, petals_nPoints, petals_color);
        }

        for (var i = 0; i < stamens_amount; i++) {
            var pos = getPosOnCircle(this.position, stamens_radius, stamens_amount, i);
            draw_stamen(pos, stamens_size, stamens_color);
        }

        for (var i = 0; i < carpel_amount; i++) {
            var pos = getPosOnCircle(this.position, carpel_radius, carpel_amount, i);
            draw_carpel(pos, carpel_size, carpel_color);
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

function draw_carpel(position, radius, color) {
    fill(color);
    ellipse(position.x, position.y, radius, radius);
}

function draw_sepal(position, size, color) {
    console.log("draw_sepal");
    fill(color);
    ellipse(position.x, position.y, size, size);
}

function draw_petal(position, size, nPoints, color) {
    console.log("draw_petal");
    
    // fill(255,0,0);
    // ellipse(position.x, position.y, size, size);

    // noFill();
    fill(color[0],color[1],color[2], 180);

    var positions = _.range(nPoints).map(function(currentValue, index, array) {
        return getPosOnCircle(position, size, nPoints, index);
    });

    
    drawSplineLoop(positions);

    // positions.map(function(currentValue, index, array) {
    //     ellipse(currentValue.x, currentValue.y, 50, 50);
    // });


}

function draw_stamen(position, size, color) {
    fill(color);
    ellipse(position.x, position.y, size, size);
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