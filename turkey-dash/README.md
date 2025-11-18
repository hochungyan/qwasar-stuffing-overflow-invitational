# 🦃 Turkey Dash (Browser Runner)

A Thanksgiving-themed endless runner game where you help a turkey avoid obstacles!

## Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (Python 3, Node.js http-server, or VS Code Live Server extension)

## Installation & Setup

1. **Clone or download this repository**

2. **Start a local web server** (choose one method):
   
   **Option A: Python 3**
   ```bash
   cd turkey-dash
   python3 -m http.server 8000
   ```
   
   **Option B: Node.js http-server**
   ```bash
   cd turkey-dash
   npx http-server -p 8000
   ```
   
   **Option C: VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to:
   - `http://localhost:8000`

## Your Tasks (Complete in ~1 hour)

### ✅ Task 1: Add Turkey Runner Sprite (15 mins)
Replace the default turkey shape with a custom sprite:

1. Create or find a turkey sprite image (recommended size: 50x50 pixels or larger)

2. Save it as `assets/turkey_runner.png`

3. Refresh your browser - the runner should now be your turkey image!

**Tip:** An animated sprite sheet can be used for more advanced animation (optional bonus).

### ✅ Task 2: Update Obstacle Images (20 mins)
Add Thanksgiving-themed obstacle images:

1. Create or find 3 obstacle images:
   - `gravy.png` - A gravy puddle (recommended size: 40x30 pixels)
   - `pumpkin.png` - A pumpkin obstacle (recommended size: 50x50 pixels)
   - `pie.png` - A pie obstacle (recommended size: 45x35 pixels)

2. Save them in the `assets/` folder

3. Open `config.js` in your text editor

4. Find the `OBSTACLES` array (around line 16)

5. Verify the obstacle data matches your images:
   ```javascript
   const OBSTACLES = [
       {
           type: 'gravy',
           width: 40,
           height: 30,
           color: '#8B4513',
           image: 'assets/gravy.png'
       },
       // ... more obstacles
   ];
   ```

6. You can adjust `width` and `height` to match your image sizes

7. Refresh and test - obstacles should now show your images!

### ✅ Task 3: Adjust Speed and Gravity (15 mins)
Tune the gameplay feel by adjusting physics:

1. Open `config.js` in your text editor

2. Find the `CONFIG` object at the top

3. Experiment with these values:
   ```javascript
   gravity: 0.6,           // Try: 0.4-0.8 (higher = faster fall)
   jumpStrength: -12,      // Try: -10 to -15 (more negative = higher jump)
   gameSpeed: 6,           // Try: 4-8 (higher = faster game)
   ```

4. Save and refresh after each change

5. Find values that feel challenging but fair!

**Goal:** The turkey should be able to jump over all obstacles with good timing.

### ✅ Task 4: Confirm Score System (10 mins)
Verify the scoring system works correctly:

1. Play the game for at least 30 seconds

2. Confirm that:
   - [ ] Score increases continuously while playing
   - [ ] Score is displayed at the top of the screen
   - [ ] Passing obstacles gives bonus points
   - [ ] Final score is shown in the "Game Over" message

3. **Optional:** Adjust scoring in `config.js`:
   ```javascript
   scoreIncrement: 1,      // Points per frame (increase for faster scoring)
   obstaclePoints: 10      // Bonus points per obstacle (increase for more reward)
   ```

4. Check the browser console (F12) to see if any errors appear

## How to Play
- **SPACEBAR**: Jump (hold for higher jump when grounded)
- **Goal**: Avoid obstacles and survive as long as possible!
- Press **SPACEBAR** after game over to restart

## File Structure
```
turkey-dash/
├── index.html          # Main game page
├── config.js           # Game configuration (edit for Tasks 2 & 3)
├── game.js             # Game logic and physics
└── assets/             # Place your images here (Tasks 1 & 2)
    ├── turkey_runner.png   # Turkey sprite
    ├── gravy.png          # Obstacle sprite
    ├── pumpkin.png        # Obstacle sprite
    └── pie.png            # Obstacle sprite
```

## Troubleshooting
- **Images not showing?** Check browser console (F12) for errors and verify file names match exactly
- **Game won't start?** Ensure you're using a local web server
- **Jump feels wrong?** Adjust `gravity` and `jumpStrength` in `config.js`
- **Too easy/hard?** Adjust `gameSpeed` and `obstacleFrequency` in `config.js`
- **Obstacles spawn too close?** Increase `minObstacleGap` in `config.js`

## Bonus Challenges (Optional)
- Add sound effects for jumping and collisions
- Add a background parallax scrolling effect
- Create multiple difficulty levels
- Add power-ups (invincibility, slow-motion, double points)
- Track and display high score using localStorage
- Add animated sprite frames for running turkey
- Add clouds and scenery in the background
- Make obstacles spawn in patterns

Have fun running from dinner! 🦃🏃‍♂️
