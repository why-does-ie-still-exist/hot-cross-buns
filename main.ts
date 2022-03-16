input.onButtonPressed(Button.A, function () {
    happyFace()
    hotCrossBuns()
    basic.clearScreen()
    basic.showString("Cool!")
    happyFace()
})
function hotCrossBuns () {
    music.setTempo(240)
    music.playMelody("E - D - C - - - ", 240)
    music.playMelody("E - D - C - - - ", 240)
    music.playMelody("C - C - C - C - ", 240)
    music.playMelody("D - D - D - D - ", 240)
    music.playMelody("E E - - D D - - ", 240)
    music.playTone(262, music.beat(BeatFraction.Double))
}
function happyFace () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
happyFace()
hotCrossBuns()
