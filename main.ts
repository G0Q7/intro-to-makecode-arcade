controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.coolRadial)
})
let mySprite: Sprite = null
scene.setBackgroundColor(0)
game.splash("These blocks are in your workspace!")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, randint(100, 600))
