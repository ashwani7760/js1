const course = {
    coursename : "js",
    price : "999",
    instructor : "hitesh",
    mode : "online",
    greet : function(){
        // console.log(`congratulation ${coursename}`)  gives error coursename access nhi ho pa rha 
        // iskeliye this keyword use krte current context ke liye
        console.log(`congratulation ${this.coursename}`)
        console.log(this)// show all object value
    }
}
console.log(course.greet())
console.log(this)// node environment me global this  empty object hota h 
// pr console me this ye hota h Window {window: Window, self: Window, document: document, name: '', location: Location, …} hota h 

//-------------------------------------------------------------------------------------------------------
// function chai(){
//     console.log(this)
// }
// chai() // this me bhaut kuch h function ke under

function chai(){
    let user = "adk"
    console.log(this.user) // undefined -----this (current context sirf object me use hota h)
}
chai()

//============================================================================
// function with different format
const chini = () => {
    let user = "ask"
    // console.log(this.user) ------> undefined hi rhega and this --> empty object
}
chini()


//----------------------------------------------------------------
const add = (m,n) => {return m+n}
console.log(add(4,8))
// simple thing

//implicit retrun
const adds = (m,n) => (m+n) // return likne ki jrurt nhi h agr hme ek hi statement return krna ho to
console.log(adds(8,7))
//agr curly braces use hua to return likna pdta h aur ye chij react me kaam aata h 
//explicit return likna pdta h 
// agr object return krna to ({"ds":"dsd"}) is format me hoga