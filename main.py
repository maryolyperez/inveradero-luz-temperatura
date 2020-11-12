nivel_luz = 0
promedio_luz = 0
for index in range(50):
    basic.show_number(input.light_level())
    nivel_luz = input.light_level()
    nivel_luz += nivel_luz
    basic.pause(100)
basic.show_string("Hello!")
basic.pause(200)
basic.show_number(nivel_luz)
basic.pause(500)
promedio_luz = nivel_luz / 50
basic.show_number(promedio_luz)
basic.pause(1000)