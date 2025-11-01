input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # . .
        . # # . .
        # . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . . # # .
        . . # . .
        . . # # .
        . . # . #
        `)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.clearScreen()
})
