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
	NODE * start = NULL, * current, * next;
	int goOn, listSize = 0;
	int number;

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

		current = start;
		while (current)
		{
			next = current->next;
			free(current);
			current = next;
		}

	return 0;

}


		
