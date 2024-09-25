#include <iostream>
using namespace std;
int main(){
    int n;
    cout << "Type array element number : "; // Type a number and press enter
    cin >> n; // Get user input from the keyboard

    cout << "Your array element is : " << n;
    cout<<"\n";
    cout << "Enter the array element:\n";

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }

    cout <<"before sorting : ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i]<<" ";
    }

    // for (int i = 0; i < n-1; i++)
    // {
    //     for (int j = 0; j <n-1-i; j++)
    //     {
    //         if(arr[j]>arr[j+1]){
    //             int temp = arr[j+1];
    //             arr[j+1]=arr[j];
    //             // arr[j]=arr[j+1]
    //             arr[j]=temp;
    //         }
    //     }   
    // }

    int count = 0;
    while (count<n-1)
    {
        for (int j = 0; j <n-1-count; j++)
        {
            if(arr[j]>arr[j+1]){
                int temp = arr[j+1];
                arr[j+1]=arr[j];
                // arr[j]=arr[j+1]
                arr[j]=temp;
            }
        }   
        count++;
    }

    cout <<"\nafter sorting : ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i]<<" ";
    }


  return 0;

}