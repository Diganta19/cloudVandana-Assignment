import java.util.*;
 
public class RandomizeArray{     //shuffling function


    public static void shuffleArr(int arr[],int size){

        Random r = new Random();   

        for(int i=size-1;i>0;i--){
             int rIndx=r.nextInt(i+1); //generating a random index
              int temp=arr[i];   //swapping of the indexes
              arr[i]=arr[rIndx];
              arr[rIndx]=temp; 
        }
    }

    public static void main(String[] args){

        int arr[] = {1,2,3,4,5,6,7};    //Taking array input

        System.out.println("Original Array is :");    //printing the original array
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i] + "  ");
        }

        System.out.println();


        shuffleArr(arr,arr.length);    //Calling the shuffling function      



        System.out.println("Shuffled Array is :"); //printing the shuffled array
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i] + "  ");
        }
        System.out.println();
    }
} 