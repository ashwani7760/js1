function myName(t){
    return(`${t}`)
}

// console.log(myName("asndbfh"))
// if we set parameter and we not give arguent while calling 
// function the default dtype passes that is undefined


// default values and some conditioning
function login(user = "saammmmmm"){
    if(user===undefined){
        console.log("please enter your name ")
        return
    }
    return `helloo login success ${user}`
}

// console.log(login())




// if you want pass multiple values in function we use rest operator ...
// ... is known as rest when pass is function
// ... is known as spread when it uses in array and object

function Calculate(...num){
    return num // return array
}
console.log(Calculate(5,54,55,5))


//==================================================================================
function Calculates(val1, val2,...num){
    return {val1,num} // return array
}
console.log(Calculates(5,54,55,5))


// ========================================================================================
// two main type of function declaration

console.log(addone(1))
function addone(num1){
    return num1+ 1
}                       
// yha to addone variabel access ho rha h is method me 

console.log(addtwo(1))
const addtwo = function(num1){
    return num+2
}
// agr hm is vale method se function bnate h to and usse 
// phele access krna chahe to access error aata h 
