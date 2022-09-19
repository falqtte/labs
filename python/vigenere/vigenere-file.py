alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " ", "\n", "+"] 
# Este alfabeto será tratado como base para as cifras. Somente os caracteres presentes são aceitos.

def get_cyphered_message(message, key, encrypt):
    cyphered_message = "" # Variável que guarda a mensagem cifrada
    i = 0 # Iterador/Contador
    while(i < message.__len__()): # Passa letra por letra do texto a ser cifrado
        if (key[i] != True):
            key += key[i]
            # Caso a chave seja menor do que o texto, ela irá se repetir. Exemplo:
            # Chave: Kiwi | Mensagem: Abacate | ChaveFinal: KiwiKiw

        cyphered_alphabet = get_cyphered_alphabet(get_letter_index(alphabet, key[i]))
        # Agora pegamos a posição da letra da mesangem no alfabeto e comparamos com a letra que ocupa a mesma posição, mas no alfabeto cifrado. O processo contrário é usado para descifrar
        if(encrypt == True):
            cyphered_message += cyphered_alphabet[get_letter_index(alphabet, message[i])]
        else:
            cyphered_message += alphabet[get_letter_index(cyphered_alphabet, message[i])]
        i = i + 1 # Aumenta contagem do loop
    return cyphered_message

def get_letter_index(array, letter): # Retorna o indice de uma letra no array
    return array.index(letter)

def get_cyphered_alphabet(letter_index_on_alphabet):
    first_half = array_slice(alphabet, letter_index_on_alphabet, alphabet.__len__())
    second_half = array_slice(alphabet, 0, letter_index_on_alphabet)

    for letter in second_half:
        first_half.append(letter)
    return first_half
    # Retorna o alfabeto 'cifrado'
    # Para fazer isso, pegamos a posição da letra da chave (recebida como parâmetro da funçao, a "letter_index_on_alphabet") e movemos todo as letras antes dela para depois do Z
    # Exemplo, supondo que a letra da chave seja K:
    # KLMNOPQRSTUVWXYZABCDEFGHIJ

def array_slice(array, start, end): # Retorna um pedaço do array
    sliced_array = []
    i = 0
    while ((start + i) < end):
        sliced_array.append(array[start + i])
        i = i + 1
    return sliced_array

with open("key.txt", "r") as reader:
    key = reader.read().upper()
with open("message.txt", "r") as reader:
    message = reader.read().upper()

print(message, key)

with open("result.txt", "w") as writer:
    writer.write(get_cyphered_message(message, key, True))