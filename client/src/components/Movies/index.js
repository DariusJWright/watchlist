import Card from '../Card';

const Movies = ({ movies }) => {
  return (
    <div className='container'>
      {movies.map(movie => (
        <Card
            overview={movie.overview}
            posterPath={movie.poster_path}
            title={movie.title}
            key={movie.id}
        />
      ))}
    </div>
  );
}

export default Movies;