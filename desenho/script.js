/*
Winston just heard from his local health authorities that he should wear a face mask outside, so he coded this one himself.
(You're welcome to spin-off and make Winston a better mask! He still needs masks for Winnifer and Winston JR)
*/

background(255, 0, 0); 
noStroke();

// face
fill(255, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(0, 0, 0);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
fill(255, 0, 0);
ellipse(257, 240, 120, 136);

// elastic
strokeWeight(10);
stroke(161, 161, 161);
line(53, 248, 150, 212);
line(80, 301, 164, 302);

// mask
fill(245, 245, 245);
beginShape();
vertex(154, 207);
vertex(239, 158);
vertex(353, 183);
vertex(337, 302);
vertex(271, 341);
vertex(171, 305);
endShape(CLOSE);

// pleats
stroke(222, 222, 222);
line(187, 228, 247, 199);
line(247, 199, 319, 215);
line(191, 261, 254, 244);
line(254, 244, 315, 252);
line(194, 290, 262, 298);
line(262, 298, 313, 284);
