import { Movies } from "../types/Movies";
import { api } from "./api";
import { GetGenresDto } from "./dtos/MoviesAndSeriesDto/GetGenresDto";
import { GetMoviesResponseDto } from "./dtos/MoviesAndSeriesDto/GetMoviesResponseDto";
import { GetTVSeriesResponseDto } from "./dtos/MoviesAndSeriesDto/GetTVSeriesResponseDto";

export const movieService = {
  getUpComingMovies: async () => {
    const data: GetMoviesResponseDto = await api.get(
      "movie/upcoming"
    );

    return data.results;
  },
  getPopularMovies: async () => {
    const data: GetMoviesResponseDto = await api.get(
      "movie/popular"
    );

    return data.results;
  },
  getPopularTVSeries: async () => {
    const data: GetTVSeriesResponseDto = await api.get(
      "tv/popular"
    );

    return data.results;
  },
  getTVSeriesGenres: async () => {
    const data: GetGenresDto = await api.get(
      "genre/tv/list"
    );

    return data.genres;
  },
  getMoviesGenres: async () => {
    const data: GetGenresDto = await api.get(
      "genre/movie/list"
    );

    return data.genres;
  }
}