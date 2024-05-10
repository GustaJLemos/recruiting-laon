import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
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
import { movieStore } from "../../../stores/movieStore";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "../../../routes/app.routes";
import { useTranslation } from "react-i18next";
import { userStore } from "../../../stores/userStore";

const fakeData = [0, 1, 2, 3, 4, 5];

export function Home() {
  const { t } = useTranslation();

  const { showToast } = useToast();

  const { navigate } = useNavigation<AppRoutesProps>();

  const { selectMovie, selectSerie, saveMoviesGenres, saveSeriesGenres } =
    movieStore();

  const userPreferedLanguage = userStore((store) => store.userPreferedLanguage);

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
        error instanceof AppError ? error.message : t("HomeScreen:toast:error");

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
        error instanceof AppError ? error.message : t("HomeScreen:toast:error");

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
        error instanceof AppError ? error.message : t("HomeScreen:toast:error");

      showToast({ type: "error", title: errorMessage });
    } finally {
      setPopularSeriesLoading(false);
    }
  }

  async function fetchSeriesAndMoviesGenres() {
    try {
      const series = await movieService.getTVSeriesGenres();
      const movies = await movieService.getMoviesGenres();

      console.log("movies", movies);
      console.log("series", series);
      saveMoviesGenres(movies);
      saveSeriesGenres(series);
    } catch (error) {
      if (__DEV__) {
        ("Não foi possível buscar os gêneros");
      }
    }
  }

  useEffect(() => {
    fetchUpComingMovies();
    fetchPopularMovies();
    fetchPopularSeries();
    fetchSeriesAndMoviesGenres();
  }, [userPreferedLanguage]);

  function handleSelectMovie(movie: Movies) {
    selectMovie(movie);
    navigate("DetailsScreen");
  }

  function handleSelectSerie(series: TVSeries) {
    selectSerie(series);
    navigate("DetailsScreen");
  }

  return (
    <ScrollView style={styles.container}>
      <AppHeader />

      <Text
        textType="semibold_16"
        color={ColorTheme.white}
        style={styles.horizontalScrollTitle}
      >
        {t("HomeScreen:upComing")}
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
          : upComingMovies.map((item) => (
              <HorizontalFilmCard
                key={item.id.toString() + item.title}
                imgPath={item.poster_path}
                onPress={() => handleSelectMovie(item)}
              />
            ))}
      </ScrollView>

      <View style={styles.popularContent}>
        <Text textType="semibold_24" color={ColorTheme.white}>
          {t("HomeScreen:popular")}
        </Text>
        <Text
          textType="semibold_16"
          color={ColorTheme.gray.gray_500}
          style={{ textTransform: "uppercase" }}
        >
          {t("HomeScreen:movies")}
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.filmsContainer}
        >
          {popularMoviesLoading
            ? fakeData.map((item) => (
                <View key={item.toString()} style={styles.popularShimmer} />
              ))
            : popularMovies.map((item) => (
                <VerticalFilmCard
                  imgPath={item.poster_path}
                  key={item.toString() + item.title}
                  onPress={() => handleSelectMovie(item)}
                />
              ))}
        </ScrollView>

        <Text
          textType="semibold_16"
          color={ColorTheme.gray.gray_500}
          style={{ textTransform: "uppercase" }}
        >
          {t("HomeScreen:series")}
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.filmsContainer}
        >
          {popularSeriesLoading
            ? fakeData.map((item) => (
                <View key={item.toString()} style={styles.popularShimmer} />
              ))
            : popularSeries.map((item) => (
                <VerticalFilmCard
                  imgPath={item.poster_path}
                  key={item.id.toString() + item.name}
                  onPress={() => handleSelectSerie(item)}
                />
              ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
