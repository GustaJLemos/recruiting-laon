import { create } from "zustand";
import { Movies } from "../types/Movies";
import { TVSeries } from "../types/TVSeries";
import { Genres } from "../types/Genres";


type movieStoreProps = {
  movieSelected: Movies | null;
  selectMovie: (data: Movies)  => void;
  serieSelected: TVSeries | null;
  selectSerie: (data: TVSeries) => void;

  moviesGenres: Genres[];
  saveMoviesGenres: (data: Genres[]) => void;
  seriesGenres: Genres[];
  saveSeriesGenres: (data: Genres[]) => void;
};

export const movieStore = create<movieStoreProps>(
  (
    (set, get) => ({
      movieSelected: null,
      typeSelected: null,
      selectMovie: (data: Movies) => {
        set({ movieSelected: data });
        set({ serieSelected: null });
      },
      serieSelected: null,
      selectSerie: (data: TVSeries) => {
        set({ serieSelected: data });
        set({ movieSelected: null });
      },

      moviesGenres: [],
      saveMoviesGenres: (data: Genres[]) => {
        set({ moviesGenres: data });
      },
      seriesGenres: [],
      saveSeriesGenres: (data: Genres[]) => {
        set({ seriesGenres: data });
      },
    })
  )
);
