function main() {
    const n = parseInt(readLine(), 10);
    let arr = n.toString(2);  //takes n and converts to a binary string (2).
    let count = 0;
    let maxCount = 0;
   
    for(let i = 0; i  < arr.length; i++) { 
        if (arr[i]== 1){
            count++; 
                if(count > maxCount){
                    maxCount = count;
                } 
            } else {
                count =0;
            }
                
    }  
    console.log(maxCount);
}
   