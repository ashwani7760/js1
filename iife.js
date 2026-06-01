// immediately invoked function expression (iife)
// file run hote hi function apne aap execue hota h 
//(function)()
//global scope ke pollution se problem hoti h usse htaneke liye iss use krte h

(
    function chai(){
        console.log("db conected")
    }
)(); // end me ; lgana jruri h vrna context end kha pr h pta nhi chlta aur dusra iife fuction run nhi hota 

(
    () => {
        console.log("db connected 2")
    }
)();

// if variable
(
    (num) => {
        console.log(`db connected ${num}`)
    }
)(3);