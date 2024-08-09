//to store array of 8-bits (1bytes) we use Uint8Array()
let bytes = new Uint8Array([0,255,127,128]);
console.log(bytes);
//bit = 0 or 1
//byte = 0-255 
//private and public keys are array of bytes, 32bytes

//Convert to Ascii
function asciiBytes(asciiString){
    let arr = [];
    for(let i=0;i<asciiString.length;i++){
        arr.push(asciiString.charCodeAt(i));
    }
    return arr;
}

console.log(asciiBytes('Hello'));