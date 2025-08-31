## ✅ Step-by-Step Plan

1. **Employee objects** → Each has `name`, `department`, and `skills` (array).
2. **Object keys, values, entries** → Extract info for inspection.
3. **Destructuring** → Extract `name`, `department`, and `skills`.
4. **Function to check skill** → Arrow function returns `true/false`.
5. **Loop / map** → Display all employees and details.
6. **Spread operator** → Add new skills immutably.
7. **Rest operator** → Search for multiple skills at once.
8. **Filter** → Find employees in a specific department.
9. **Reduce** → Collect all unique skills across employees.

---

## 📝 Example Implementation

```javascript
// Step 1: Employee data
const employees = [
  { name: "Alice", department: "Engineering", skills: ["JavaScript", "React", "Node.js"] },
  { name: "Bob", department: "HR", skills: ["Communication", "Recruitment"] },
  { name: "Charlie", department: "Engineering", skills: ["Python", "Django", "AWS"] },
  { name: "Diana", department: "Design", skills: ["Figma", "UI/UX", "Photoshop"] },
];

// Step 2: Inspect using keys, values, entries
console.log("Keys:", Object.keys(employees[0]));
console.log("Values:", Object.values(employees[0]));
console.log("Entries:", Object.entries(employees[0]));

// Step 3 & 4: Function to check if employee has a skill
const hasSkill = (employee, skill) => employee.skills.includes(skill);
console.log("Does Alice know React?", hasSkill(employees[0], "React")); // true

// Step 5: Display employees
employees.map(({ name, department, skills }) => {
  console.log(`${name} works in ${department} and knows ${skills.join(", ")}`);
});

// Step 6: Add new skill using spread operator (without modifying original)
const updatedAlice = { 
  ...employees[0], 
  skills: [...employees[0].skills, "TypeScript"] 
};
console.log("Updated Alice:", updatedAlice);

// Step 7: Rest operator → check multiple skills
const hasSkills = (employee, ...skills) => 
  skills.every(skill => employee.skills.includes(skill));

console.log("Does Charlie know Python & AWS?", hasSkills(employees[2], "Python", "AWS")); // true

// Step 8: Filter employees by department
const engineeringTeam = employees.filter(e => e.department === "Engineering");
console.log("Engineering Team:", engineeringTeam);

// Step 9: Reduce to get unique skills
const allSkills = employees.reduce((acc, emp) => {
  emp.skills.forEach(skill => acc.add(skill));
  return acc;
}, new Set());

console.log("Unique Skills in Company:", [...allSkills]);
```

---

## 📊 Example Output

```
Keys: [ 'name', 'department', 'skills' ]
Values: [ 'Alice', 'Engineering', [ 'JavaScript', 'React', 'Node.js' ] ]
Entries: [
  [ 'name', 'Alice' ],
  [ 'department', 'Engineering' ],
  [ 'skills', [ 'JavaScript', 'React', 'Node.js' ] ]
]

Does Alice know React? true

Alice works in Engineering and knows JavaScript, React, Node.js
Bob works in HR and knows Communication, Recruitment
Charlie works in Engineering and knows Python, Django, AWS
Diana works in Design and knows Figma, UI/UX, Photoshop

Updated Alice: { name: 'Alice', department: 'Engineering', skills: [ 'JavaScript', 'React', 'Node.js', 'TypeScript' ] }

Does Charlie know Python & AWS? true

Engineering Team: [
  { name: 'Alice', department: 'Engineering', skills: [Array] },
  { name: 'Charlie', department: 'Engineering', skills: [Array] }
]

Unique Skills in Company: [
  'JavaScript', 'React', 'Node.js', 
  'Communication', 'Recruitment',
  'Python', 'Django', 'AWS',
  'Figma', 'UI/UX', 'Photoshop'
]
```

---
