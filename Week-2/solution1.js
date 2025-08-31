const students=[
    {name:"Binyam",scores:{math:90,english:85,science:88}},
    {name:"Sara",scores:{math:5,english:80,science:9}},
    {name:"Mike",scores:{math:85,english:78,science:82}}
]


const calculateAverageScores = (scores) => {
    const values=Object.values(scores)
    return values.reduce((a,b)=>a+b,0)/values.length;
}


const summary=students.map(({name,scores})=>{
    const average=calculateAverageScores(scores)
    return {
        name,
        average,
        passed: average >= 50
    }
})

console.log("summary Report", summary)

const passedStudents=summary.filter(student=>student.passed)
console.log("Passed Students Report", passedStudents)

const classAverage=summary.reduce((acc,student)=>acc+student.average,0)/summary.length
console.log("Class Average Report", classAverage)


