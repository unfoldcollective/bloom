// gui params

var opacity = 200;
var opacityMin = 0;
var opacityMax = 255;
var background_hue = 89;
var background_hueMin = 0;
var background_hueMax = 360;
var background_saturation = 50;
var background_saturationMin = 0;
var background_saturationMax = 100;
var background_lightness = 90;
var background_lightnessMin = 0;
var background_lightnessMax = 100;
var hue_exclude_range = 20;
var hue_noise_scale = 100;
var lightness_noise_scale = 20;
var curve_tightness = 7;
var curve_tightnessMin = -50;
var curve_tightnessMax = 50;
var curve_tightnessStep = 0.1;

var rotation = 0;
var rotationMin = 0;
var rotationMax = 2 * Math.PI;
var rotationStep = 0.01 * Math.PI;
var progress = 1;
var progressMin = 0;
var progressMax = 1;
var progressStep = 0.01;

var sepals_amount = 6;
var sepals_radius = 250;
var sepals_radiusMin = 0;
var sepals_radiusMax = 500;
var sepals_size = 40;
var sepals_sizeMin = 10;
var sepals_sizeMax = 200;
var sepals_c_saturation = 70;
var sepals_c_saturationMin = 0;
var sepals_c_saturationMax = 100;
var sepals_c_lightness = 30;
var sepals_c_lightnessMin = 0;
var sepals_c_lightnessMax = 100;
var sepals_nPoints = 5;
var sepals_nPointsMin = 3;
var sepals_nPointsMax = 10;
var sepals_noiseFactor = 1;
var sepals_noiseFactorMin = 0;
var sepals_noiseFactorMax = 10;
var sepals_noiseFactorStep = 0.1;


var petals_amount = 6;
var petals_radius = 150;
var petals_radiusMin = 0;
var petals_radiusMax = 500;
var petals_size = 150;
var petals_c_saturation = 100;
var petals_c_saturationMin = 0;
var petals_c_saturationMax = 100;
var petals_c_lightness = 70;
var petals_c_lightnessMin = 0;
var petals_c_lightnessMax = 100;
var petals_c2_saturation = 100;
var petals_c2_saturationMin = 0;
var petals_c2_saturationMax = 100;
var petals_c2_lightness = 30;
var petals_c2_lightnessMin = 0;
var petals_c2_lightnessMax = 100;
var petals_nPoints = 5;
var petals_nPointsMin = 3;
var petals_nPointsMax = 10;
var petals_noiseFactor = 1;
var petals_noiseFactorMin = 0;
var petals_noiseFactorMax = 10;
var petals_noiseFactorStep = 0.1;

