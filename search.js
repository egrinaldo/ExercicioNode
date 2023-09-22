const search = (arr,item) => {
    for (const i in arr){
        if (arr[i] === item)
        return i;
    }
    return -1;
};

const nums = [1,2,3,4,5,6,7,8,9]
console.log(search(nums,3))
console.log(search(nums,9))
console.log(search(nums,1))
console.log(search(nums,0))
