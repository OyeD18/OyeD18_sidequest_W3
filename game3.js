// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame3() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Stage 2", width / 2, 160);

  textSize(20);
  text(
    "As you progress the forest grows darker. You hear rustling in the bushes.",
    width / 2,
    210,
  );
  text("You are not alone", width / 2, 240);
  textSize(18);
  text("Choose your path.", width / 2, 280);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  const opt1Btn = {
    x: width / 2,
    y: 360,
    w: 550,
    h: 60,
    label: "Cross the old wooden bridge over a ravine",
  };

  const opt2Btn = {
    x: width / 2,
    y: 460,
    w: 440,
    h: 60,
    label: "Hide and wait for danger to pass",
  };

  const opt3Btn = {
    x: width / 2,
    y: 560,
    w: 440,
    h: 60,
    label: "Charge forward, weapon raised",
  };

  const opt4Btn = {
    x: width / 2,
    y: 660,
    w: 400,
    h: 60,
    label: "Turn back while you still can",
  };

  // Draw both buttons
  drawGame3Button(opt1Btn);
  drawGame3Button(opt2Btn);
  drawGame3Button(opt3Btn);
  drawGame3Button(opt4Btn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over =
    isHover(opt1Btn) ||
    isHover(opt2Btn) ||
    isHover(opt3Btn) ||
    isHover(opt4Btn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGame3Button({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  if (hover) {
    fill(170, 210, 255, 220);

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(150, 200, 255);
  } else {
    fill(200, 225, 255, 200);

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(210, 220, 235);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;
  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function game3MousePressed() {
  // Only trigger the outcome if the button is clicked
  const opt1Btn = { x: width / 2, y: 360, w: 240, h: 80 };
  const opt2Btn = { x: width / 2, y: 460, w: 240, h: 80 };
  const opt3Btn = { x: width / 2, y: 560, w: 240, h: 80 };
  const opt4Btn = { x: width / 2, y: 660, w: 240, h: 80 };

  if (isHover(opt1Btn)) {
    currentScreen = "game4";
  } else if (isHover(opt2Btn)) {
    currentScreen = "lose";
  } else if (isHover(opt3Btn)) {
    currentScreen = "game4";
  } else if (isHover(opt4Btn)) {
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game3KeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (isHover(opt1Btn)) {
    currentScreen = "game4";
  }

  if (isHover(opt2Btn)) {
    currentScreen = "lose";
  }

  if (isHover(opt3Btn)) {
    currentScreen = "game4";
  }

  if (isHover(opt4Btn)) {
    currentScreen = "lose";
  }
}
