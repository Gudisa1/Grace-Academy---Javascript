## ✅ Step-by-Step Plan

1. **Store items as objects** → Each has `name`, `price`, and `category`.
2. **Destructuring** → Extract `name`, `price`, and `category`.
3. **Discount function** → Apply discount (e.g., 10%).
4. **Spread operator** → Create a new cart with discounted prices (immutable update).
5. **Rest operator** → Function that calculates total cost for any number of items.
6. **map / loop** → Display items in the cart.
7. **filter** → Get items by category.
8. **reduce** → Calculate total discounted price.

---

## 📝 Example Implementation

```javascript
// Step 1: Shopping cart data
const cart = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Phone", price: 600, category: "Electronics" },
  { name: "Shirt", price: 50, category: "Clothing" },
  { name: "Book", price: 20, category: "Education" },
];

// Step 2: Function to apply discount
const applyDiscount = (item, discountPercent) => {
  const { name, price, category } = item; // destructuring
  const discountedPrice = price - price * (discountPercent / 100);
  return { ...item, price: discountedPrice }; // spread → new object
};

// Step 3: Create new cart with discount (10% off)
const discountedCart = cart.map(item => applyDiscount(item, 10));
console.log("Discounted Cart:", discountedCart);

// Step 4: Rest operator → total cost function
const calculateTotal = (...items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};
console.log("Total of first two items:", calculateTotal(cart[0], cart[1]));

// Step 5: Display all items (map/loop)
console.log("All Items:");
cart.map(item => console.log(`- ${item.name}: $${item.price} [${item.category}]`));

// Step 6: Filter items in a category (e.g., Electronics)
const electronics = cart.filter(item => item.category === "Electronics");
console.log("Electronics:", electronics);

// Step 7: Reduce → calculate total discounted price
const totalDiscounted = discountedCart.reduce((sum, item) => sum + item.price, 0);
console.log("Total Price After Discount:", totalDiscounted.toFixed(2));
```

---

## 📊 Example Output

```
Discounted Cart: [
  { name: 'Laptop', price: 900, category: 'Electronics' },
  { name: 'Phone', price: 540, category: 'Electronics' },
  { name: 'Shirt', price: 45, category: 'Clothing' },
  { name: 'Book', price: 18, category: 'Education' }
]

Total of first two items: 1600
All Items:
- Laptop: $1000 [Electronics]
- Phone: $600 [Electronics]
- Shirt: $50 [Clothing]
- Book: $20 [Education]

Electronics: [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phone', price: 600, category: 'Electronics' }
]

Total Price After Discount: 1503.00
```

