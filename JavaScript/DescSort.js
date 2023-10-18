let input = prompt("Enter array elements separated by commas:");
let arr = input.split(",");   //taking inputs of an arrag
var size = arr.length;

console.log("Original Array : "); //printing the original array
for(var i=0;i<size;i++){
    console.log(arr[i] +  " ");
}

mergeSort(arr,0,size-1);   //calling sorting funtion

console.log("Sorted Array : "); //printing the original array
for(var i=0;i<size;i++){
    console.log(arr[i] +  " ");
}


function mergeSort(arr,l,r){
    if(l>=r){               //base case
        return;
    }

    var m=l+parseInt((r-l)/2);   //find out the mid index of the array
    mergeSort(arr,l,m)              //recursive call for the left part of the array
    mergeSort(arr,m+1,r)            //recursive call for the right part of the array
    mergeBoth(arr,l,m,r)            //merge the sorted broken parts
}

function mergeBoth(arr,l,m,r){
    var n1=m-l+1;   //size of left part
    var n2=r-m;     //size of right part

    var left=new Array(n1); //creating temporary arrays
    var right=new Array(n2);

    for(var i=0;i<n1;i++){ //copying the values
        left[i]=arr[l+i]; 
    }
    for(var j=0;j<n2;j++){
        right[j]=arr[m+1+j];
    }

    var i=0; //initializing index of first second and merged array respectively
    var j=0;
    var k=l;

    while(i<n1 && j<n2){   //sorting in a descending way
        if(left[i]>=right[j]){
            arr[k]=left[i];
            i++;
        }else{
            arr[k]=right[j];
            j++;
        }
        k++;
    }
    
    while(i<n1){       //if any remaining element in left part copy them
        arr[k]=left[i];
        i++;k++; 
    }

    while(j<n2){        //if any remaining element in right part then copy them
        arr[k]=right[j];
        j++;k++;
    }
}
