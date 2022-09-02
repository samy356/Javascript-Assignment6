// 1st problem's solution.
class rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    area(){
        let a = this.length*this.width;
        return a;
    }
}
class square extends rectangle{
    constructor(length){
        super(length);
        this.width = length;
    }
}
let fig = new square(4);
console.log(fig.area());

// 2nd problem's solution.
function find_largest(arr, n){  // Accept 2 arguments. arr = is the array. n = n-th largest value.
    let arr1 = arr.splice(-1);
    for (let item of arr){
        let plc = 0;
        let len = arr1.length;
        for (let item1 of arr1){
            if(item<item1){
                arr1.splice(plc,0,item);
                break;
            }
            plc+=1;
        }
        if (len == arr1.length)
            arr1.push(item);
    }
    return arr1[arr1.length-n];
}
console.log(find_largest([3,45,6,7,23,5,7,8],3));

// 3nd problem's solution.
function computeDash(num){
    let numS = `${num}`;
    let numStr = [...numS];
    let outp = ''
    let count = numStr.length;
    while (count>0,count--){
        if (((numStr[count])%2==0)&((numStr[count-1])%2==0))
            numStr.splice((count),0,'-');
    }
    for (let items of numStr)
        outp+=items;
    return outp;
}
console.log(computeDash(24546872));