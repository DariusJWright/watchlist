const Card = ({ overview, posterPath, title }) => {
  return (
    <div className='card'>
      <img
        className='card-img'
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt='movie poster'
        loading='lazy'
      />
      <div className='movie-info'>
        <div className='title-overview'>
          <h3>{title}</h3>
          <p>
            {overview}
          </p>
        </div>
        <div className='movie-btn'>
          <button>Add to watchlist</button>
        </div>
      </div>
    </div>
  )
}

export default Card;