def verifica_nota(nota):
    if nota <0 or 10<nota:
        print('Nota inválida! Encerrando...')
        exit()

faltas = int(input('Digite a quantidade de faltas: ' ))

if 0>faltas or faltas>20:
    print('Quantidade de faltas inválida! Encerrando...')
    exit()

if faltas>5:
    print('Reprovando por faltas.')
    exit()

nota1=int(input('Qual é a primeira nota? ' ))
verifica_nota(nota1)
nota2=int(input('Qual é a segunda nota? ' ))
verifica_nota(nota2)

media = float((nota1+nota2)/2) 
print('A média é ' ,media)

if media < 6 :
    print('Reprovado por nota :(.')
    exit()
else :
    print('Aprovado.')
    exit()