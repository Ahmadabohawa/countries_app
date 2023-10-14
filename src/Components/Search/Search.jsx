import React, { useState } from 'react'

const Search = (prop) => {

    
    const [input,setInput]=useState('')

    const submitHandler=(e)=>{
        const onSearch = prop.onSearch;
        e.preventDefault();
        onSearch(input)
    }
  return (
    <form onSubmit={submitHandler}>  
        <input type="text" placeholder='Search a Country.....'
         value={input} onChange={(e)=>setInput(e.target.value)}/>
    </form>
  )
}

export default Search