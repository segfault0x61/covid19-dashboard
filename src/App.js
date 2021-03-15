import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'Worldwide',
    'USA',
    'China',
    'UK',
  ]);
  return (
    <div className="app">
      <div className="appHeader">
        <h1>COVID-19 Dashboard</h1>
        <FormControl className="appDropdown">
          <Select variant="outlined" value="dummy">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
