const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "Platformer")
engine.SetTargetFPS(60)

// TODO: add multiple bots and give them all movements !!!!!!!!!!!!!

var hitbox = {
    left: player.x-25,
    top: player.y-25,
    right: player.x+25,
    bottom: player.y+25
}

var player = {
    x: 25,
    y: height - 30,
    radius: 25,
    speed: 5,
    vx: 5,
    vy: 5
}

var bot = {
    x: 15,
    y: 15,
    radius: 15,
    speed: 2.5
}

var bot1 = {
    x: 785, 
    y: 435,
    radius: 15,
    speed: 2.5
} 

const gravity = 1

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing()
    engine.ClearBackground(engine.WHITE)
    //hitbox
    engine.DrawRectangle(player.x - 25, player.y - 25, 50, 50, engine.WHITE)
    //player
    engine.DrawCircle(player.x, player.y, player.radius, engine.BLACK);
    engine.DrawCircle(bot.x, bot.y, bot.radius, engine.RED)
    engine.DrawCircle(bot1.x, bot1.y, bot1.radius, engine.RED)

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

    var distance_x = bot1.x - player.x 
    var distance_y = bot1.y - player.y
    if (distance_x < 0) {
        bot1.x += bot.speed
    } else {
        bot1.x -= bot.speed
    }
    if (distance_y < 0) {
        bot1.y += bot.speed
    } else {
        bot1.y -= bot.speed
    }
    //carry on changing the bots hitting point with the hitbox
    if (bot.x == hitbox.top || bot.x == hitbox.bottom || bot.y == hitbox.left || bot.y == hitbox.right) {
        engine.DrawText("game over", width / 2.2, height / 2.2, 40, engine.BLACK)
        engine.EndDrawing()
        engine.WaitTime(0.75)
        break
    }
    if (bot1.x == hitbox.top || bot1.x == hitbox.bottom || bot1.y == hitbox.left || bot1.y == hitbox.right) {
        engine.DrawText("game over", width / 2.2, height / 2.2, 40, engine.BLACK)
        engine.EndDrawing()
        engine.WaitTime(0.75)
        break
    }
    // make it, so that the bot moves towards the player no matter what.
    // you can do this using player.x and player.y, using bot.x and bot.y

    engine.EndDrawing()
}
engine.CloseWindow()
