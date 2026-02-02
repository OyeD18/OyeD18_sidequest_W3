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
function drawGame4() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Boss Stage", width / 2, 160);

  textSize(20);
  text("Your journey draws to an end.", width / 2, 210);
  text("Thegreen dragon JAXANAEDEGOR await you.", width / 2, 240);
  text("The final battle begins.", width / 2, 270);
  text("There is no retreat.", width / 2, 300);
  textSize(18);
  text("Choose your path.", width / 2, 340);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  const opt1Btn = {
    x: width / 2,
    y: 420,
    w: 390,
    h: 60,
    label: "Strike wildly with brute force",
  };

  const opt2Btn = {
    x: width / 2,
    y: 520,
    w: 660,
    h: 60,
    label: "Defend with all your might and wait for an opening",
  };

  const opt3Btn = {
    x: width / 2,
    y: 620,
    w: 500,
    h: 60,
    label: "Call upon honor and charge head-on",
  };

  const opt4Btn = {
    x: width / 2,
    y: 720,
    w: 360,
    h: 60,
    label: "Attempt forbidden magic.",
  };

  const opt5Btn = {
    x: width / 2,
    y: 820,
    w: 620,
    h: 60,
    label: "Be strategic: feint, dodge, then counterattack",
  };

  // Draw both buttons
  drawGame4Button(opt1Btn);
  drawGame4Button(opt2Btn);
  drawGame4Button(opt3Btn);
  drawGame4Button(opt4Btn);
  drawGame4Button(opt5Btn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over =
    isHover(opt1Btn) ||
    isHover(opt2Btn) ||
    isHover(opt3Btn) ||
    isHover(opt4Btn) ||
    isHover(opt5Btn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGame4Button({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  if (hover) {
    fill(180, 225, 190, 220);

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(150, 210, 170);
  } else {
    fill(205, 235, 215, 200);

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(200, 220, 205);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

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
function game4MousePressed() {
  // Only trigger the outcome if the button is clicked
  const opt1Btn = { x: width / 2, y: 420, w: 240, h: 80 };
  const opt2Btn = { x: width / 2, y: 520, w: 240, h: 80 };
  const opt3Btn = { x: width / 2, y: 620, w: 240, h: 80 };
  const opt4Btn = { x: width / 2, y: 720, w: 240, h: 80 };
  const opt5Btn = { x: width / 2, y: 820, w: 240, h: 80 };

  if (isHover(opt1Btn)) {
    currentScreen = "lose";
  } else if (isHover(opt2Btn)) {
    triggerRandomOutcome();
  } else if (isHover(opt3Btn)) {
    currentScreen = "lose";
  } else if (isHover(opt4Btn)) {
    currentScreen = "lose";
  } else if (isHover(opt5Btn)) {
    triggerRandomOutcome();
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function game4KeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (isHover(opt1Btn)) {
    currentScreen = "lose";
  }

  if (isHover(opt2Btn)) {
    triggerRandomOutcome();
  }

  if (isHover(opt3Btn)) {
    currentScreen = "lose";
  }

  if (isHover(opt4Btn)) {
    currentScreen = "lose";
  }

  if (isHover(opt5Btn)) {
    triggerRandomOutcome();
  }
}

// ------------------------------
// Game logic: win or lose
// ------------------------------
// This function decides what happens next in the game.
// It does NOT draw anything.
function triggerRandomOutcome() {
  // random() returns a value between 0 and 1
  // Here we use a 50/50 chance:
  // - less than 0.5 → win
  // - 0.5 or greater → lose
  //
  // You can bias this later, for example:
  // random() < 0.7 → 70% chance to win
  if (random() < 0.7) {
    currentScreen = "win";
  } else {
    currentScreen = "lose";
  }
}
