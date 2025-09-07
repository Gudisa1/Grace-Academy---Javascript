// const students=[
//     {name:"Binyam",scores:{math:90,english:85,science:88}},
//     {name:"Sara",scores:{math:5,english:80,science:9}},
//     {name:"Mike",scores:{math:85,english:78,science:82}},
//     {name:"Alex",scores:{math:92,english:88,science:95}}
// ]

// const calculateAverage=(scores)=>{
//     const values=Object.values(scores)
//     return values.reduce((acc,score)=>acc+score,0)/values.length;
// }

// const summary=students.map(({name,scores})=>{
//    const average=calculateAverage(scores)

//    return{
//     name,
//     average,
//     passed:average>50
//    }
// })


// console.log("Summary Report",summary);


// const passedStudents=summary.filter(summary=>summary.passed);

// console.log("Passed Students",passedStudents);

// const calculateTotal=(...items)=>{

//     return items.reduce((acc,item)=>acc+item.price,0)
// }

// console.log("Total Price",calculateTotal(...dicountCart))


// cart.forEach(item=>{
//     // console.log(item.name,item.price,item.category)
// })


const cart=[
    {name:"Laptop",price:1000,category:"Electronics"},
    {name:"Shirt",price:500,category:"Clothing"},
    {name:"Book",price:300,category:"Education"},
    {name:"Tablet",price:400,category:"Electronics"}
]



const applyDiscount=(item,discountPercentage)=>{
    const {name,price,category}=item;

    const discountPrice=price -price*(discountPercentage/100);
    return {...item,price:discountPrice}
}


const discountCart=cart.map(item=>applyDiscount(item,10))


console.log("Discounted Cart",discountCart)

// console.log("ALL ITEMS")

// cart.map(item=>console.log(item.name,item.price,item.category))

// const employees = [
//   { name: "Alice", department: "Engineering", skills: ["JavaScript", "React", "Node.js"] },
//   { name: "Bob", department: "HR", skills: ["Communication", "Recruitment"] },
//   { name: "Charlie", department: "Engineering", skills: ["Python", "Django", "AWS"] },
//   { name: "Diana", department: "Design", skills: ["Figma", "UI/UX", "Photoshop"] },
// ];


// const engineeringstudents=employees.filter(employee=>         employee.department==="Engineering")

// const engineeringstudents = employees.filter(function(item) {
//   return item.department === "Engineering";
// });

// console.log("Engineering Students",engineeringstudents)


// employees.map(({ name, department, skills }) => {
//   console.log(`${name} works in ${department} and knows ${skills.join(" | ")}`);
  
// });

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// console.log(numbers.join(" - "));

// const updatedAlice={
//     ...employees[0],
//     skills:[...employees[0].skills,"TypeScript"]
// }

// console.log("Updated Alice",updatedAlice)


// console.log("Keys:", Object.keys(employees[0]));
// console.log("Values:", Object.values(employees[1]));
// console.log("Entries:", Object.entries(employees[0]));


// const hasSkill=(employee,skill)=>employee.skills.includes(skill)

// const skill=hasSkill(employees[0],"Game Design")

// console.log("Has Skill",skill)