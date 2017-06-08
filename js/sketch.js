// gui params

var opacity = 220;
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
var hue_exclude_range = 45;
var hue_noise_scale = 100;
var lightness_noise_scale = 50;
var curve_tightness = 0;
var curve_tightnessMin = -10;
var curve_tightnessMax = 10;
var curve_tightnessStep = 0.1;

var rotation = 0;
var rotationMin = 0;
var rotationMax = 2 * Math.PI;
var rotationStep = 0.01 * Math.PI;
var progress = 1;
var progressMin = 0;
var progressMax = 1;
var progressStep = 0.01;

var sepals_amount = 3;
var sepals_amountMin = 3;
var sepals_amountMax = 20;
var sepals_radius = 250;
var sepals_radiusMin = 0;
var sepals_radiusMax = 500;
var sepals_size = 40;
var sepals_sizeMin = 10;
var sepals_sizeMax = 200;
var sepals_c_saturation = 100;
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
var sepals_curve_tightness = 0;
var sepals_curve_tightnessMin = -10;
var sepals_curve_tightnessMax = 10;
var sepals_curve_tightnessStep = 0.1;

var petals_amount = 6;
var petals_amountMin = 3;
var petals_amountMax = 20;
var petals_radius = 150;
var petals_radiusMin = 0;
var petals_radiusMax = 500;
var petals_size = 150;
var petals_sizeMin = 30;
var petals_sizeMax = 200;
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
var petals_noiseFactorMax = 4;
var petals_noiseFactorStep = 0.1;
var petals_curve_tightness = 0;
var petals_curve_tightnessMin = -20;
var petals_curve_tightnessMax = 10;
var petals_curve_tightnessStep = 0.1;

var stamens_amount = 40;
var stamens_amountMin = 5;
var stamens_amountMax = 100;
var stamens_radius = 100;
var stamens_radiusMin = 30;
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
var stamens_curve_tightness = 0;
var stamens_curve_tightnessMin = -10;
var stamens_curve_tightnessMax = 10;
var stamens_curve_tightnessStep = 0.1;

var carpel_amount = 3;
var carpel_amountMin = 3;
var carpel_amountMax = 5;
var carpel_radius;
var carpel_size = 10;
var carpel_sizeMin = 5;
var carpel_sizeMax = 20;
var carpel_c_saturation = 90;
var carpel_c_saturationMin = 0;
var carpel_c_saturationMax = 100;
var carpel_c_lightness = 90;
var carpel_c_lightnessMin = 0;
var carpel_c_lightnessMax = 100;
var carpel_nPoints = 9;
var carpel_nPointsMin = 3;
var carpel_nPointsMax = 10;
var carpel_noiseFactor = 0;
var carpel_noiseFactorMin = 0;
var carpel_noiseFactorMax = 1;
var carpel_noiseFactorStep = 0.1;
var carpel_opacity = 240;
var carpel_curve_tightness = 0;
var carpel_curve_tightnessMin = -10;
var carpel_curve_tightnessMax = 10;
var carpel_curve_tightnessStep = 0.1;

var guiGlobal;
var guiSepals;
var guiPetals;
var guiStamens;
var guiCarpel;
var guis;

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

    guis = [
        guiGlobal,
        guiSepals,
        guiPetals,
        guiStamens,
        guiCarpel,
    ]

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
        'sepals_nPoints',
        'sepals_noiseFactor',
        'sepals_curve_tightness',
    );
    guiPetals.addGlobals(
        'petals_amount',
        'petals_radius',
        'petals_size',
        'petals_nPoints',
        'petals_noiseFactor',
        'petals_curve_tightness',
    );
    guiStamens.addGlobals(
        'stamens_amount',
        'stamens_radius',
        'stamens_size',
        'stamens_nPoints',
        'stamens_noiseFactor',
        'stamens_curve_tightness',
    );
    guiCarpel.addGlobals(
        'carpel_amount',
        // 'carpel_radius',
        'carpel_size',
        'carpel_nPoints',
        // 'carpel_noiseFactor',
        'carpel_curve_tightness',
    );

    set_gui_styles();

    // Don't loop automatically
    noLoop();

    let center = createVector(width / 2, height / 2);
    let settings = get_global_settings();
    myFlower = new Flower(center, settings);
}

