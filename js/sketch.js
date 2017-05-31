// gui params

var opacity = 200;
var opacityMin = 0;
var opacityMax = 255;
var background_color = '#000000';
var rotation = 0;
var rotationMin = 0;
var rotationMax = 2 * Math.PI;
var rotationStep = 0.01 * Math.PI;

var sepals_amount = 6;
var sepals_radius = 50;
var sepals_size = 40;
var sepals_color = [55, 51, 30];
var sepals_nPoints = 5;
var sepals_nPointsMin = 3;
var sepals_nPointsMax = 10;
var sepals_noiseFactor = 1;
var sepals_noiseFactorMin = 0;
var sepals_noiseFactorMax = 10;
var sepals_noiseFactorStep = 0.1;

var petals_amount = 8;
var petals_radius = 150;
var petals_size = 150;
var petals_color = '#6F4979'; //[47, 32, 51];
var petals_color2 = '#BF4979'; //[47, 32, 51];
var petals_nPoints = 5;
var petals_nPointsMin = 3;
var petals_nPointsMax = 10;
// slider range
var petals_radiusMin = 0;
var petals_radiusMax = 500;
var petals_noiseFactor = 1;
var petals_noiseFactorMin = 0;
var petals_noiseFactorMax = 10;
var petals_noiseFactorStep = 0.1;

var stamens_amount = 5;
var stamens_radius = 30;
var stamens_size = 10;
var stamens_color = [254, 218, 89];
var stamens_nPoints = 5;
var stamens_nPointsMin = 3;
var stamens_nPointsMax = 10;
var stamens_noiseFactor = 1;
var stamens_noiseFactorMin = 0;
var stamens_noiseFactorMax = 10;
var stamens_noiseFactorStep = 0.1;

var carpel_amount = 3;
var carpel_radius = 10;
var carpel_size = 20;
var carpel_color = [248, 66, 116];
var carpel_nPoints = 9;
var carpel_nPointsMin = 3;
var carpel_nPointsMax = 10;
var carpel_noiseFactor = 1;
var carpel_noiseFactorMin = 0;
var carpel_noiseFactorMax = 10;
var carpel_noiseFactorStep = 0.1;

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
    background(background_color);
    frameRate(30);
    smooth();

    noStroke();

    // Create GUIs
    guiGlobal  = createGui('Global');
    guiSepals  = createGui('Sepals');
    guiPetals  = createGui('Petals');
    guiCarpel  = createGui('Carpel');
    guiStamens = createGui('Stamens');

    guiGlobal.addGlobals(
        'opacity',
        'seedDelta',
        'background_color',
        'rotation',
    );
    guiSepals.addGlobals(
        'sepals_amount',
        'sepals_radius',
        'sepals_size',
        'sepals_color',
        'sepals_nPoints',
        'sepals_noiseFactor',
    );
    guiPetals.addGlobals(
        'petals_amount',
        'petals_radius',
        'petals_size',
        'petals_color',
        'petals_color2',
        'petals_nPoints',
        'petals_noiseFactor',
    );
    guiStamens.addGlobals(
        'stamens_amount',
        'stamens_radius',
        'stamens_size',
        'stamens_color',
        'stamens_nPoints',
        'stamens_noiseFactor',
    );
    guiCarpel.addGlobals(
        'carpel_amount',
        'carpel_radius',
        'carpel_size',
        'carpel_color',
        'carpel_nPoints',
        'carpel_noiseFactor',
    );

    set_gui_styles();


    myFlower = new Flower();

    // Don't loop automatically
    noLoop();
}

