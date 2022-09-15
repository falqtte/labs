#include <stdio.h>
#include <limits.h>

static int max(int a, int b)
{
    return a > b ? a : b;
}

int mySqrt(int x)
{
    long int root = 0;
    int step = INT_MAX >> 16;

    do
    {
        long int r1 = root * root;
        long int r2 = (root + 1) * (root + 1);

        if (r1 <= x && x < r2)
        {
            break;
        }

        if (r1 > x)
        {
            root -= step;
        }
        else
        {
            root += step;
        }

        step = max(step / 2, 1);
    } while (1);

    return (int)root;
}

void main()
{

    int a, b, c;
    printf("Enter the 'a' value: ");
    scanf("%i", &a);
    printf("Enter the 'b' value: ");
    scanf("%i", &b);
    printf("Enter the 'c' value: ");
    scanf("%i", &c);

    float delta = (b * b) - (4 * a * c);
    if (delta < 0) 
    {
        printf("The 'delta' value is negative\n");
        return;
    }
    float deltaSquare = mySqrt(delta);

    float x1 = ((b * -1) + deltaSquare) / 2 * a;
    float x2 = ((b * -1) - deltaSquare) / 2 * a;

    printf("x1: ");
    printf("%f", x1);
    printf("\nx2: ");
    printf("%f", x2);
    printf("\n");


    //printf("%i", mySqrt(9));
    //printf("\n");
}