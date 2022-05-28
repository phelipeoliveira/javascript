noStroke();
var xPos = 468;
var yPos = 26;

draw = function() {
    background(29, 40, 115);
    fill(156, 139, 139);
    rect(2, 202, 136, 196);
    fill(0, 0, 0);
    rect(25, 247, 20,19);
    rect(91, 247, 20,19);
    rect(25, 295, 20,19);
    rect(91, 295, 20,19);
    rect(25, 347, 20,19);
    rect(91, 347, 20,19);
    fill(156, 139, 139);
    rect(142, 286, 151, 111);
    fill(92, 58, 58);
    rect(192, 336, 50, 76, 100);
    fill(125, 85, 85);
    ellipse(232, 365, 15, 15);
    
    
    fill(255, 255, 255);
    ellipse(84, 71, 10, 10);
    ellipse(278, 54, 10, 10);
    ellipse(169, 100, 10, 10);
    ellipse(220, 135, 10, 10);
    ellipse(330, 71, 10, 10);
    ellipse(224, 165, 10, 10);
    ellipse(331, 100, 10, 10);
    
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    xPos-=5;
    yPos+=5;
};
