// mostly use for array traversing
let str = "djhfgdf"
for (const c of str) {
    // console.log(c)
}

//map
// jis order me enter ki h usi order me rhti h aur unique values rhti h 
//maps iterable nhi hote basically
const mob = new Map
mob.set("in","india")
mob.set("usa","united state of america")
mob.set("in","india")

// console.log(mob)

// for (const k of mob) {
//     console.log(k) // key value sari print hoti h 
// }

for (const [k,v] of mob) {
    // console.log(`${k} :----> ${v}`) // key value sari print hoti h 
}

// ye uper wala forof loop object pr kaam nhi krta dusra krta h -- forof se object not iterable error ata h 

// object niche vale method traverse hota h 
const obj ={
    js : "javascript",
    cpp : "c++",
    py :"python",
    sf :"swift"
}

for (const key in obj) {
    // console.log(`${key} :---> ${obj[key]}`)
}

// forin in  array 
const ev = ["nexon","xe9","safari"] 
for (const key in ev) {
    console.log(key) //array index print hoge 
}