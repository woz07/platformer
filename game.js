const engine = require('raylib')

const width = 800
const height = 450
engine.InitWindow(width, height, "Platformer")
engine.SetTargetFPS(60)

var player = {
    x: 25,
    y: height - 30,
    radius: 25,
    speed: 5,
    v: 1,
}

function pog(player, height) {
    if (player.y >= height - player.radius) 
    {
        return 1
    }
    return 0
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

var platform = {
    x: 50,
    y: height - 100,
    width: 100,
    height: 20
}

const gravity = 1.5

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing()
    engine.ClearBackground(engine.BLACK)

    //player
    engine.DrawCircle(player.x, player.y, player.radius, engine.WHITE);

    //platforms
    engine.DrawRectangle(platform.x, platform.y, platform.width, platform.height, engine.RED)

    //bots
    engine.DrawCircle(bot.x, bot.y, bot.radius, engine.RED)
    engine.DrawCircle(bot1.x, bot1.y, bot1.radius, engine.RED)
    
    if (pog (player, height)) {
        player.v = 0
        player.y = height - player.radius

        if (engine.IsKeyPressed(0x57)) { //w
            player.v = -20
        }

    }

    player.y += player.v
    player.v += gravity

//    if (engine.IsKeyDown(0x53)  && player.y != height - 25) { //s
//        player.y += player.speed
//    }
    if (engine.IsKeyDown(0x41)  && player.x != 25) { //a
        player.x -= player.speed
    }
    if (engine.IsKeyDown(0x44)  && player.x != width - 25) { //d
        player.x += player.speed
    }

    // FIX THE GOD DAN PLATFORM FOR GOD SAKE I NEED HELP/SLEEP/MENTAL CHECK!!!!!!!!!!!!!!!
    if (player.y == platform.y + player.radius) {
        player.v = 0
        player.y += player.radius
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
    
    if (bot.x == player.x && bot.y == player.y) {
        engine.DrawText("game over", width / 2.2, height / 2.2, 40, engine.WHITE)
        engine.EndDrawing()
        engine.WaitTime(0.75)
        break
    }
    if (bot1.x == player.x && bot1.y == player.y) {
        engine.DrawText("game over", width / 2.2, height / 2.2, 40, engine.WHITE)
        engine.EndDrawing()
        engine.WaitTime(0.75)
        break
    }
    // make it, so that the bot moves towards the player no matter what.
    // you can do this using player.x and player.y, using bot.x and bot.y

    engine.EndDrawing()
}
engine.CloseWindow()
