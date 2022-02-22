function checkString(inputStr){
    const text = inputStr.split("");
    let length = inputStr.length
    if((length % 2) != 0){
        return false;
    }
    for(let i = 0 ; i < (length/2) ; i++){
        if(inputStr[i]=='('){
            if(inputStr[length-1]!=')'){
                return false;
            }
        }else if(inputStr[i]=='['){
            if(inputStr[length-1]!=']'){
                return false;
            }

        }else if(inputStr[i]=='{'){
            if(inputStr[length-1]!='}'){
                return false;
            }

        }else{
            console.log("Not equal5")                
            return false;
        }
        length--;
    }

    return true;
}
//test cases
console.log(checkString('()')) //expect true
console.log(checkString('([]]'))//expect false
console.log(checkString('([{}])'))//expect true
console.log(checkString('([[{}]]]'))//expect false
console.log(checkString(')'))//expect false
console.log(checkString('(]}])'))//expect false
console.log(checkString('([)]'))//expect false
console.log(checkString('{'))//expect false

