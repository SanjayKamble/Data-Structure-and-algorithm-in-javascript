//method 2 to find the minimum number in array : sorting array in ascending order and then returning the first element


let arr1 = [3.,7,2,9,4,0,6];



 if (!arr1.length){
     throw new Error('array should not be empty');
 }

 if (arr1.length==1) {
     console.log('array is having only one element');
 }
for (let i = 0; i <= arr1.length; i++) {// iterating over outer element
    
    for (let j = i+1; j <= arr1.length; j++) {//iterating over inner element


        if(arr1[i]>arr1[j]){//checking if outer element is greater than inner element

            
            let num=arr1[i];
            
            arr1[i]=arr1[j];//swapping code
            arr1[j]=num;

        }
        
    }
    
}

console.log('smallest number in array is '+arr1[0]);
console.log(arr1);