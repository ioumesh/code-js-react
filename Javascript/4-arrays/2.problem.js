// ques1
let students = [
  { name: "umesh", rollNumber: 20, marks: 80 },
  { name: "sanjiv", rollNumber: 22, marks: 50 },
  { name: "rohit", rollNumber: 30, marks: 40 },
];

// return only name of the student in capital
// traditional
let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

// by map
const capitalName = students.map((item) => {
  return item.name.toUpperCase();
});
console.log(capitalName);

// return who scope more than 60 marks

const studentDetails = students.filter((item) => {
  return item.marks > 60;
});
console.log(studentDetails[0]);

const nameOfStudent = students
  .filter((item) => item.marks > 60)
  .map((item) => {
    return item.name;
  });

console.log(nameOfStudent);

const totalMarks = students
  .map((item) => {
    if (item.marks < 60) {
      item.marks += 20;
    }
    return item;
  })
  .filter((item) => item.marks > 60)
  .reduce((acc, cur) => {
    return (acc = acc + cur.marks);
  }, 0);

console.log(totalMarks);

// flatten an array

function flattenArray(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc = acc.concat(flattenArray(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

const input = [1, [1, 2], [4, 5]];
console.log(flattenArray(input));
