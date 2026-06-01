// global scope means jo bhi variable h vo hr jgh access ho skta h jaise ki var
var a = 45
if (true){
    var a = 4545
}
console.log(a) // yha pr {}block ke under ki value leak ho jati h 


//block scope me under ki value bhar nhi jati jaise ki let const values
let b = 41
if (true){
   let b = 2123212
}
console.log(b)// block ke under jo variable bnaya h vo usi ke under rhega 
//value jb change hogi koi new variable nhi bnayege aur usse change krna chahe 
let c = 41
if (true){
   c = 2123212
}
console.log(c)

// ur jabki let ke sath same variable bhi nhi declare kr skte pr block ke under bhar vala same variable under 
//declare ho jata h