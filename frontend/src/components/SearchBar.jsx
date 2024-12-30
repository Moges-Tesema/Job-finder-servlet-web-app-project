import React, { useState } from "react";

const SearchBar = () => {
    const [search, setSearch]=useState('');
    const HandleSearch =async (e)=>{
      e.preventDefault();
      try{
        const response = await axios.post('/api/search',{
          search
        });
        console.log(response.data);
      }
      catch(error){
        console.log("some thing went wrong: ",error);
      }
    }
    return(<div className="flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search for jobs..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-96"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4" onClick={HandleSearch}>
          Search
        </button>
      </div>)
}
export default SearchBar;