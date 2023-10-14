import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CountryInfo = () => {
  const [country,setCountry]= useState([])
  const [isLoading,setIsLoading] = useState(true);
  const [error ,setError] = useState('');
  const {countryName} =  useParams();

  useEffect(()=>{
    const getCountryByName = async ()=>{
      try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  
        if(!res.ok) throw new Error ('Could not Found ... ')
        const data = await  res.json();
      setCountry(data);
      console.log("Country Info : ",data)
      setIsLoading(false)
      }catch(error){
        setIsLoading(false)
        setError(error.message)
      }
    }
    getCountryByName();
  },[countryName])

 

  return (
    <div className='country__info__wrapper' >   
          <Link to='/'><button>Go Back</button></Link>
            {
              isLoading && !error && <h4>Loading...............</h4>
            }
          
            {
              country?.map((country,index) =>(
                <div key={index} className="country__info__container">
                  <div className="country__info-img">
                      <img src={country.flags.png}/>
                  </div>

                    <div className='country__info'>
                      <h3> {country.name.common} </h3>
                      <div className="country__info-left">
                      <h5>Population  : <span> {new Intl.NumberFormat().format(country.population)}</span></h5>
                      <h5>Region      : <span> {country.region}</span></h5>
                      <h5>Sub Region  : <span> {country.subregion}</span></h5>
                      <h5>Capital     : <span> {country.capital}</span></h5>
                      <h5>Languages     : <span> {Object.keys(country)}</span></h5>
                      <h5> bo : {country.borders?.map((country)=>

                       <Link key={index} to={`/country/${country}`}>
                       
                       <button style={{margin:'4px'}}>{country}</button>
                       
                       </Link>
                        
                      )}</h5>


                        </div>
                        </div>  
                        </div>
              ))
            }
          
    </div>
  )
}

export default CountryInfo