### ✅ Step-by-Step Breakdown

1. **Store student data as objects** → Each student has a name and subject scores.
2. **Use object methods** (`Object.keys`, `Object.values`, `Object.entries`) to access scores.
3. **Use destructuring assignment** → Extract `name` and `scores`.
4. **Write a function** (arrow function) to calculate the average.
5. **Loop (or map)** through students and compute averages.
6. **Use spread operator** → Add `passed: true/false` to each student object.
7. **Use `map`, `filter`, `reduce`** for class operations:

   * `map` → compute averages.
   * `filter` → students who passed.
   * `reduce` → compute class average.
8. **Optional rest operator** → handle unknown number of scores.

---

### 📝 Example Code Implementation

```javascript
// Step 1: Student data
const students = [
  { name: "Alice", scores: { math: 85, english: 78, science: 92 } },
  { name: "Bob", scores: { math: 55, english: 64, science: 58 } },
  { name: "Charlie", scores: { math: 95, english: 88, science: 90 } },
];

// Step 2 & 3: Function to calculate average (using Object.values & reduce)
const calculateAverage = (scores) => {
  const values = Object.values(scores); // extract only the numbers
  return values.reduce((a, b) => a + b, 0) / values.length;
};

// Step 4, 5 & 6: Create summary report using map and spread operator
const summary = students.map(({ name, scores }) => {
  const avg = calculateAverage(scores);
  return {
    name,
    average: avg,
    passed: avg >= 60, // pass if average >= 60
  };
});

console.log("Summary Report:", summary);

// Step 7a: Filter students who passed
const passedStudents = summary.filter(student => student.passed);
console.log("Passed Students:", passedStudents);

// Step 7b: Calculate class average
const classAverage = summary.reduce((sum, student) => sum + student.average, 0) / summary.length;
console.log("Class Average:", classAverage.toFixed(2));

// Step 8 (Optional): Rest operator example (handles unknown scores)
const studentAverage = (name, ...scores) => {
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return { name, average: avg, passed: avg >= 60 };
};

console.log(studentAverage("David", 70, 80, 90, 100));
```

---

### 📊 Example Output

```
Summary Report: [
  { name: 'Alice', average: 85, passed: true },
  { name: 'Bob', average: 59, passed: false },
  { name: 'Charlie', average: 91, passed: true }
]

Passed Students: [
  { name: 'Alice', average: 85, passed: true },
  { name: 'Charlie', average: 91, passed: true }
]

Class Average: 78.33
{ name: 'David', average: 85, passed: true }
```

