import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import { userStore } from "../../../stores/userStore";
import { AppHeader } from "../../../components/AppHeader";
import { Text } from "../../../components/Text";
import { HorizontalFilmCard } from "../../../components/HorizontalFilmCard";
import { ColorTheme } from "../../../theme/ColorTheme";
import { VerticalFilmCard } from "../../../components/VerticalFilmCard";
import { movieService } from "../../../services/movieService";
import { Movies } from "../../../types/Movies";
import { useToast } from "../../../hooks/useToast";
import { AppError } from "../../../utils/AppError";
import { sleep } from "../../../utils/sleep";
import { TVSeries } from "../../../types/TVSeries";

const fakeData = [0, 1, 2, 3, 4, 5];

export function Home() {
  const signOut = userStore((store) => store.signOut);

  const { showToast } = useToast();

  const [upComingMoviesLoading, setUpComingMoviesLoading] = useState(false);
  const [upComingMovies, setUpComingMovies] = useState<Movies[]>([]);

  const [popularMoviesLoading, setPopularMoviesLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<Movies[]>([]);

  const [popularSeriesLoading, setPopularSeriesLoading] = useState(false);
  const [popularSeries, setPopularSeries] = useState<TVSeries[]>([]);

  async function fetchPopularMovies() {
    try {
      setPopularMoviesLoading(true);

      const movies = await movieService.getPopularMovies();

      await sleep(2000);

      setPopularMovies(movies);
    } catch (error) {
      const errorMessage =
        error instanceof AppError
          ? error.message
          : "Não foi possível buscar os filmes";

      showToast({ type: "error", title: errorMessage });
    } finally {
      setPopularMoviesLoading(false);
    }
  }

  async function fetchUpComingMovies() {
    try {
      setUpComingMoviesLoading(true);

      const movies = await movieService.getUpComingMovies();

      await sleep(2000);

      setUpComingMovies(movies);
    } catch (error) {
      const errorMessage =
        error instanceof AppError
          ? error.message
          : "Não foi possível buscar os filmes";

      showToast({ type: "error", title: errorMessage });
    } finally {
      setUpComingMoviesLoading(false);
    }
  }

  async function fetchPopularSeries() {
    try {
      setPopularSeriesLoading(true);

      const series = await movieService.getPopularTVSeries();

      await sleep(2000);

      setPopularSeries(series);
    } catch (error) {
      const errorMessage =
        error instanceof AppError
          ? error.message
          : "Não foi possível buscar os filmes";

      showToast({ type: "error", title: errorMessage });
    } finally {
      setPopularSeriesLoading(false);
    }
  }

  useEffect(() => {
    fetchUpComingMovies();
    fetchPopularMovies();
    fetchPopularSeries();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <AppHeader />

      <Text
        textType="semibold_16"
        color={ColorTheme.white}
        style={styles.horizontalScrollTitle}
      >
        Em breve
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        {upComingMoviesLoading
          ? fakeData.map((item) => (
              <View key={item.toString()} style={styles.horizontalShimmer} />
            ))
          : upComingMovies.map(({ id, poster_path }) => (
              <HorizontalFilmCard
                key={id.toString()}
                imgPath={poster_path}
                onPress={() => {}}
              />
            ))}
      </ScrollView>

      <View style={styles.popularContent}>
        <Text textType="semibold_24" color={ColorTheme.white}>
          Populares
        </Text>
        <Text
          textType="semibold_16"
          color={ColorTheme.gray.gray_500}
          style={{ textTransform: "uppercase" }}
        >
          Filmes
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.filmsContainer}
        >
          {popularMoviesLoading
            ? fakeData.map((item) => (
                <View key={item.toString()} style={styles.popularShimmer} />
              ))
            : popularMovies.map(({ id, poster_path }) => (
                <VerticalFilmCard
                  imgPath={poster_path}
                  key={id.toString()}
                  onPress={() => {}}
                />
              ))}
        </ScrollView>

        <Text
          textType="semibold_16"
          color={ColorTheme.gray.gray_500}
          style={{ textTransform: "uppercase" }}
        >
          Séries
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.filmsContainer}
        >
          {popularSeriesLoading
            ? fakeData.map((item) => (
                <View key={item.toString()} style={styles.popularShimmer} />
              ))
            : popularSeries.map(({ id, poster_path }) => (
                <VerticalFilmCard
                  imgPath={poster_path}
                  key={id.toString()}
                  onPress={() => {}}
                />
              ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
