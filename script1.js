const arr = [4,3,1,5,6];

let x =  findMin(arr);
document.write(x);


function findMin(_arr) {
    if(_arr.length==0){
        document.write('array is empty');
    }else if(_arr.length==1){
        return _arr;

    }else {
        let currentMin = _arr[0];

        for (let i = 1; i < _arr.length; i++){
            
            if (_arr[i]<currentMin) {
                currentMin=_arr[i];
            }
           
        }

        return currentMin;
    }
}