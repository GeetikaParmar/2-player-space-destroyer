namespace SpriteKind {
    export const redshipbullet = SpriteKind.create()
    export const blueship = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.blueship, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.player2.changeLifeBy(-1)
})
function create_red_ship () {
    ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
    ship.setFlag(SpriteFlag.StayInScreen, true)
    ship.setPosition(90, 112)
    controller.moveSprite(ship, 100, 100)
    info.setLife(3)
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile_2 = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 8 8 . . . 
. . . 8 8 . . . 
. . . 8 8 . . . 
. . . 8 8 . . . 
`, ship_2, 0, -140)
    projectile_2.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.player2.changeScoreBy(5)
})
info.player2.onLifeZero(function () {
    game.setDialogCursor(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 6 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . 8 6 . . . . . . . 
. . . . . . 8 8 9 8 . . . . . . 
. . . . . . 8 6 9 8 . . . . . . 
. . . . . c c c 8 8 8 . . . . . 
. . . . 8 8 6 6 6 9 8 8 . . . . 
. . 8 f f f c c e e f f 8 8 . . 
. 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
`)
    effects.confetti.startScreenEffect()
    game.over(true)
    effects.confetti.endScreenEffect()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . 2 2 . . . 
. . . 2 2 . . . 
. . . 2 2 . . . 
. . . 2 2 . . . 
`, ship, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
    projectile.setKind(SpriteKind.redshipbullet)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
function create_blue_ship () {
    ship_2 = sprites.create(sprites.space.spaceBlueShip, SpriteKind.Player)
    ship_2.setFlag(SpriteFlag.StayInScreen, true)
    ship_2.setPosition(72, 112)
    controller.player2.moveSprite(ship_2, 100, 100)
    info.player2.setLife(3)
    ship_2.setKind(SpriteKind.blueship)
}
info.onCountdownEnd(function () {
    if (true) {
    	
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.redshipbullet, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(5)
})
info.onLifeZero(function () {
    game.setDialogCursor(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 2 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . e 2 . . . . . . . 
. . . . . . e e 4 e . . . . . . 
. . . . . . e 2 4 e . . . . . . 
. . . . . c c c e e e . . . . . 
. . . . e e 2 2 2 4 e e . . . . 
. . c f f f c c e e f f e e . . 
. c c c c e e 2 2 2 2 4 2 e e . 
c c c c c c e e 2 2 2 4 2 2 e e 
c c c c c c e e 2 2 2 2 4 2 e e 
`)
    effects.confetti.startScreenEffect()
    game.over(true)
    effects.confetti.endScreenEffect()
})
let projectile: Sprite = null
let ship_2: Sprite = null
let projectile_2: Sprite = null
let ship: Sprite = null
let asteroids = [sprites.space.spaceSmallAsteroid1, sprites.space.spaceSmallAsteroid0, sprites.space.spaceAsteroid0, sprites.space.spaceAsteroid1, sprites.space.spaceAsteroid4, sprites.space.spaceAsteroid3]
info.startCountdown(20)
effects.starField.startScreenEffect()
create_red_ship()
create_blue_ship()
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(asteroids[Math.randomRange(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = Math.randomRange(10, 150)
})
