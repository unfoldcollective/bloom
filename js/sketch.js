function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    smooth();

    noStroke();

    myFlower = new Flower();
    myFlower.draw();
}

function Flower() {
    this.position = {
        x: width / 2,
        y: height / 2
    }
    
    // Carpel
    this.carpel = new Carpel(this.position, 50, color(248, 66, 116));
    
    // Sepals
    this.no_sepals = 7;
    this.sepals_radius = 50;
    this.sepal_size = 100;
    this.sepals = [];

    for (var i = 0; i < this.no_sepals; i++) {
        var pos = getPosOnCircle(this.position, this.sepals_radius, this.no_sepals, i);
        this.sepals.push( new Sepal(pos, this.sepal_size, color(55, 51, 30)) );
    }

    // Petals    
    this.no_petals = 8;
    this.petals_radius = 140;
    this.petal_size = 80;
    this.petals = [];

    for (var i = 0; i < this.no_petals; i++) {
        var pos = getPosOnCircle(this.position, this.petals_radius, this.no_petals, i);
        this.petals.push( new Petal(pos, this.petal_size, color(47, 32, 51)) );
    }
    
    // Stamens
    this.no_stamens = 6;
    this.stamens_radius = 30;
    this.stamen_size = 10;
    this.stamens = [];

    for (var i = 0; i < this.no_stamens; i++) {
        var pos = getPosOnCircle(this.position, this.stamens_radius, this.no_stamens, i);
        this.stamens.push( new Stamen(pos, this.stamen_size, color(254, 218, 89)) );
    }

    // Draw Flower
    this.draw = function () {
        for (var i = 0; i < this.sepals.length; i++) {
            this.sepals[i].draw();
        }
        for (var i = 0; i < this.petals.length; i++) {
            this.petals[i].draw();
        }
        for (var i = 0; i < this.stamens.length; i++) {
            this.stamens[i].draw();
        }
        this.carpel.draw();
    }
}

function getPosOnCircle(midPosition, radius, n, index) {
    var angle = index * TWO_PI / n;
    return {
        x: midPosition.x + radius * cos(angle),
        y: midPosition.y + radius * sin(angle),
    }
}

function Carpel(position, radius, color) {
    this.position = position;
    this.radius = radius;
    this.color = color;

    this.draw = function () {
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }
}

function Sepal(position, size, color) {
    this.position = position;
    this.size = size;
    this.color = color;

    this.draw = function () {
        console.log("draw sepal");
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }
}

function Petal(position, size, color) {
    this.position = position;
    this.size = size;
    this.color = color;

    this.draw = function () {
        console.log("draw petal");
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }
}

function Stamen(position, size, color) {
    this.position = position;
    this.size = size;
    this.color = color;

    this.draw = function () {
        console.log("draw stamen");
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }
}

function draw() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}