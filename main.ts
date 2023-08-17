let start = 0
let elapesd = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.B, function () {
    elapesd = input.runningTime() - start
    score = Math.abs(elapesd - 7000)
    basic.showNumber(score)
})
