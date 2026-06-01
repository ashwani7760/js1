// reduce filter


const objlist = [
    {lang : "python",file : "py"},
    {lang : "javascript",file : "js"},
    {lang : "c++",file : "cpp"}
]

const li = objlist.forEach((i)=>{
    // console.log(i.file)
    return i//undefined return krta foreach 
})

// console.log(li)


//filter hme return krta h
const num = [1,2,3,4,5,6,7,8,9]
let n = num.filter((i) => i>4)
// console.log(n)
//ye kam foreach me condition se bhi ho skta h


////map
//add kro10
newn = num.map((num) => num+10)
console.log(newn)


//chaining
nw = num.map((num)=> num*10)
        .map((num)=>num+1)

console.log(nw)



//accumulator  
const ar = [1,2,3,4,5]
let initialvalue = 0
let newnum = ar.reduce((acc,cur) => acc+cur , 1)
console.log(newnum)