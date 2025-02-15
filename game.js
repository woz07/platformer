const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "raylib [core] example - basic window")
engine.SetTargetFPS(60)

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing()

    engine.ClearBackground(engine.WHITE)
    engine.DrawCircle(width / 2, height / 2, 25, engine.BLACK);
    
    engine.EndDrawing()
}
engine.CloseWindow()