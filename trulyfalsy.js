let user=[]
if(user){
    console.log("ok ")
}else{
    console.log("no")
}


// falsy value ----- false , 0 , -0 , bigint(0n), "", null , Undefined , NaN
//truly values ---[] ,{},2 ,"0", " " , function(){}

let empty= {}
if(Object.keys(empty).length == 0){
    console.log("empty object")
}else{
    console.log("not ok")
}

// nullish coalescing operator(??) : sari khani null undefined pr tiki hui h
let val1;
// agr hmare pass koi null ya undefined value aa jaye to konsi value assign ho uski jgh
val1 = 5 ?? 10 // yha to first value assign hogi
val2 = null ?? 10 // yha second value assign hogi

console.log(val1)
console.log(val2)

//=========================terniary operator
// condition ?  true: false

let ice = 0
ice ==0 ? console.log("ice"):console.log("water")