function Flower(position, settings) {
    let self = this;
    self.position = position;
    self.settings = settings;

    self.sepals = {};
    self.sepals.color = [
        background_hue, 
        sepals_c_saturation, 
        sepals_c_lightness,
        opacity,
    ];
    
    self.petals = {};
    self.petals.color1 = [
        random_hue_excluding(background_hue, hue_exclude_range),
        petals_c_saturation,
        coin_flip(petals_c_lightness, complement_linear(petals_c_lightness, 100)),
        opacity,
    ];
    self.petals.color2 = [
        normalise_to_hue(noisify(self.petals.color1[0], hue_noise_scale, petals_noiseFactor)),
        petals_c_saturation,
        complement_linear(self.petals.color1[2], 100),
        opacity,
    ];

    self.carpel = {};
    self.carpel.color = [
        complement_circular(self.petals.color1[0]),
        carpel_c_saturation,
        carpel_c_lightness,
        carpel_opacity,
    ];

    self.stamens = {};
    self.stamens.color = [
        complement_circular(self.petals.color1[0]),
        stamens_c_saturation,
        stamens_c_lightness,
        opacity,
    ];

    // Draw Flower
    this.draw = function () {
        curveTightness(curve_tightness)

        self.settings.carpel_radius = self.settings.carpel_size;


        var sepals_positions = 
            _.shuffle(_.range(self.settings.sepals_amount))
            .map(function(value) {
                var sepals_rotation = rotation + Math.PI / self.settings.sepals_amount;
                return getPosOnCircle(self.position, progress * self.settings.sepals_radius, sepals_rotation, self.settings.sepals_amount, value);
            })
            .map(function(value) {
                return get_leaf_positions(value, self.position, progress * self.settings.sepals_size, self.settings.sepals_nPoints, self.settings.sepals_noiseFactor);
            })
            .map(function(value) {
                let sepals_color = [self.sepals.color[0], self.sepals.color[1], noisify(self.sepals.color[2], lightness_noise_scale, self.settings.sepals_noiseFactor), self.sepals.color[3] ];
                curveTightness(self.settings.sepals_curve_tightness);
                draw_leaf_from_pos(value, sepals_color);
                curveTightness(curve_tightness);
                return value;
            });

        // petals
        var petals_center_positions = 
            _.shuffle(_.range(self.settings.petals_amount))
            .map(function(value) {
                return getPosOnCircle(self.position, progress * self.settings.petals_radius, rotation, self.settings.petals_amount, value);
            })
            .map(function(value) {
                let petals_positions1  = get_leaf_positions(value, self.position, progress * self.settings.petals_size, self.settings.petals_nPoints, self.settings.petals_noiseFactor);
                let petals_positions2 = get_leaf_positions(value, self.position, progress * self.settings.petals_size * 0.5, self.settings.petals_nPoints, self.settings.petals_noiseFactor);
                let petals_color1 = [self.petals.color1[0], self.petals.color1[1], noisify(self.petals.color1[2], lightness_noise_scale, 1) * 0.6, self.petals.color1[3] ];
                let petals_color2 = [self.petals.color2[0], self.petals.color2[1], noisify(self.petals.color2[2], lightness_noise_scale, 1) * 0.6, self.petals.color2[3] ];
                curveTightness(self.settings.petals_curve_tightness);
                draw_leaf_from_pos(petals_positions1,  petals_color1);
                draw_leaf_from_pos(petals_positions2,  petals_color2);
                curveTightness(curve_tightness);
            });

        // center level of petals
        var petals_center_positions2 = 
            _.shuffle(_.range(self.settings.petals_amount))
            .map(function(value) {
                let petals2_rotation = rotation + Math.PI / self.settings.petals_amount;
                return getPosOnCircle(self.position, progress * self.settings.petals_radius * 0.66, petals2_rotation, self.settings.petals_amount, value);
            })
            .map(function(value) {
                let petals_positions1  = get_leaf_positions(value, self.position, progress * self.settings.petals_size * 0.8, self.settings.petals_nPoints, self.settings.petals_noiseFactor);
                let petals_positions2 = get_leaf_positions(value, self.position, progress * self.settings.petals_size * 0.5, self.settings.petals_nPoints, self.settings.petals_noiseFactor);
                let interValue = self.position;
                let petals_positions2_interspersed = _.flatMap(petals_positions2, (value, index, array) =>
                     index % 2 == 0 // check for even items
                     ? [value, interValue]
                     : value
                );

                let petals_color1 = [self.petals.color1[0], self.petals.color1[1], noisify(self.petals.color1[2], lightness_noise_scale, 1), self.petals.color1[3] ];
                let petals_color2 = [self.petals.color2[0], self.petals.color2[1], noisify(self.petals.color2[2], lightness_noise_scale, 1), self.petals.color2[3] ];
                curveTightness(self.settings.petals_curve_tightness);
                draw_leaf_from_pos(petals_positions1, petals_color1);
                draw_leaf_from_pos(petals_positions2_interspersed, petals_color2);
                curveTightness(curve_tightness);
                return value;
            });

        var carpel_positions = 
            _.shuffle(_.range(self.settings.carpel_amount))
            .map(function(value) {
                return getPosOnCircle(self.position, progress * self.settings.carpel_radius, rotation, self.settings.carpel_amount, value);
            })
            .map(function(value) {
                return get_leaf_positions(value, self.position, progress * self.settings.carpel_size, self.settings.carpel_nPoints, self.settings.carpel_noiseFactor);
            })
            .map(function(value) {
                let carpel_color = [self.carpel.color[0], self.carpel.color[1], noisify(self.carpel.color[2], lightness_noise_scale, self.settings.carpel_noiseFactor), self.carpel.color[3] ];
                curveTightness(self.settings.carpel_curve_tightness);
                draw_leaf_from_pos(value, carpel_color);
                curveTightness(curve_tightness);
                return value;
            });

        var stamens_positions = 
            _.shuffle(_.range(self.settings.stamens_amount))
            .map(function(value) {
                return getPosOnCircle(self.position, progress * self.settings.stamens_radius, rotation, self.settings.stamens_amount, value);
            })
            .map(function(value) {
                let center_pos_noisified = noisify_pos(value, progress * self.settings.stamens_radius, self.settings.stamens_noiseFactor);
                let center_pos_closer = p5.Vector.lerp(center_pos_noisified, self.position, self.settings.stamens_size/self.settings.stamens_radius);
                let leaf_positions = get_leaf_positions(center_pos_noisified, center_pos_closer, progress * self.settings.stamens_size, self.settings.stamens_nPoints, self.settings.stamens_noiseFactor);
                let stamens_color = [self.stamens.color[0], self.stamens.color[1], noisify(self.stamens.color[2], lightness_noise_scale, self.settings.stamens_noiseFactor*0.5), self.stamens.color[3] ];
                curveTightness(self.settings.stamens_curve_tightness);
                draw_stem(self.position, center_pos_closer, stamens_color, self.settings.stamens_noiseFactor);
                draw_leaf_from_pos(leaf_positions, stamens_color);
                curveTightness(curve_tightness);
                return leaf_positions;
            });

    }
}


