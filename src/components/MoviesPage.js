import React from 'react';
// import the custom `useRouteMatch` hook from React Router
import { Route, useRouteMatch } from 'react-router-dom';
import MoviesList from './MoviesList';
// import the MovieShow component
import MovieShow from './MovieShow';

function MoviesPage({ movies }) {
  
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
      <Route path={`${match.url}/:movieId`}>
        <MovieShow />
      </Route>
    </div>
  );
}

export default MoviesPage;