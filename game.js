const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "Platformer")
engine.SetTargetFPS(60)

// TODO: add multiple bots and give them all movements !!!!!!!!!!!!!

var player = {
    x: width / 2,
    y: height / 2,
    radius: 25,
    speed: 5
}

var bot = {
    x: 15,
    y: 15,
    radius: 15,
    speed: 2.5
}

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing()

    engine.ClearBackground(engine.WHITE)
    engine.DrawCircle(player.x, player.y, player.radius, engine.BLACK);
    // draw bot
    engine.DrawCircle(bot.x, bot.y, bot.radius, engine.RED)

    if (engine.IsKeyDown(0x57)  && player.y != 25) { //w
        player.y -= player.speed
    }
    if (engine.IsKeyDown(0x53)  && player.y != height - 25) { //s
        player.y += player.speed
    }
    if (engine.IsKeyDown(0x41)  && player.x != 25) { //a
        player.x -= player.speed
    }
    if (engine.IsKeyDown(0x44)  && player.x != width - 25) { //d
        player.x += player.speed
    }
    
    if (engine.IsKeyPressed(0x1B)) {
        engine.EndDrawing()
        break
    }

    // add bot logic, for bot to move x and y.
    var distance_x = bot.x - player.x
    var distance_y = bot.y - player.y
    if (distance_x < 0) {
        bot.x += bot.speed
    } else {
        bot.x -= bot.speed
    }
    if (distance_y < 0) {
        bot.y += bot.speed
    } else {
        bot.y -= bot.speed
    }
    
    if (bot.x == player.x && bot.y == player.y) {
        engine.DrawText("game over", width / 2, height / 2, 20, engine.GREEN)
        engine.EndDrawing()
        engine.WaitTime(2.5)
        break
    }
    // make it, so that the bot moves towards the player no matter what.
    // you can do this using player.x and player.y, using bot.x and bot.y

    engine.EndDrawing()
}
engine.CloseWindow()
