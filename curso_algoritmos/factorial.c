#include "stdio.h"
#include "stdlib.h"


int factorial (int n)
{
    int f = n;
 
    for (int i=n-1; i>1; i--)
    {
        f *= i;
    }
return f;
}     


/* int factorial (int n)
{
    int fac = n;
    for (int i = n-1; i>1; i--)
    {
        fac *= i;
    }
    return fac;
} */

int main(int argc, char const * argv[])
{

int fact = 0;
fact = factorial(3);
printf("%d", fact);
printf("aaksjaidjaijdaisdd\n");
printf("aaksjaidjaijdaisdd\n");
printf("aaksjaidjaijdaisdd\n");
printf("aaksjaidjaijdaisdd\n");

return 0;
}

