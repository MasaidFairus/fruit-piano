input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Skull)
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Meh)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
