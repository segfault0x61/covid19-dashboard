import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((item) => ({
            name: item.country,
            value: item.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getData();
  }, []);

  return (
    <div className="app">
      <div className="appHeader">
        <h1>COVID-19 Dashboard</h1>
        <FormControl className="appDropdown">
          <Select variant="outlined" value="US">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