var stamens_amount = 5;
var stamens_radius = 30;
var stamens_radiusMin = 10;
var stamens_radiusMax = 200;
var stamens_size = 10;
var stamens_c_hue = 10;
var stamens_c_hueMin = 0;
var stamens_c_hueMax = 360;
var stamens_c_saturation = 100;
var stamens_c_saturationMin = 0;
var stamens_c_saturationMax = 100;
var stamens_c_lightness = 90;
var stamens_c_lightnessMin = 0;
var stamens_c_lightnessMax = 100;
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
var carpel_c_saturation = 70;
var carpel_c_saturationMin = 0;
var carpel_c_saturationMax = 100;
var carpel_c_lightness = 70;
var carpel_c_lightnessMin = 0;
var carpel_c_lightnessMax = 100;
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
    background(hsluvToP5Rgb(background_hue, background_saturation, background_lightness));
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
        'rotation',
        'progress',
        'background_hue',
        'background_saturation',
        'background_lightness',
        'curve_tightness',
    );
    guiSepals.addGlobals(
        'sepals_amount',
        'sepals_radius',
        'sepals_size',
    
        'sepals_c_saturation',
        'sepals_c_lightness',
        'sepals_nPoints',
        'sepals_noiseFactor',
    );
    guiPetals.addGlobals(
        'petals_amount',
        'petals_radius',
        'petals_size',
        'petals_c_saturation',
        'petals_c_lightness',
        'petals_c2_saturation',
        'petals_c2_lightness',
        'petals_nPoints',
        'petals_noiseFactor',
    );
    guiStamens.addGlobals(
        'stamens_amount',
        'stamens_radius',
        'stamens_size',
        'stamens_c_hue',
        'stamens_c_saturation',
        'stamens_c_lightness',
        'stamens_nPoints',
        'stamens_noiseFactor',
    );
    guiCarpel.addGlobals(
        'carpel_amount',
        'carpel_radius',
        'carpel_size',
        'carpel_c_saturation',
        'carpel_c_lightness',
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
        curveTightness(curve_tightness)
        var flower = this;

        flower.sepals = {};
        flower.sepals.color = {
            h: background_hue, 
            s: sepals_c_saturation, 
            l: sepals_c_lightness,
        };
        
        flower.petals = {};
        flower.petals.color1 = {
            h: random_hue_excluding(background_hue, hue_exclude_range),
            s: petals_c_saturation,
            l: coin_flip(petals_c_lightness, complement_linear(petals_c_lightness, 100)),
        };
        flower.petals.color2 = {
            h: normalise_to_hue(noisify(flower.petals.color1.h, hue_noise_scale, petals_noiseFactor)),
            s: petals_c_saturation,
            l: complement_linear(flower.petals.color1.l, 100),
        }

        flower.carpel = {};
        flower.carpel.color = {
            h: complement_circular(flower.petals.color1.h),
            s: carpel_c_saturation,
            l: carpel_c_lightness,
        }

        flower.stamens = {};
        flower.stamens.color = {
            h: complement_circular(flower.petals.color1.h),
            s: stamens_c_saturation,
            l: stamens_c_lightness,
        }


        var sepals_positions = 
            _.shuffle(_.range(sepals_amount))
            .map(function(value) {
                var sepals_rotation = rotation + Math.PI / sepals_amount;
                return getPosOnCircle(flower.position, progress * sepals_radius, sepals_rotation, sepals_amount, value);
            })
            .map(function(value) {
                return get_leaf_positions(value, flower.position, progress * sepals_size, sepals_nPoints, sepals_noiseFactor);
            })
            .map(function(value) {
                var sepals_color = rgb_with_alpha( hsluvToP5Rgb(flower.sepals.color.h, flower.sepals.color.s, flower.sepals.color.l), opacity);
                draw_leaf_from_pos(value, sepals_color);
                return value;
            });

        // petals
        var petals_center_positions = 
            _.shuffle(_.range(petals_amount))
            .map(function(value) {
                return getPosOnCircle(flower.position, progress * petals_radius, rotation, petals_amount, value);
            })
            .map(function(value) {
                var petals_positions1  = get_leaf_positions(value, flower.position, progress * petals_size, petals_nPoints, petals_noiseFactor);
                var petals_positions2 = get_leaf_positions(value, flower.position, progress * petals_size * 0.5, petals_nPoints, petals_noiseFactor);
                var petals_color1 = rgb_with_alpha(hsluvToP5Rgb(flower.petals.color1.h, flower.petals.color1.s, flower.petals.color1.l), opacity);
                var petals_color2 = rgb_with_alpha(hsluvToP5Rgb(flower.petals.color2.h, flower.petals.color2.s, flower.petals.color2.l), opacity);
                draw_leaf_from_pos(petals_positions1, petals_color1);
                draw_leaf_from_pos(petals_positions2, petals_color2);

            });

        var carpel_positions = 
            _.shuffle(_.range(carpel_amount))
            .map(function(value) {
                return getPosOnCircle(flower.position, progress * carpel_radius, rotation, carpel_amount, value);
            })
            .map(function(value) {
                return get_leaf_positions(value, flower.position, progress * carpel_size, carpel_nPoints, carpel_noiseFactor);
            })
            .map(function(value) {
                var carpel_color = rgb_with_alpha( hsluvToP5Rgb(flower.carpel.color.h, flower.carpel.color.s, flower.carpel.color.l), opacity);
                draw_leaf_from_pos(value, carpel_color);
                return value;
            });

        var stamens_positions = 
            _.shuffle(_.range(stamens_amount))
            .map(function(value) {
                return getPosOnCircle(flower.position, progress * stamens_radius, rotation, stamens_amount, value);
            })
            .map(function(value) {
                var center_pos_noisified = noisify_pos(value, progress * stamens_radius, stamens_noiseFactor);
                var center_pos_closer = p5.Vector.lerp(center_pos_noisified, flower.position, stamens_size/stamens_radius);
                var leaf_positions = get_leaf_positions(center_pos_noisified, center_pos_closer, progress * stamens_size, stamens_nPoints, stamens_noiseFactor);

                var stamens_color = rgb_with_alpha(hsluvToP5Rgb(flower.stamens.color.h, flower.stamens.color.s, flower.stamens.color.l), opacity);
                draw_stem(flower.position, center_pos_closer, stamens_color, stamens_noiseFactor);
                draw_leaf_from_pos(leaf_positions, stamens_color);
                return leaf_positions;
            });

    }
}


