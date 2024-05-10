import { Movies } from "../types/Movies";
import { api } from "./api";
import { GetMoviesResponseDto } from "./dtos/authDtos/GetMoviesResponseDto";
import { GetTVSeriesResponseDto } from "./dtos/authDtos/GetTVSeriesResponseDto";

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
  }
}