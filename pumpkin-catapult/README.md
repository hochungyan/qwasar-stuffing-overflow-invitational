# 🎃 Pumpkin Catapult Physics Game

Launch pumpkins from a catapult to hit Thanksgiving-themed targets!

## Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (Python 3, Node.js http-server, or VS Code Live Server extension)

## Installation & Setup

1. **Clone or download this repository**

2. **Start a local web server** (choose one method):
   
   **Option A: Python 3**
   ```bash
   cd pumpkin-catapult
   python3 -m http.server 8000
   ```
   
   **Option B: Node.js http-server**
   ```bash
   cd pumpkin-catapult
   npx http-server -p 8000
   ```
   
   **Option C: VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to:
   - `http://localhost:8000`

## Your Tasks (Complete in ~1 hour)

### ✅ Task 1: Add Pumpkin Projectile Sprite (15 mins)
Replace the default orange circle with a pumpkin image:

1. Create or find a pumpkin image (recommended size: 40x40 pixels or larger)

2. Save it as `assets/pumpkin.png`

3. Refresh your browser - the projectile should now be a pumpkin!

**Tip:** Make sure the image has a transparent background for best results.

### ✅ Task 2: Add Target Images (15 mins)
Customize the targets with Thanksgiving-themed images:

1. Create or find target images:
   - `turkey.png` (recommended size: 60x80 pixels)
   - `barn.png` (recommended size: 100x100 pixels)

2. Save them in the `assets/` folder

3. Refresh and test - targets should now show your images!

**Optional:** You can add more targets by editing the `targets` array in `game.js`.

### ✅ Task 3: Adjust Angle and Power Ranges (20 mins)
Tune the gameplay by adjusting launch parameters:

1. Open `game.js` in your text editor

2. Find the `CONFIG` object at the top of the file (lines 1-9)

3. Experiment with these values to make the game more fun:
   ```javascript
   minAngle: 10,        // Try: 0-30
   maxAngle: 80,        // Try: 60-90
   minPower: 5,         // Try: 3-10
   maxPower: 25,        // Try: 20-30
   gravity: 0.3,        // Try: 0.2-0.5
   targetDistance: 400  // Not used yet, for future features
   ```

4. Save and refresh to test your changes

5. Adjust until you find a good balance of challenge and fun!

**Goal:** Make it possible to hit both targets with different angle/power combinations.

### ✅ Task 4: Confirm Hit Detection (10 mins)
Verify that the game properly detects hits:

1. Launch pumpkins at each target

2. Confirm that:
   - [ ] Score increases by 100 points when you hit a target
   - [ ] Hit targets disappear from the screen
   - [ ] "ALL TARGETS HIT!" message appears when both targets are destroyed
   - [ ] Console logs "Hit!" when collision is detected (press F12 to see console)

3. If hit detection is too hard or too easy, adjust the collision detection:
   - In `game.js`, find the `updateProjectile()` function (around line 165)
   - Adjust the collision radius values (currently `target.w/2 + 15` and `target.h/2 + 15`)
   - Increase the `+ 15` to make hits easier, decrease to make them harder

## How to Play
- **UP/DOWN Arrow Keys**: Adjust launch angle
- **LEFT/RIGHT Arrow Keys**: Adjust launch power
- **SPACEBAR**: Launch the pumpkin!

Try to hit both targets with the fewest launches possible!

## File Structure
```
pumpkin-catapult/
├── index.html          # Main game page
├── game.js             # Game logic and physics (edit for Tasks 3 & 4)
└── assets/             # Place your images here (Tasks 1 & 2)
    ├── pumpkin.png     # Projectile sprite
    ├── turkey.png      # Target sprite
    └── barn.png        # Target sprite
```

## Troubleshooting
- **Images not showing?** Check the browser console (F12) for errors
- **Game won't start?** Ensure you're using a local web server, not opening file directly
- **Physics feels wrong?** Adjust gravity and power values in CONFIG
- **Targets too hard to hit?** Increase collision detection radius or increase maxPower

## Bonus Challenges (Optional)
- Add a third target (haystack, cornucopia, pie, etc.)
- Add sound effects for launch and hit
- Add a trail effect behind the flying pumpkin
- Create a wind system that affects projectile flight
- Add different difficulty levels
- Track high scores using localStorage

Have fun launching pumpkins! 🎃🦃
