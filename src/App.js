import logo from './logo.svg';
import './App.css';
import ListofCars from './ListofCars';
import {useState} from 'react'
import SelectCarBrand from './SelectCarBrand';
import ErrorBoundary from './ErrorBoundary';

const carlist = [{
  id: 1,
  brand: "ford",
  name: "ford torino",
  year: "1970-01-01",
  origin: "USA"
},
{
  id: 2,
  brand: "ford",
  name: "ford galaxie 500",
  year: "1970-01-01",
  origin: "USA"
},
{
  id: 3,
  brand: "chevrolet",
  name: "chevrolet vega 2300",
  year: "1971-01-01",
  origin: "USA"
},
{
  id: 4,
  brand: "peugeot",
  name: "peugeot 504 (sw)",
  year: "1972-01-01",
  origin: "Europe"
},
{
  id: 5,
  brand: "renault",
  name: "renault 12 (sw)",
  year: "1972-01-01",
  origin: "Europe"
},
{
  id: 6,
  brand: "bmw",
  name: "316",
  year: "2001-01-01",
  origin: "Europe"
},
{
  id: 7,
  brand: "kia",
  name: "Rio",
  year: "2001-01-01",
  origin: "Europe"
}]

function App() {
  const [carBrandFilter, setCarBrandFilter] = useState("ford");

  const userHasSelectedaBrand = function(event) {
    setCarBrandFilter(event.target.value)
  }

  return (
    <div className="App">
      <h1> The state variable carBrandFilter is {carBrandFilter}</h1>
      <SelectCarBrand 
        onuserselect = {userHasSelectedaBrand}
        list={carlist}/>
      
      <ErrorBoundary>
        <ListofCars list={carlist.filter((car) => (car.brand === carBrandFilter))}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
