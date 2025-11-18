# 🦃 Escape the Stuffing (Maze Game)

Help the turkey escape from a procedurally generated maze before time runs out!

## Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (Python 3, Node.js http-server, or VS Code Live Server extension)

## Installation & Setup

1. **Clone or download this repository**

2. **Start a local web server** (choose one method):
   
   **Option A: Python 3**
   ```bash
   cd escape-stuffing
   python3 -m http.server 8000
   ```
   
   **Option B: Node.js http-server**
   ```bash
   cd escape-stuffing
   npx http-server -p 8000
   ```
   
   **Option C: VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to:
   - `http://localhost:8000`

## Your Tasks (Complete in ~1 hour)

### ✅ Task 1: Confirm Maze is 10×10 (10 mins)
Verify and adjust the maze size if needed:

1. Open `maze.js` in your text editor

2. Find the `MAZE_CONFIG` object at the top (around line 2)

3. Confirm these values:
   ```javascript
   rows: 10,           // Should be 10
   cols: 10,           // Should be 10
   ```

4. If they're not 10, change them to 10

5. Save and refresh your browser

6. Count the cells to verify the maze is exactly 10 rows by 10 columns

**Note:** Each time you refresh, a new random maze is generated!

### ✅ Task 2: Customize Maze Tiles (Stuffing Look) (20 mins)
Make the maze look like stuffing:

1. Open `game.js` in your text editor

2. Find the `drawMaze()` function (around line 87)

3. Look for the comment that says:
   ```javascript
   // STUDENT TODO: Customize maze cell appearance (stuffing texture)
   ```

4. The current code already adds a stuffing-like texture with tan colors and dots

5. **Customize it further:**
   - Change the `fill(210, 180, 140)` color to your preferred stuffing color
   - Adjust the texture dots color: `fill(180, 150, 110)`
   - Change the number of dots: `for (let i = 0; i < 3; i++)` (try 5-8 for more texture)
   - Adjust dot sizes: `ellipse(x + dx, y + dy, 3, 3)` (try 2-5)

6. Save and refresh to see your changes!

**Bonus:** You can also add a stuffing texture image instead of procedural texture (advanced).

### ✅ Task 3: Add Turkey Player Sprite (20 mins)
Replace the default turkey shape with a custom sprite:

1. Create or find a turkey sprite image (recommended size: 40x40 pixels or larger)

2. Save it as `assets/turkey.png`

3. Refresh your browser - the player should now be your turkey image!

4. If the image is too large or small, adjust it in `game.js`:
   - Find the `drawPlayer()` function (around line 135)
   - Locate this line: `let size = MAZE_CONFIG.cellSize * 0.7;`
   - Adjust the `0.7` value (try 0.5-0.9) to resize the turkey

**Tip:** A transparent PNG works best for the turkey sprite.

### ✅ Task 4: Confirm Countdown Timer & Controls (10 mins)
Verify the game mechanics work correctly:

1. **Test the countdown timer:**
   - [ ] Timer is visible in the HUD at the bottom
   - [ ] Timer counts down from 60 seconds (or your configured time)
   - [ ] Timer turns red when below 10 seconds
   - [ ] "TIME'S UP!" message appears when timer reaches 0

2. **Test arrow key controls:**
   - [ ] UP arrow moves turkey up (when path is clear)
   - [ ] DOWN arrow moves turkey down (when path is clear)
   - [ ] LEFT arrow moves turkey left (when path is clear)
   - [ ] RIGHT arrow moves turkey right (when path is clear)
   - [ ] Turkey cannot move through walls

3. **Test win condition:**
   - [ ] Navigate to the green EXIT cell (bottom-right corner)
   - [ ] "YOU ESCAPED!" message appears
   - [ ] Time spent is displayed
   - [ ] Press R to restart with a new maze

4. **Optional:** Adjust time limit in `maze.js`:
   ```javascript
   timeLimit: 60       // Change to 30 for harder, 90 for easier
   ```

## How to Play
- **ARROW KEYS**: Move the turkey through the maze
- **Goal**: Reach the green EXIT cell before time runs out!
- **R Key**: Restart with a new random maze after game ends

## File Structure
```
escape-stuffing/
├── index.html          # Main game page
├── maze.js             # Maze generation logic (edit for Task 1)
├── game.js             # Game logic and rendering (edit for Tasks 2 & 3)
└── assets/             # Place your images here (Task 3)
    └── turkey.png      # Turkey player sprite
```

## Troubleshooting
- **Maze not 10×10?** Check `MAZE_CONFIG.rows` and `MAZE_CONFIG.cols` in `maze.js`
- **Turkey image not showing?** Verify filename is exactly `turkey.png` (case-sensitive)
- **Can't move?** Make sure you're not trying to move through walls
- **Timer not visible?** Check browser console (F12) for errors
- **Game won't start?** Ensure you're using a local web server

## Understanding the Maze Algorithm
This game uses **recursive backtracking** to generate mazes:
1. Starts at top-left corner
2. Randomly visits unvisited neighbors
3. Carves paths by removing walls
4. Backtracks when stuck
5. Results in a perfect maze (one solution path, no loops)

## Bonus Challenges (Optional)
- Add collectible items (cranberries, corn) scattered in the maze
- Implement multiple difficulty levels with different maze sizes
- Add enemy turkeys that patrol the maze
- Create a mini-map in the corner
- Add sound effects for movement and time warnings
- Track best completion times
- Add a hint system that shows the optimal path
- Create custom maze patterns instead of random generation
- Add power-ups (extra time, wall breaker, speed boost)

Have fun escaping the stuffing! 🦃🏃‍♂️
