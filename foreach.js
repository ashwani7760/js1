const lang = ["py","js","cpp","r","c","java"]

// lang.forEach(function (i){
//     console.log(i)
// })



// lang.forEach((i) => {console.log(i)})



// function prnintme(i){
//     console.log(i)
// }
// lang.forEach(prnintme)


lang.forEach((i,ine,ar) => {console.log(i,ine,ar)}) 
// second parameter index and 3rd parameter array hold krta h 




const objlist = [
    {lang : "python",file : "py"},
    {lang : "javascript",file : "js"},
    {lang : "c++",file : "cpp"}
]

objlist.forEach((i)=>{
    console.log(i.file)
})