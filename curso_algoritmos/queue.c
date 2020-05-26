#include "stdio.h"

int array[5];
int front, rear = -1;

int enQueue (int value)
{
    if (rear >= 4)
    {
        printf("El queue esta lleno \n");
    }
    else if (front == -1)
    {
        front = 0;

    }
    else
    {
        rear++;
        array[rear] = value;
        printf("Se inserto el valor %d correctamente \n", value);
    }
}

void deQueue()
{
    if(front == -1)
    {
        printf("Nuestro Queue esta vacio\n" );
    }
    else
    {
        printf("se elimino el valor %d\n", array[front]);
        front++;
        if(front > rear)
        front = rear = -1;
    }

}

int main (int argc, char const *argv[])
{
    enQueue(1);
    enQueue(2);
    deQueue(3);
    enQueue(4);
    enQueue(5);
    for (int i = 0; i<5; i++)
    printf("%d,", array[i]);
    

 
return 0;
}