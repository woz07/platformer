const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "Platformer")
engine.SetTargetFPS(60)

var player = {
    x: width / 2,
    y: height / 2,
    radius: 25,
    speed: 5
}

var bot = {
    x: 0,
    y: 0,
    radius: 15,
    speed: 3
}

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing()

    engine.ClearBackground(engine.WHITE)
    engine.DrawCircle(player.x, player.y, player.radius, engine.BLACK);
    // draw bot
    // <-- here

    if (engine.IsKeyDown(0x57)  && player.y != 25) {
        player.y -= player.speed
    }
    if (engine.IsKeyDown(0x53)  && player.y != height - 25) {
        player.y += player.speed
    }
    if (engine.IsKeyDown(0x41)  && player.x != 25) {
        player.x -= player.speed
    }
    if (engine.IsKeyDown(0x44)  && player.x != width - 25) {
        player.y += player.speed
    }
    
    // add bot logic, for bot to move x and y.
    // make it, so that the bot moves towards the player no matter what.
    // you can do this using player.x and player.y, using bot.x and bot.y

    engine.EndDrawing()
}
engine.CloseWindow()