// drawing functions

function draw() {
    clear();
    background(hsluvToP5Rgb(background_hue, background_saturation, background_lightness));

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

// structural functions

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

function noisify_pos(pos, scale, noiseFactor) {
    return createVector( noisify(pos.x, scale, noiseFactor), noisify(pos.y, scale, noiseFactor) );
}

// event handlers

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// color helpers

function random_hue_excluding(background_hue, hue_exclude_range) {
    var hue_include_range = 360 - 2 * hue_exclude_range;
    var int_min = background_hue + hue_exclude_range;
    var int_max = background_hue + hue_exclude_range + hue_include_range;
    var int_excluding = getRandomBetween(int_min, int_max);
    var hue_excluding = normalise_to_hue(int_excluding)
    return hue_excluding;
}

function normalise_to_hue(orientation) {
    orientation = orientation % 360;
    if (orientation < 0)
    {
        orientation += 360;
    }
    return orientation;
}

function complement_linear(value, max) {
    return max - value;
}

function complement_circular(value) {
    return normalise_to_hue(value + 0.5 * 360)
}

function rgb_with_alpha(original_color_spec, alpha) {
    var original_color = color(original_color_spec);
    return color(original_color.levels[0], original_color.levels[1], original_color.levels[2], alpha)
}

function hsluvToP5Rgb(h, s, l) {
    var rgb = hsluv.hsluvToRgb([h, s, l]);
    return color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

// general helpers

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPosOnCircle(midPosition, radius, rotation, n, index) {
    var angle = (index * TWO_PI / n) + rotation;
    return createVector(
        midPosition.x + radius * cos(angle), 
        midPosition.y + radius * sin(angle)
    );
}

function noisify(x, scale, noiseFactor) {
    seed += 0.01;
    return x + (noise(seed)-0.5) * noiseFactor * scale;
}

function coin_flip(value1, value2) {
    if (Math.random(1) < 0.5) {
        return value1;
    } else {
        return value2;
    }
}

function set_gui_styles() {
    $( "div.qs_title_bar:contains('Global')" ).parent().css({"left": "initial", "right":"20px", "top":"initial", "bottom":"20px"});
    $( "div.qs_title_bar:contains('Stamens')" ).parent().css({"left": "initial", "right":"20px"});
    $( "div.qs_title_bar:contains('Carpel')" ).parent().css({"left": "initial", "right":"240px"});
    $( "div.qs_title_bar:contains('Petals')" ).parent().css({"left": "initial", "left":"240px"});

}