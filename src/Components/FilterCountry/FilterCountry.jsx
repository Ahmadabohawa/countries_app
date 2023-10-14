import React from 'react'

const FilterCountry = ({onSelect}) => {

    const selectHandler=(e)=>{
        const regionName = e.target.value;
        onSelect(regionName)
    }
  return (
    <select onChange={selectHandler}>
        <option>Filter Country</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}

export default FilterCountry