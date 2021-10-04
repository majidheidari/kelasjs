function isComplete(x) {
    let i=1;
    let sum=0;
    while (i<x){
        if (x%i===0) sum=sum+i;
        i++
    }
    if (x===sum)return('yes');
    else return('no')
}
console.log(isComplete(30))
function isPrime(x) {
    let j = 0;
    let i = 2;
    if (x === 1) j = 1;
    if (x === 0) j = 1;
    while (i < x) {
        if (x % i === 0) {
            j = 1;
        }
        i++
    }
    if (j === 0) return ('yes')
    else return ('no')

}


function primeRang(x, y) {
    let i = x;
    let arr = [];
    while (i < y) {
        if (isPrime(i) === 'yes') arr.push(i);
        i++
    }
    return arr
}

function isHard(x) {
    let i = x;
    let k = x.toString().length;
    while (k > 0) {
        i= String(i).slice(0,k);
        if (isPrime(i) === 'yes') {
            // i = i / 10 - (i % 10) / 10;
            k--;
        } else return ('no')
    }
    return ('yes')
}

function hardRang(x) {
    let i = 2*(10 ** (x - 1));
    let j = 10 ** x;
    let arr = [];
    while (i < j) {
        if (isHard(i) === 'yes') arr.push(i)
        i++
    }
    return arr;
}
console.log(primeRang(3,45))
console.log(hardRang(3))
const mod=(a,b)=>{
    const c=Math.abs(a-b);
    let i=2;
    let arr=[];
    while (i<=c){
        if (c%i===0){
            arr.push(i)
        }
        i++
    }
    return arr
}
console.log(mod(25,1))