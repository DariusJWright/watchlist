import axios from 'axios';

export const getPopularMovieData = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4da80362321198baf93fcf91ea0ff3ca&language=en-US&page=1&region=US');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const searchMoviesByName = async (title) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4da80362321198baf93fcf91ea0ff3ca&language=en-US&query=${title}&include_adult=false`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}