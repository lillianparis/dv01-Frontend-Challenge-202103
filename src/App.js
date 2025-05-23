import React, { useState } from 'react'
import './App.css'
import GradeTable from './components/Table'


// Placing the data here
const data = [
  {
    currentBalance: "13340.3884795713",
    grade: "2",
    homeOwnership: "MORTGAGE",
    quarter: "4",
    term: "36 months",
    year: "2015"
  },
  {
    currentBalance: "10254.3896155371",
    grade: "4",
    homeOwnership: "RENT",
    quarter: "3",
    term: "36 months",
    year: "2014"
  }
];

// Using useState. Setting up the React state to track the filters from the dropdowns
const App = () => {
  const [filters, setFilters] = useState({
    homeOwnership: '',
    quarter: '',
    term: '',
    year: ''
  });


// handling dropdown changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };


// Filtering based on selections. If the filter has a value, it only includes the rows where the value matches
  const filteredData = data.filter(item => {
    return (
      (filters.homeOwnership === '' || item.homeOwnership === filters.homeOwnership) &&
      (filters.quarter === '' || item.quarter === filters.quarter) &&
      (filters.term === '' || item.term === filters.term) &&
      (filters.year === '' || item.year === filters.year)
    );
  });

// Grabbing the dropdown values
  const uniqueValues = (key) => [...new Set(data.map(item => item[key]))];

  return (
    <div className="App">
        <p>HELLO WORLD</p>
        <p>CHARTS AND GRAPHS</p>
        <GradeTable data={filteredData} />
        <div className="dropdown-container">
        </div>
{/* Creating the dropdowns, setting up the <select> input, assigning a name and current value, dynalically fills with data from the data set */}
      <div className="dropdown-container" style={{ marginTop: '20px' }}>
        <select id="homeOwnership" name="homeOwnership" value={filters.homeOwnership} onChange={handleFilterChange}>
          <option value="">Home Ownership</option>
          {uniqueValues('homeOwnership').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <select id="quarter" name="quarter" value={filters.quarter} onChange={handleFilterChange}>
          <option value="">Quarter</option>
          {uniqueValues('quarter').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <select id="term" name="term" value={filters.term} onChange={handleFilterChange}>
          <option value="">Term</option>
          {uniqueValues('term').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <select id="year" name="year" value={filters.year} onChange={handleFilterChange}>
          <option value="">Year</option>
          {uniqueValues('year').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default App
