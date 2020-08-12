var bullet, wall
var speed, weight
var thickness = random(22, 83);

function setup() {
    createCanvas(1600,400);

    bullet = createSprite(50,200,50,50);
    wall = createSprite(1200,200,thickness,height/2);

    speed = random(223,321);
    weight = random(30,52);
}

function draw() {
    bakground(0,0,0);

    car.velocityX = speed;

    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
        bullet.velocityX = 0;
        var deformation = 0.5 * weight * speed* speed/22509;
        if(deformation > 180){
            car.shapeColor = color(255,0,0);
        }
        if(deformation < 180 && deformation > 100){
            car.shapeColor = color(230,230,0);
        }
        if(deformation < 100){
            car.shapeColor = color(0,255,0);
        }
    }

    drawSprites();
}
