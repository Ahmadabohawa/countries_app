import React, { useEffect, useState } from 'react'
import Search from '../Search/Search';
import FilterCountry from '../FilterCountry/FilterCountry';
import { Link } from 'react-router-dom';
const AllCountries = () => {
  
    const [countries,setCountries] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error ,setError] = useState('');

    useEffect(()=>{
            getAllCountries();
        },[])

    const getAllCountries= async ()=>{
        try{
            const res = await fetch('https://restcountries.com/v3.1/all');  
                
            if(!res.ok) throw new Error('Something went Wrong with fetching the api')
                console.log("res : ",res)
            const data=await res.json();
            setCountries(data)
            console.log("data : ",data)
            setIsLoading(false)
            
        }catch(error){
            setIsLoading(false)
            setError(error.message)
        }
    }
    const getCountryByName= async (countryName)=>{
       try {
        const res = await fetch (`https://restcountries.com/v3.1/name/${countryName}`)
        if(!res.ok) throw new Error('Not found any country')

        const data = await res.json();
        
        setCountries(data)
        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)

       }

    }

     const getCountryByRegion =async(regionName) => {
      try{
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`)
        if(!res.ok) throw new Error ('Failed .................')

        const data =await res.json()
        setCountries(data)
        setIsLoading(false)
      }catch(error){
        setIsLoading(false)
        setError(false)
      }
    }
    
    return (
    <div className='all__country__wrapper'>
        <div className="country__top">
            <div className="search"> 
                <Search onSearch={getCountryByName}/>
            </div>
            <div className="filter">
            <FilterCountry onSelect={getCountryByRegion} />
            </div>
        </div>

        <div className="country__bottom">
            {isLoading && !error && <h4>Loading .....</h4>}
            {error && !isLoading && <h4>{error}</h4>}
            {
                countries?.map((country,index)=>(
                <Link key={index} to={`/country/${country.name.common}`}>
                    <div key={index} className='country__card'>
                        <div className="country__img">
                            <img src={country.flags.png}/>
                        </div>
                        <div className="country__data">
                            <h3>{country.name.common}</h3>
                            <h6>Population :  {new Intl.NumberFormat().format(country.population)}</h6>
                            <h6>    Region : {country.region}</h6>
                            <h6>Capital : {country.capital}</h6>
                        </div>
                    </div>
                </Link>
                ))
            }
        </div>
    </div>
  )
}

export default AllCountries