import java.util.*;

public class RomanToInt {

    public static int romanToInt(String s) {
        if(s==null){ //base case
            return 0;
        }
        
        int length=s.length();
        int sum=0;
        int pre=0;
        
        for(int i= length - 1; i >= 0; i--){
            int cur = romanTable(s.charAt(i)); //checking each digit 
            
            if(i==length - 1){ 
                sum=sum + cur;
            }else{
               if(cur < pre){
                   sum=sum - cur;
               }else{
                   sum=sum + cur;
               }
            }
            pre=cur;
        }
        
        return sum;
    }
    
    public static int romanTable(char c){ //roman to int conversion table
        int num=0;
        switch(c){   //checking each letter using switch case 
            case 'I':
                num=1;
                break;
            case 'V':
                num =5;
                break;
             case 'X':
                num=10;
                break;
             case 'L':
                 num=50;
                 break;
             case 'C':
                 num=100;
                 break;
             case 'D':
                 num=500;
                 break;
             case 'M':
                 num=1000;
                 break;
             default:
                 num=0;
                 break;
        }
        return num;
    }
    
    public static void main(String[] args){ //main method
        
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter Your Roman Number :");
        String str=sc.next(); //taking roman number input
        
        int result=romanToInt(str); //calling the converting function and storing the result
        
        System.out.println("Converted Integer Number :" + result); //display the result
    }
    }