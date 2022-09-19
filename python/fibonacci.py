from cgi import print_form


n = 1
i = 0
while i < 10000:
    n = i + n
    i = n + i
    print(n,"\n" + str(i))