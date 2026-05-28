//array
const city = ["faridabad","delhi","palwal"]
const va = ["j",38,93.039,"kei",true,null]

const ns = new Array(1,2,3,4,5,6)
//indexing
console.log(ns[0])

ns.push(7)
ns.push(8)
ns.pop()
ns.unshift(9) // program go slow if number of element in array is much more
ns.shift() // remove first element in array
console.log(ns)
console.log(ns.includes(9))
console.log(ns.indexOf(4))


// array join 
let arr = ns.join()  // join sabhi array element ko join kr deta h comma seperated and string me convert krta h
console.log(arr)
console.log(typeof(arr))