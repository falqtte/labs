def verifica_nota(texto):
    nota = float(input(texto))
    if nota < 0 or nota > 10:
        print('Nota inválida! Encerrando...')
        exit()
    return nota

faltas = int(input('Digite a quantidade de faltas: '))

if faltas < 0 or faltas > 20:
    print('Quantidade de faltas inválida! Encerrando...')
    exit()

if faltas > 5:
    print('Reprovando por faltas.')
    exit()

nota1 = verifica_nota('Qual é a primeira nota? ')
nota2 = verifica_nota('Qual é a segunda nota? ')
media = (nota1 + nota2) / 2

print('A média é: ' ,media)

if media < 6 :
    print('Reprovado por nota :(')
    exit()
else :
    print('Aprovado! :)')
    exit()