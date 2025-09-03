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


const dicountCart=cart.map(item=>applyDiscount(item,5))


console.log("Discounted Cart",dicountCart)

console.log("ALL ITEMS")

cart.map(item=>console.log(item.name,item.price,item.category))