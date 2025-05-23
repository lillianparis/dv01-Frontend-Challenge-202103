import React, { useState } from 'react';
import '../styles/Table.css';

// Step 1 creating the array, id, grade and balance
const data = [
  { id: 1, grade: 'Grade 1', balance: 2000 },
  { id: 2, grade: 'Grade 2', balance: 3000000 },
  { id: 3, grade: 'Grade 3', balance: 10000 },
  { id: 4, grade: 'Grade 4', balance: 24000 },
];

// Step 2, mapping over the data array and pulling the grade values. Wrapped in a new set to avoid duplicates
const GradeTable = () => {
  const grades = [...new Set(data.map(item => item.grade))];
// Step 3, I decided to use a for loop. This will loop through every item in the data array. Each item checks "Have I seen this grade before?", if not, then start at 0. Then add the items balance to the total for that grade.
const totalByGrade = {}; // this will hold the final totals

for (let i = 0; i < data.length; i++) {
  const item = data[i]; // get each object from the data
  const grade = item.grade;
  const balance = item.balance;

  // if this grade hasn't been seen before, start at 0
  if (!totalByGrade[grade]) {
    totalByGrade[grade] = 0;
  }

  // add the balance to that grade's total
  totalByGrade[grade] += balance;
}
// Step 3, Creating the table. Each cell shows the total balance for that grade. This is formatted two decimal places .tofixed(2) to reflect the wireframe and indicate money
  return (
    <div className="container">
      <table className="grade-table">
        <thead>
          <tr>
            {grades.map(grade => (
              <th key={grade}>{grade}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {grades.map(grade => (
              <td key={grade}>${totalByGrade[grade].toFixed(2)}</td>
            ))}
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default GradeTable;