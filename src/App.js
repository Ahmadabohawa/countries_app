import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import AllCountries from './Components/AllCountries/AllCountries';
import CountryInfo from './Components/CountryInfo/CountryInfo';
function App() {
  return (
        <>
      <div className='header'>
    <div className="container">
          <Link to={"/"}><h5>Where in the world</h5></Link>
      </div>
    </div>
    <div className='container'>
      <Routes>
        <Route path='/' element={<AllCountries/>}/>
        <Route path='/country/:countryName' element={<CountryInfo/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
