const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "raylib [core] example - basic window")
engine.SetTargetFPS(60)
var player_x = width / 2
var player_y = height / 2
var player_speed = 5

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing()

    engine.ClearBackground(engine.WHITE)
    engine.DrawCircle(player_x, player_y, 25, engine.BLACK);
    if (engine.IsKeyDown(0x57)) {
        player_y = player_y - player_speed
    }
    if (engine.IsKeyDown(0x53)) {
        player_y = player_y + player_speed
    }
    if (engine.IsKeyDown(0x41)) {
        player_x = player_x - player_speed
    }
    if (engine.IsKeyDown(0x44)) {
        player_x = player_x + player_speed
    }

    engine.EndDrawing()
}
engine.CloseWindow()

// Checks if player is within bounds
function isInBounds() {
    // Something about player_x & player_y and width & height.
    // If you press W while being at y=0, should you continue moving upwards?
}