faltas=int(input('Digite a quantidade de faltas: ' ))

if 0>faltas or faltas>20:
    print('Quantidade de faltas inválida! Encerrando...')
    exit()
else:
    if faltas>5:
        print('Reprovando por faltas.')
        exit()
    else:
        nota1=int(input('Qual é a primeira nota? ' ))
        if nota1<0 or 10<nota1 :
            print('Nota inválida! Encerrando...')
            exit()   
        else:
            nota2=int(input('E a segunda nota? ' ))    
            if nota2<0 or 10<nota2 :
                print('Nota inválida! Encerrando...')
                exit()
            else:
                m=float((nota1+nota2)/2)   
                if m<6 :
                    print('A média é ' ,m)
                    print('Reprovado por nota :(.')
                    exit()
                else :
                    print('A média é ' ,m)
                    print('Aprovado.')