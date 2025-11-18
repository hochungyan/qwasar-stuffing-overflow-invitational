// STUDENT TODO: Adjust these values to tune the gameplay
const CONFIG = {
    // Runner physics
    gravity: 0.6,           // How fast the turkey falls (higher = faster fall)
    jumpStrength: -12,      // How high the turkey jumps (more negative = higher)
    
    // Game speed
    gameSpeed: 6,           // How fast obstacles move (higher = faster game)
    speedIncrease: 0.001,   // How much speed increases over time
    
    // Obstacle settings
    obstacleFrequency: 120, // Frames between obstacles (lower = more frequent)
    minObstacleGap: 80,     // Minimum frames between obstacles
    
    // Scoring
    scoreIncrement: 1,      // Points per frame survived
    obstaclePoints: 10      // Bonus points for passing an obstacle
};

// STUDENT TODO: Customize obstacles with Thanksgiving themes
const OBSTACLES = [
    {
        type: 'gravy',
        width: 40,
        height: 30,
        color: '#8B4513',
        image: 'assets/gravy.png'
    },
    {
        type: 'pumpkin',
        width: 50,
        height: 50,
        color: '#FF8C00',
        image: 'assets/pumpkin.png'
    },
    {
        type: 'pie',
        width: 45,
        height: 35,
        color: '#D2691E',
        image: 'assets/pie.png'
    }
];
