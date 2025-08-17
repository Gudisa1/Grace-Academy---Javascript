const cafeName="Coffe House"
let customerName="Binyam"

let isLoyalCustomer=false;
let coffePrice="50";
let dabo="20"


let coffeqty=2;
let daboqty=10;


coffePrice=Number(coffePrice)
dabo=Number(dabo)


let totalBeforeDiscount=(coffePrice*coffeqty)+(dabo*daboqty)


// Step 4

let discount=0;

if(isLoyalCustomer&&totalBeforeDiscount>=100){
    discount=20;
}
else if (isLoyalCustomer&&totalBeforeDiscount<100){
    discount=10;
}

else if (!isLoyalCustomer&&totalBeforeDiscount>=150){
    discount=5;
}

else {
    discount=0;
}

// discount 10


let discountAmount=(discount/100 )*totalBeforeDiscount;

let finalBill=totalBeforeDiscount-discountAmount;


if (finalBill>=200){
    specialOffer="You get a free cake!"
}

console.log(`welcome to ${cafeName}`)
console.log("welcome to " + cafeName)
console.log(`Customer: ${customerName}`)
console.log(`Loyalty Member: ${isLoyalCustomer}`)
console.log(`Total before discount: ${totalBeforeDiscount}`)
console.log(`Discount: ${discount}%`)
console.log(`Final Bill: ${finalBill}`)

if (specialOffer){
    console.log(specialOffer)
}