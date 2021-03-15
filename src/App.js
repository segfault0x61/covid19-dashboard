import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import InfoBox from './components/InfoBox';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

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

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="app">
      <div className="appHeader">
        <h1>COVID-19 Dashboard</h1>
        <FormControl className="appDropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="appStats">
        <InfoBox title="Coronavirus Cases" cases={8000} total={2000} />
        <InfoBox title="Recovered" cases={10000} total={300} />
        <InfoBox title="Deaths" cases={50000} total={900} />
      </div>
    </div>
  );
}

export default App;
