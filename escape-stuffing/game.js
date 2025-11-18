let maze;
let player;
let gameState = 'playing'; // 'playing', 'won', 'lost'
let startTime;
let remainingTime;

// STUDENT TODO: Add turkey sprite image
let turkeyImg;

function preload() {
    // Try to load turkey sprite
    try {
        turkeyImg = loadImage('assets/turkey.png',
            () => console.log('Turkey sprite loaded'),
            () => { 
                console.log('Turkey sprite not found, using fallback shape'); 
                turkeyImg = null; 
            }
        );
    } catch (e) {
        console.log('Error loading turkey sprite:', e);
        turkeyImg = null;
    }
}

function setup() {
    let canvas = createCanvas(
        MAZE_CONFIG.cols * MAZE_CONFIG.cellSize + 200,
        MAZE_CONFIG.rows * MAZE_CONFIG.cellSize + 100
    );
    canvas.parent('game-container');
    
    // Generate maze
    maze = new Maze(MAZE_CONFIG.rows, MAZE_CONFIG.cols);
    
    // Initialize player at start (top-left)
    player = {
        row: 0,
        col: 0,
        targetRow: MAZE_CONFIG.rows - 1,
        targetCol: MAZE_CONFIG.cols - 1
    };
    
    // Start timer
    startTime = millis();
    remainingTime = MAZE_CONFIG.timeLimit;
    
    textFont('Arial');
}

function draw() {
    background(240, 230, 210);
    
    // Update timer
    if (gameState === 'playing') {
        remainingTime = MAZE_CONFIG.timeLimit - floor((millis() - startTime) / 1000);
        
        if (remainingTime <= 0) {
            remainingTime = 0;
            gameState = 'lost';
        }
    }
    
    // Center maze on canvas
    let offsetX = 50;
    let offsetY = 50;
    
    push();
    translate(offsetX, offsetY);
    
    // Draw maze
    drawMaze();
    
    // Draw goal
    drawGoal();
    
    // Draw player
    drawPlayer();
    
    pop();
    
    // Draw HUD
    drawHUD(offsetX, offsetY);
    
    // Draw game over messages
    if (gameState === 'won') {
        drawWinMessage();
    } else if (gameState === 'lost') {
        drawLoseMessage();
    }
}

function drawMaze() {
    stroke(139, 69, 19);
    strokeWeight(3);
    
    for (let r = 0; r < maze.rows; r++) {
        for (let c = 0; c < maze.cols; c++) {
            let cell = maze.grid[r][c];
            let x = c * MAZE_CONFIG.cellSize;
            let y = r * MAZE_CONFIG.cellSize;
            
            // STUDENT TODO: Customize maze cell appearance (stuffing texture)
            // Draw cell background with stuffing-like color
            noStroke();
            fill(210, 180, 140); // Tan color for stuffing
            rect(x, y, MAZE_CONFIG.cellSize, MAZE_CONFIG.cellSize);
            
            // Add texture dots to look like stuffing
            fill(180, 150, 110);
            for (let i = 0; i < 3; i++) {
                let dx = random(5, MAZE_CONFIG.cellSize - 5);
                let dy = random(5, MAZE_CONFIG.cellSize - 5);
                ellipse(x + dx, y + dy, 3, 3);
            }
            
            // Draw walls
            stroke(139, 69, 19);
            strokeWeight(3);
            
            if (cell.walls.top) {
                line(x, y, x + MAZE_CONFIG.cellSize, y);
            }
            if (cell.walls.right) {
                line(x + MAZE_CONFIG.cellSize, y, 
                     x + MAZE_CONFIG.cellSize, y + MAZE_CONFIG.cellSize);
            }
            if (cell.walls.bottom) {
                line(x, y + MAZE_CONFIG.cellSize, 
                     x + MAZE_CONFIG.cellSize, y + MAZE_CONFIG.cellSize);
            }
            if (cell.walls.left) {
                line(x, y, x, y + MAZE_CONFIG.cellSize);
            }
        }
    }
}

function drawGoal() {
    let x = player.targetCol * MAZE_CONFIG.cellSize;
    let y = player.targetRow * MAZE_CONFIG.cellSize;
    
    // Pulsing green goal
    let pulse = sin(millis() / 200) * 20 + 200;
    fill(50, pulse, 50, 150);
    noStroke();
    rect(x + 5, y + 5, MAZE_CONFIG.cellSize - 10, MAZE_CONFIG.cellSize - 10);
    
    // Goal text
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text('EXIT', x + MAZE_CONFIG.cellSize / 2, y + MAZE_CONFIG.cellSize / 2);
}

