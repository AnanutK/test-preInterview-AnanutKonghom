function percentCal(a,b,c){
    let result = []
    result.push(a*100/1410)
    result.push(b*100/1410)
    result.push(c*100/1410)
return result;
}
let modelSellPercent = percentCal(1200,95,115)
console.log('A model was sold '+modelSellPercent[0]+'%')
console.log('B model was sold '+modelSellPercent[1]+'%')
console.log('C model was sold '+modelSellPercent[2]+'%')
