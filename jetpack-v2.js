// rework by voxframeworks
ModAPI.require("player");

var flyingUp = false; // 1. Variable to remember if key is held

// 2. Detect Key Press and Release
ModAPI.addEventListener("key", (event) => {
  if (event.key === 35) { // 'H' key
    if (event.action === 1) { // 1 = Key Down (Pressed)
        flyingUp = true;
    } else if (event.action === 0) { // 0 = Key Up (Released)
        flyingUp = false;
    }
  }
});

// 3. Apply movement every frame
ModAPI.addEventListener("update", () => {
    if (flyingUp) {
        // Setting velocity to 0.5 overrides gravity
        ModAPI.player.motionY = 0.5; 
    }
});
