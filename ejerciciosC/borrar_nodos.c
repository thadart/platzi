
#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
	int number;
	struct Node * next;
} NODE;

NODE * createNode (int number)
{
	NODE * newNode;
	newNode = malloc(sizeof(NODE));
	newNode->number = number;
	newNode->next = NULL;

	return newNode;
}

int main (int argc, const char * argv[])
{
	NODE * start = NULL, * current, * next, * previous;
	int goOn, number, nodo_a_borrar, listSize = 0;


	do {
		printf("La lista contiene %d nodos. Ingrese el siguiente nodo (o para finalizar)", listSize);
		scanf("%d", &number);
		if (number)
		{
			if (!start)
			{
				start = createNode(number);
			}
			else
			{
				current = start;
				while (current->next)
				{
				current = current->next;
				}
				current->next = createNode(number);
			}
			listSize++;
			goOn = 1;
		}
		else
		{
			goOn = 0;
		}
	}
	while (goOn);

		current = start;
		printf("La lista contiene los números: \n");
		while(current)
		{
			printf("%d", current->number);
			printf(current->next ? "," : "\n");
			current = current->next;
		}

//EMPEZAMOS A BORRAR NODOS


	do
	{
		printf("Qué nodo desea borrar? (0 para finalizar)");
		scanf("%d", &nodo_a_borrar);


		if (nodo_a_borrar)
		{

			current = start;
			while (current)
			{

//SI EL NODO A BORRAR ES EL PRIMERO

				if (start->number == nodo_a_borrar)
				{
					previous = start->next;
					start = NULL;
					start = previous;
					current = start;
					listSize--;

					printf("La lista queda de tamaño: %d y contiene los nodos: \n", listSize);

					while(current)
					{
						printf("%d", current->number);
						printf(current->next ? "," : "\n");
						current = current->next;
					}
				}

//SI EL NODO A BORRAR ES UNO INTERMEDIO

				else if (current->next->number == nodo_a_borrar)
				{
					previous = current->next->next;
					current->next = NULL;
					current->next = previous;
					listSize--;

					printf("La lista queda de tamaño: %d y contiene los nodos: \n", listSize);
					current=start;

					while(current)
	                                {
                                        	printf("%d", current->number);
                                	        printf(current->next ? "," : "\n");
                		                current = current->next;
	                                }
				}

				else
				{
					current = current->next;
				}

				goOn=1;

			}
			goOn=1;

		}
		else (goOn=0);

	}while (nodo_a_borrar);

//LIBERAMOS MEMORIA

         current = start;
         while (current)
         {
	 	next = current->next;
                free(current);
                current = next;
         }


return 0;

}



