function main() {
    var arr = [];
    for(let arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
 
    var totalSum = -63;
    var tempSum = 0;
    for(let i=0; i < arr.length-2; i++) {
        for(let j=0; j < arr[i].length-2; j++) {           
            tempSum = arr[i][j] +
             arr[i][j+1] +
              arr[i][j+2] + 
              arr[i+1][j+1] + 
              arr[i+2][j] +
               arr[i+2][j+1] +
                arr[i+2][j+2];
            if(tempSum > totalSum) {
                totalSum = tempSum;           
            }
        }
    }
    
    console.log(totalSum);
}
