import math

a = int(input("Digite o a: "))
b = int(input("Digite o b: "))
c = int(input("Digite o c: "))

delta = (b * b) -4 * a * c

if delta < 0:
    print("O valor do Delta é negativo, logo, o cálculo é impossível")
    exit()

raizDelta = math.sqrt(delta)

x1 = ((-1 * b) + raizDelta) / (2 * a)
x2 = ((-1 * b) - raizDelta) / (2 * a)

print("x1 = ", x1)
print("x2 = ", x2)
