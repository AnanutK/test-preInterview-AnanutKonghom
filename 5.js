function num1SumToNum2(n,m){
    let sum = 0 ;
    for(let i = n;i<=m;i++){
        sum+=i;
    }
    return sum;
}

console.log('C.n = 1, m = 99 answer is '+num1SumToNum2(1,99))
console.log('D.n = 446, m = 779 answer is '+num1SumToNum2(446,779))
console.log('E.n = 3, m = 1,099 answer is '+num1SumToNum2(3,1099))
console.log('F.n = 34, m = 1,000,000 answer is '+num1SumToNum2(34,1000000))
