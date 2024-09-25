#include <stdio.h>
int main(){
      printf("hello world\n");
      
      int my_array[] = {64, 34, 25, 12, 22, 11, 90, 5};

      int n = sizeof(my_array)/sizeof(my_array[0]);
      printf("total element = %d\n",n);

     printf("before sorting: ");
      for(int i = 0 ; i<n;i++){
        printf("%d ",my_array[i]);
      }

      for (int i = 0; i <n-1; i++)
      {
        for (int j = 0; j <n-1-i; j++)
        {
            // printf("i = %d & j = %d \n",i,j);
            if (my_array[j]>my_array[j+1])
            {
                // my_array[j+1] = my_array[j]
                // my_array[j] = my_array[j+1]
                int temp = my_array[j];
                my_array[j] = my_array[j+1];
                my_array[j+1] = temp; 
            }
        }
      }

      printf("\nAfter sorting: ");
      for(int i = 0 ; i<n;i++){
        printf("%d ",my_array[i]);
      }
    return 0;
}