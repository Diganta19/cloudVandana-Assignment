import java.util.*;

public class Panagram {         

    public static  boolean checkIfPangram(String sentence) { //checking function
        int[] arr = new int [26];     //index array initialized
        String s =  sentence.toLowerCase(); 
      
        
       
        for(int i=0;i<s.length();i++){    //iterating over the string
            if('a' <= s.charAt(i) && s.charAt(i) <= 'z'){   //checking what alphabets are present and marking their corresponding index as 1
                int ind = s.charAt(i) - 'a';
                arr[ind] = 1;
            }else{
                continue;   //if space then go to the next iteration
            }
        }
        

        for(int i=0;i<arr.length;i++){   //iterating over the index array to see if any index is 0 or not
            if(arr[i] == 0){
                return false;
            }
        }
        
        return true;
    }


    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your String :"); //taking string input
        String s = sc.nextLine();
        
        if(checkIfPangram(s)){   //calling the checking function
            System.out.println("Panagram");
        }else{
            System.out.println("Not a Panagram");
        }
    }
}