// drawing functions

function draw() {
    clear();
    background(hsluvToP5Rgb(background_hue, background_saturation, background_lightness));

    let globalSettings = get_global_settings();
    myFlower.settings = globalSettings;
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

function draw_leaf_from_pos(positions, colorHSLA) {
    fill(hslaToP5RGBA(colorHSLA));
    stroke(hslaToP5RGBA([colorHSLA[0], colorHSLA[1], colorHSLA[2] * 0.3, colorHSLA[3] * 0.3 ]));
    drawSplineLoop(positions);
    noStroke();
    noFill();    
}

function draw_stem(fromPos, toPos, colorHSLA, noiseFactor) {
    stroke(hslaToP5RGBA(colorHSLA));
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

function keyTyped() {
  if (key === 'g') {
    toggleGUIs();
  }
  // uncomment to prevent any default behavior
  // return false;
}

function toggleGUIs() {
    guis.map(value => value.toggleVisibility() );
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

function hslaToP5RGBA(hslaColor) {
    var rgb = hsluv.hsluvToRgb([hslaColor[0], hslaColor[1], hslaColor[2]]);
    return color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255, hslaColor[3]);
}

function p5RgbToHsluv(color) {
    return hsluv.rgbToHsluv([color.levels[0], color.levels[1], color.levels[2]])
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

function get_global_settings() {
    return {
        'sepals_amount': sepals_amount,
        'sepals_radius': sepals_radius,
        'sepals_size': sepals_size,
        'sepals_c_saturation': sepals_c_saturation,
        'sepals_c_lightness': sepals_c_lightness,
        'sepals_nPoints': sepals_nPoints,
        'sepals_noiseFactor': sepals_noiseFactor,
        'sepals_curve_tightness': sepals_curve_tightness,

        'petals_amount': petals_amount,
        'petals_radius': petals_radius,
        'petals_size': petals_size,
        'petals_c_saturation': petals_c_saturation,
        'petals_c_lightness': petals_c_lightness,
        'petals_c2_saturation': petals_c2_saturation,
        'petals_c2_lightness': petals_c2_lightness,
        'petals_nPoints': petals_nPoints,
        'petals_noiseFactor': petals_noiseFactor,
        'petals_curve_tightness': petals_curve_tightness,

        'stamens_amount': stamens_amount,
        'stamens_radius': stamens_radius,
        'stamens_size': stamens_size,
        'stamens_c_hue': stamens_c_hue,
        'stamens_c_saturation': stamens_c_saturation,
        'stamens_c_lightness': stamens_c_lightness,
        'stamens_nPoints': stamens_nPoints,
        'stamens_noiseFactor': stamens_noiseFactor,
        'stamens_curve_tightness': stamens_curve_tightness,

        'carpel_amount': carpel_amount,
        'carpel_radius': carpel_radius,
        'carpel_size': carpel_size,
        'carpel_c_saturation': carpel_c_saturation,
        'carpel_c_lightness': carpel_c_lightness,
        'carpel_nPoints': carpel_nPoints,
        'carpel_noiseFactor': carpel_noiseFactor,
        'carpel_opacity': carpel_opacity,
        'carpel_curve_tightness': carpel_curve_tightness,
    };
}