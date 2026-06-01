const user = new Object()
user.name  = "ashwani"
user.pass = "455"
user.logged = false

const users = {
    details: {
        userid : "100",
        mail : {
            1:"sj@.com",
            2:"as@.com"
        }
    }
}
// console.log(user)
// console.log(users.details.mail[1])

// const obj = {user,users}  // same problem ayegi ki ek object ke under two alg object jabki hme ek hi ubject me value chiye
// {} target object optional h pr best practice me use and baki parameter is source object
const obj =  Object.assign({},user,users)  // spread problem
console.log(obj)

//spread 
const obj1 =  {...user,...users}
console.log(obj1)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("isloogedn")) // check krtah ki object me ye property exist krti h ya nhi for protect code from crashes

