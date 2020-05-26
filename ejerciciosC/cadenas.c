#include <stdio.h>
#include <string.h>

int main (int n_arg, const char * cad[])
{
	if (n_arg < 3)
	{
		printf ("Por favor inserte, al menos, dos cadenas de caracteres para poder comparar.\n");
		return 1;
	}

	int longitud[20];
        int cadenaMayor = 0;
        char mayor[100];

	for (int i=0; i<n_arg; i++)
	{
		longitud[i]=strlen(cad[i]);
		//printf("cadena en posición )%d = %s, longitud[i] = %d\n",i, cad[i], longitud[i]); 
	}

	for (int i=1; i<n_arg; i++)
	{
		
		if (longitud[i] > cadenaMayor)
		{
			cadenaMayor = longitud[i];
			strcpy(mayor, cad[i]);
		}

	}

        printf("La cadena más larga es: %s\n", mayor);

	return 0;
}
