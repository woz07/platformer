const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "raylib [core] example - basic window")
engine.SetTargetFPS(60)

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing();
    engine.ClearBackground(engine.RAYWHITE)
    engine.DrawText("Congrats! You created your first node-raylib window!", 120, 200, 20, engine.LIGHTGRAY)
    engine.EndDrawing()
}
engine.CloseWindow()