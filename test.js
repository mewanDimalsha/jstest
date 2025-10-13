const func = (arr)=>{
    const result = arr.reduce((ini,curr,i,arr) => {
        if(curr%2 != 0){
            return ini+curr;
        }
        return ini;
        
    },0);
    console.log(result);
    return result
    
}

const nums = [1, 2, 3, 4, 5];
console.log(func(nums));