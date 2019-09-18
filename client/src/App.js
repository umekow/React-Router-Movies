import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      
    
      <div>  
      <Route exact path="/" render={
        props => <MovieList {...props}  movies={savedList} />
      } />
      <Route path="/movies/:id" 
      render={
        props => 
          <Movie
          {...props}
          movies={savedList}
          />
        
      }
      />
      </div>


    
      
    </div>
  );

    }
export default App;
