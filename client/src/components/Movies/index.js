import Card from '../Card';

const Movies = ({ popular }) => {
  return (
    <div className='container'>
      {popular.map(movie => (
        <Card
            overview={movie.overview}
            posterPath={movie.poster_path}
            title={movie.title}
        />
      ))}
    </div>
  );
}

export default Movies;