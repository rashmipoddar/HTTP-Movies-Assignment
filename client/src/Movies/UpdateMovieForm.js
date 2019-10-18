import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovieForm = (props) => {
  console.log(props.movies);
  console.log(props);
  const [ movie, setMovie ] = useState({
    title: '',
    director: '',
    metascore: '',
    stars: []
  })

  useEffect(() => {
    const editMovie = props.movies.find(movie => `${movie.id}` === props.match.params.id);
    console.log(editMovie);
    if (editMovie) {
      setMovie(editMovie);
    }
  }, [props.movies, props.match.params.id])


  const handleChange = (event) => {
    setMovie({
      ...movie, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
      .then(response => {
        console.log(response);
        props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={movie.title}
        onChange={handleChange}
      />
      <input
        type='text'
        name='director'
        value={movie.director}
        onChange={handleChange}
      />
      <input
        type='text'
        name='metascore'
        value={movie.metascore}
        onChange={handleChange}
      />
      <input
        type='text'
        name='stars'
        value={movie.stars}
        onChange={handleChange}
      />
      <button>Update</button>
    </form>
  )
}

export default UpdateMovieForm;