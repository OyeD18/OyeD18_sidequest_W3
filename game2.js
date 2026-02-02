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
function drawGame2() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Stage 1", width / 2, 160);

  textSize(20);
  text(
    "The trees loom over you, their branches rattling in the wind.",
    width / 2,
    210,
  );
  text("The forest is quiet... too quiet.", width / 2, 240);

  textSize(18);
  text("Choose your path.", width / 2, 280);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  const opt1Btn = {
    x: width / 2,
    y: 350,
    w: 340,
    h: 60,
    label: "Follow the narrow trail",
  };

  const opt2Btn = {
    x: width / 2,
    y: 450,
    w: 540,
    h: 60,
    label: "Draw your sword and advance cautiously",
  };

  const opt3Btn = {
    x: width / 2,
    y: 550,
    w: 440,
    h: 60,
    label: "Light a torch to scare off threats",
  };

  // Draw both buttons
  drawGame2Button(opt1Btn);
  drawGame2Button(opt2Btn);
  drawGame2Button(opt3Btn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(opt1Btn) || isHover(opt2Btn) || isHover(opt3Btn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGame2Button({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220); // warm coral on hover

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210); // soft cream base

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function game2MousePressed() {
  // Only trigger the outcome if the button is clicked
  const opt1Btn = { x: width / 2, y: 350, w: 240, h: 80 };
  const opt2Btn = { x: width / 2, y: 450, w: 240, h: 80 };
  const opt3Btn = { x: width / 2, y: 550, w: 240, h: 80 };

  if (isHover(opt1Btn)) {
    currentScreen = "game3";
  } else if (isHover(opt2Btn)) {
    currentScreen = "game3";
  } else if (isHover(opt3Btn)) {
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game2KeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (isHover(opt1Btn)) {
    currentScreen = "game3";
  }

  if (isHover(opt2Btn)) {
    currentScreen = "game3";
  }

  if (isHover(opt3Btn)) {
    currentScreen = "lose";
  }
}
