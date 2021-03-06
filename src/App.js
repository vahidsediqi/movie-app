import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieListHeader from './components/MovieListHeader';
import './App.css';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

const App = () => {

  const [movies, setMovies] = useState( [] );
  const [searchValue, setSearchValue] = useState('');
  const [favourites, SetFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ca6be1d4`;
    const responose = await fetch(url);
    const data = await responose.json();
    if(data.Search){
      setMovies(data.Search)
    }   
  }

  useEffect(() => {
     getMovieRequest(searchValue);
  }, [searchValue])

  const addToFavouriteItem = (movie) => {
    const newFavouriteList = [...favourites, movie];
    SetFavourites(newFavouriteList);
    console.log(newFavouriteList)
  }
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader header="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
       <div className="movie-wrapper" > 
          <MovieList 
          movies={movies} 
          favouriteComponent={AddFavorites}
          handleFavouriteClick = {addToFavouriteItem}
          />
       </div>

{/* Favourite Movie Component */}
       <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader header="Favourite Movies" />
        <div className="movie-wrapper" > 
          <MovieList 
          movies={favourites} 
          favouriteComponent={AddFavorites}
          handleFavouriteClick = {addToFavouriteItem}
          />
       </div>
      </div>
       <footer>
         <span className="">Proudly Powered By Vahid Sediqi</span>
       </footer>
    </div>
  );
}

export default App;