function Flower() {
    this.position = createVector(width / 2, height / 2);

    // Draw Flower
    this.draw = function () {

        var flower_position = this.position;

        var sepals_positions = 
            _.range(sepals_amount)
            .map(function(value, index) {
                var sepals_rotation = rotation + Math.PI / sepals_amount;
                return getPosOnCircle(flower_position, sepals_radius, sepals_rotation, sepals_amount, index);
            })
            .map(function(value, index) {
                return get_leaf_positions(value, flower_position, sepals_size, sepals_nPoints, sepals_noiseFactor);
            })
            .map(function(value, index) {
                draw_leaf_from_pos(value, color_with_alpha(sepals_color, opacity));
                return value;
            });

        // petals
        var petals_center_positions = 
            _.range(petals_amount)
            .map(function(value, index) {
                console.log(flower_position);
                return getPosOnCircle(flower_position, petals_radius, rotation, petals_amount, index);
            });

        var petal_positions1 = petals_center_positions
            .map(function(value, index) {
                return get_leaf_positions(value, flower_position, petals_size, petals_nPoints, petals_noiseFactor);
            })
            .map(function(value, index) {
                draw_leaf_from_pos(value, color_with_alpha(petals_color, opacity));
                return value;
            });
        
        var petal_positions2 = petals_center_positions
            .map(function(value, index) {
                return get_leaf_positions(value, flower_position, petals_size * 0.5, petals_nPoints, petals_noiseFactor);
            })
            .map(function(value, index) {
                draw_leaf_from_pos(value, color_with_alpha(petals_color2, opacity));
                return value;
            });

        var stamens_positions = 
            _.range(stamens_amount)
            .map(function(value, index) {
                return getPosOnCircle(flower_position, stamens_radius, rotation, stamens_amount, index);
            })
            .map(function(value, index) {
                var center_pos_noisified = noisify_pos(value, stamens_radius, stamens_noiseFactor);
                var center_pos_closer = p5.Vector.lerp(center_pos_noisified, flower_position, stamens_size/stamens_radius);
                var leaf_positions = get_leaf_positions(center_pos_noisified, center_pos_closer, stamens_size, stamens_nPoints, stamens_noiseFactor);

                draw_stem(flower_position, center_pos_closer, color_with_alpha(stamens_color, opacity), stamens_noiseFactor);
                draw_leaf_from_pos(leaf_positions, color_with_alpha(stamens_color, opacity));
                return leaf_positions;
            });

        var carpel_positions = 
            _.range(carpel_amount)
            .map(function(value, index) {
                return getPosOnCircle(flower_position, carpel_radius, rotation, carpel_amount, index);
            })
            .map(function(value, index) {
                return get_leaf_positions(value, flower_position, carpel_size, carpel_nPoints, carpel_noiseFactor);
            })
            .map(function(value, index) {
                draw_leaf_from_pos(value, color_with_alpha(carpel_color, opacity));
                return value;
            });
    }
}

function getPosOnCircle(midPosition, radius, rotation, n, index) {
    var angle = (index * TWO_PI / n) + rotation;
    return createVector(
        midPosition.x + radius * cos(angle), 
        midPosition.y + radius * sin(angle)
    );
}

function get_leaf_positions(center_pos, base_pos, size, nPoints, noiseFactor) {
    var positions = 
        _.range(nPoints)
        .map(function(value, index) {
            return getPosOnCircle(center_pos, size, rotation, nPoints, index);
        })
        .map(function(value, index) {
            return noisify_pos(value, size, noiseFactor);
        });
    
    var closest_index_to_base_pos = positions.reduce(function(prevVal, elem, index, array) {
        prevDistance = dist(array[prevVal].x, array[prevVal].y, base_pos.x, base_pos.y);
        curDistance  = dist(elem.x, elem.y, base_pos.x, base_pos.y);
        return prevDistance < curDistance ? prevVal : index;
    }, 0);
    
    positions[closest_index_to_base_pos] = base_pos;

    return positions;
}

function draw_leaf_from_pos(positions, color) {
    fill(color);
    drawSplineLoop(positions);
    noFill();    
}

function draw_leaf(center_pos, base_pos, size, nPoints, color, noiseFactor) { 
    var positions = 
        _.range(nPoints)
        .map(function(value, index) {
            return getPosOnCircle(center_pos, size, rotation, nPoints, index);
        })
        .map(function(value, index) {
            return noisify_pos(value, size, noiseFactor);
        });
    
    var closest_index_to_base_pos = positions.reduce(function(prevVal, elem, index, array) {
        prevDistance = dist(array[prevVal].x, array[prevVal].y, base_pos.x, base_pos.y);
        curDistance  = dist(elem.x, elem.y, base_pos.x, base_pos.y);
        return prevDistance < curDistance ? prevVal : index;
    }, 0);
    
    positions[closest_index_to_base_pos] = base_pos;

    fill(color);
    drawSplineLoop(positions);
    noFill();
}

function draw_stem(fromPos, toPos, color, noiseFactor) {
    stroke(color);
    var d = dist(fromPos.x, fromPos.y, toPos.x, toPos.y);
    curve(
        noisify_pos(fromPos, d, noiseFactor).x, noisify_pos(fromPos, d, noiseFactor).y, 
        fromPos.x, fromPos.y, 
        toPos.x, toPos.y, 
        noisify_pos(toPos, d, noiseFactor).x, noisify_pos(toPos, d, noiseFactor).y
    );
    noStroke();
}

function noisify_pos(pos, scale, noiseFactor) {
    return createVector( noisify(pos.x, scale, noiseFactor), noisify(pos.y, scale, noiseFactor) );
}

function noisify(x, scale, noiseFactor) {
    seed += 0.01;
    return x + (noise(seed)-0.5) * noiseFactor * scale;
}

function draw() {
    clear();
    background(background_color);

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