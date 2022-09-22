import os
clear = lambda: os.system('clear')

alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]

phrase = input("Digite uma frase: ")

newPhrase = ""
for letter in phrase:
    i = 0
    while(i >= 0):
        print(newPhrase + alphabet[i])
        if letter == alphabet[i]:
            newPhrase = newPhrase + letter
            i = -3
            break
        i = i + 1
        clear()