function drawPlayer() {
    let x = player.col * MAZE_CONFIG.cellSize + MAZE_CONFIG.cellSize / 2;
    let y = player.row * MAZE_CONFIG.cellSize + MAZE_CONFIG.cellSize / 2;
    let size = MAZE_CONFIG.cellSize * 0.7;
    
    if (turkeyImg && turkeyImg.width > 0) {
        // Draw turkey image
        imageMode(CENTER);
        image(turkeyImg, x, y, size, size);
    } else {
        // Fallback: draw simple turkey
        noStroke();
        
        // Body
        fill(139, 69, 19);
        ellipse(x, y, size * 0.8, size * 0.8);
        
        // Head
        fill(160, 82, 45);
        ellipse(x + size * 0.25, y - size * 0.15, size * 0.4, size * 0.4);
        
        // Eye
        fill(0);
        ellipse(x + size * 0.3, y - size * 0.15, size * 0.1, size * 0.1);
        
        // Beak
        fill(255, 165, 0);
        triangle(x + size * 0.4, y - size * 0.15,
                x + size * 0.5, y - size * 0.1,
                x + size * 0.4, y - size * 0.1);
        
        // Tail feathers
        fill(165, 42, 42);
        for (let i = 0; i < 5; i++) {
            let angle = map(i, 0, 4, -PI/4, PI/4);
            push();
            translate(x - size * 0.3, y);
            rotate(angle);
            ellipse(-size * 0.2, 0, size * 0.15, size * 0.4);
            pop();
        }
    }
}

function drawHUD(offsetX, offsetY) {
    let hudY = offsetY + MAZE_CONFIG.rows * MAZE_CONFIG.cellSize + 20;
    
    textAlign(LEFT);
    textSize(20);
    fill(51);
    
    // Timer (STUDENT TODO: Confirm countdown timer is visible)
    let timerColor = remainingTime < 10 ? color(220, 20, 60) : color(51);
    fill(timerColor);
    text(`Time: ${remainingTime}s`, offsetX, hudY);
    
    // Position
    fill(51);
    text(`Position: (${player.row}, ${player.col})`, offsetX + 200, hudY);
    
    // Goal
    text(`Goal: (${player.targetRow}, ${player.targetCol})`, offsetX + 400, hudY);
}

function drawWinMessage() {
    push();
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);
    
    fill(255, 215, 0);
    stroke(0);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(48);
    text('🎉 YOU ESCAPED! 🎉', width / 2, height / 2 - 40);
    
    textSize(24);
    fill(255);
    let timeSpent = MAZE_CONFIG.timeLimit - remainingTime;
    text(`Time: ${timeSpent} seconds`, width / 2, height / 2 + 20);
    text('Press R to play again', width / 2, height / 2 + 60);
    pop();
}

function drawLoseMessage() {
    push();
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);
    
    fill(220, 20, 60);
    stroke(0);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(48);
    text('⏰ TIME\'S UP! ⏰', width / 2, height / 2 - 40);
    
    textSize(24);
    fill(255);
    text('You got caught in the stuffing!', width / 2, height / 2 + 20);
    text('Press R to try again', width / 2, height / 2 + 60);
    pop();
}

function keyPressed() {
    if (gameState !== 'playing') {
        if (key === 'r' || key === 'R') {
            // Restart game
            setup();
        }
        return;
    }
    
    let moved = false;
    
    // STUDENT TODO: Confirm arrow key controls work
    if (keyCode === UP_ARROW) {
        if (maze.canMove(player.row, player.col, 'up')) {
            player.row--;
            moved = true;
        }
    } else if (keyCode === DOWN_ARROW) {
        if (maze.canMove(player.row, player.col, 'down')) {
            player.row++;
            moved = true;
        }
    } else if (keyCode === LEFT_ARROW) {
        if (maze.canMove(player.row, player.col, 'left')) {
            player.col--;
            moved = true;
        }
    } else if (keyCode === RIGHT_ARROW) {
        if (maze.canMove(player.row, player.col, 'right')) {
            player.col++;
            moved = true;
        }
    }
    
    // Check if player reached goal
    if (moved && player.row === player.targetRow && player.col === player.targetCol) {
        gameState = 'won';
    }
}
