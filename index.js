const crypto = require('crypto');
const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);


//Assignment 1
//Give an input string that outputs a SHA-256 hash that starts with 00000
function findHash(prefix){
    let input = 0;
    while(true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {hash: hash, input:inputStr};
        }
        input ++
    }
}


const result = findHash('0000');
console.log(result);
console.log("Input",result.input);
console.log("Hash",result.hash);

//Assignment 2

function findHash2(prefix){
let input = 0;
while(true){
let inputStr = '100xdevs' + input.toString();
let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
if(hash.startsWith(prefix)){
return {hash: hash, input:inputStr};
}
input ++;
}
}


const result2 = findHash2('0000');
console.log(result2);

//Assigment 3

function findHash3(prefix){
    let input = 0;
    while(true){
        let inputStr = `Harkirat => Raman | Rs 100
        Ram => Ankit | Rs 10 `+ input.toString();
            let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
            if(hash.startsWith(prefix)){
                return {hash: hash, input:input};
            }
            input ++;
        }
    }
  

const result3  = findHash3('0000');
//const result3  = findHash3('00000000'); //won't be able to find, thi why crypto mining requires high gpu, so instead of dong this start with a given prefix
console.log(result3);

//
