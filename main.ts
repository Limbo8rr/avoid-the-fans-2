scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fan3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    currentTime = blockSettings.readNumber("highest \"Time\" score")
    console.log(currentTime)
    if (countdownTime - game.runtime() > 0 || !(currentTime)) {
        console.log("hi")
        blockSettings.writeNumber("highest \"Time\" score", countdownTime - game.runtime())
    }
    console.log(blockSettings.readNumber("highest \"Time\" score"))
    game.over(true)
})
let currentTime = 0
let countdownTime = 0
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
let Jerry = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(Jerry, 150, 150)
tiles.placeOnRandomTile(Jerry, assets.tile`stage`)
scene.cameraFollowSprite(Jerry)
countdownTime = 30
info.startCountdown(countdownTime)
