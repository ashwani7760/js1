const course = {
    coursename : "js",
    price : "999",
    instructor : "hitesh",
    mode : "online"
}

// instead of writing course.coursename everywhere do this

const {coursename} = course
console.log(coursename)
// destructuring ------mean you feel coursename is too long you modify acc. to you by

const {coursename : cn} = course
console.log(cn)