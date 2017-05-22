// gui params
var sepals_amount = 6;
var sepals_radius = 50;
var sepals_size = 40;
var sepals_color = [55, 51, 30];

var petals_amount = 8;
var petals_radius = 150;
var petals_size = 150;
var petals_color = [47, 32, 51];

var stamens_amount = 5;
var stamens_radius = 30;
var stamens_size = 10;
var stamens_color = [254, 218, 89];

var carpel_size = 30;
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
    guiStamens = createGui('Stamens');
    guiCarpel  = createGui('Carpel');

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
    );
    guiStamens.addGlobals(
        'stamens_amount',
        'stamens_radius',
        'stamens_size',
        'stamens_color',
    );
    guiCarpel.addGlobals(
        'carpel_size',
        'carpel_color',
    );


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
            draw_petal(pos, petals_size, petals_color);
        }

        for (var i = 0; i < stamens_amount; i++) {
            var pos = getPosOnCircle(this.position, stamens_radius, stamens_amount, i);
            draw_stamen(pos, stamens_size, stamens_color);
        }

        draw_carpel(this.position, carpel_size, carpel_color);
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

function draw_petal(position, size, color) {
    fill(color);
    ellipse(position.x, position.y, size, size);
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}