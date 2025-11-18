# 🦃 Turkey Tetris (Reskin)

A Thanksgiving-themed Tetris game where you'll customize the visuals and sounds!

## Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (Python 3, Node.js http-server, or VS Code Live Server extension)

## Installation & Setup

1. **Clone or download this repository**

2. **Start a local web server** (choose one method):
   
   **Option A: Python 3**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Option B: Node.js http-server**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option C: VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to:
   - `http://localhost:8000`

## Your Tasks (Complete in ~1 hour)

### ✅ Task 1: Replace Block Textures (15 mins)
Replace the default colored squares with Thanksgiving-themed images:

1. Create or find 7 Thanksgiving-themed images (30x30 pixels recommended):
   - `turkey.png`
   - `pumpkin.png`
   - `leaf.png`
   - `pie.png`
   - `corn.png`
   - `acorn.png`
   - `cranberry.png`

2. Save them in the `assets/squares/` folder

3. Refresh your browser - the blocks should now show your images!

**Tip:** If images don't appear, check the browser console (F12) for errors.

### ✅ Task 2: Replace Sound Effects (15 mins)
Add Thanksgiving-themed sound effects:

1. Find or create 3 sound files (`.wav` or `.mp3`):
   - `line_clear.wav` - Plays when a line is cleared
   - `game_over.wav` - Plays when the game ends
   - `move.wav` - Plays when a piece moves

2. Save them in the `sounds/` folder

3. Test by playing the game and triggering each sound

**Tip:** Free sound effects can be found on freesound.org or you can record your own!

### ✅ Task 3: Add "Gobble Gobble!" Sound (20 mins)
Make the game play a special sound when lines are cleared:

1. Create or find a "gobble gobble" turkey sound effect (`.wav` or `.mp3`)

2. Save it as `sounds/gobble.wav`

3. Open `game.js` in your text editor

4. Find the `clearLines()` function (around line 126)

5. Look for the comment that says:
   ```javascript
   // STUDENT TODO: Play "Gobble gobble!" sound here
   ```

6. Add this code below that comment:
   ```javascript
   const gobbleSound = new Audio('sounds/gobble.wav');
   gobbleSound.play();
   ```

7. Save the file and test by clearing a line in the game!

### ✅ Task 4: Test Everything (10 mins)
- [ ] All 7 block textures display correctly
- [ ] Sounds play when moving, clearing lines, and game over
- [ ] "Gobble gobble!" sound plays when clearing lines
- [ ] Game is playable and fun!

## How to Play
- **Arrow Keys**: Move left/right
- **Up Arrow**: Rotate piece
- **Down Arrow**: Soft drop
- **Spacebar**: Hard drop

## File Structure
```
turkey-tetris/
├── index.html          # Main game page
├── game.js             # Game logic (edit for Task 3)
├── assets/
│   └── squares/        # Place your texture images here (Tasks 1)
└── sounds/             # Place your sound files here (Tasks 2 & 3)
```

## Troubleshooting
- **Images not showing?** Make sure filenames match exactly (case-sensitive!)
- **No sound?** Check browser console for errors and ensure files are in correct format
- **Game won't start?** Make sure you're using a local web server, not opening the file directly

## Bonus Challenges (Optional)
- Add a Thanksgiving background image
- Change the color scheme to autumn colors
- Add a "Happy Thanksgiving!" message when you get a high score
- Increase the drop speed as the score increases

Have fun and Happy Thanksgiving! 🦃🍂
