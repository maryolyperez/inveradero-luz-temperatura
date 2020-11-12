input.onButtonPressed(Button.A, function () {
    mostrar = 1
})
input.onButtonPressed(Button.B, function () {
    mostrar_luz = 1
})
let promedio_luz = 0
let nivel_luz = 0
let mostrar_luz = 0
let mostrar = 0
mostrar = 0
mostrar_luz = 0
basic.forever(function () {
    if (mostrar == 1) {
        basic.showNumber(input.temperature())
    }
    if (mostrar_luz == 1) {
        basic.showNumber(input.lightLevel())
    }
})
basic.forever(function () {
    for (let index = 0; index < 50; index++) {
        nivel_luz = input.lightLevel()
        nivel_luz += nivel_luz
        basic.pause(100)
    }
    promedio_luz = nivel_luz / 50
    basic.showNumber(promedio_luz)
    basic.pause(1000)
    basic.clearScreen()
})
