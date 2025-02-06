import {React, useState ,useEffect} from 'react';
import axios from 'axios';

const Add = () => {
  const [searchValue,setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=5821b481`)
    .then(response =>{
     if (response.data.Search){
      setMovies(response.data.Search)
     }
    }).catch(error => console.log(error))
  } , [searchValue]);
  

  
  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input 
                    type="text"
                     placeholder='Search for a movie'
                     value={searchValue}
                     onChange={(e)=>{
                      setSearchValue(e.target.value);
                     }}
                     />

                </div>
                <ul className='results'>
                  {
                    movies.map((movie)=><li key={movie.imdbID}>{movie.Title}</li>)
                  }
                 

                </ul>

            </div>

        </div>
    </div>
  )
}

export default Add