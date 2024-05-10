import React from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import { AppHeader } from "../../../components/AppHeader";
import { movieStore } from "../../../stores/movieStore";
import { MovieSelectedDetails } from "./MovieSelectedDetails";
import { SerieSelectedDetails } from "./SerieSelectedDetails";

export function Details() {
  const { movieSelected, serieSelected } = movieStore();

  return (
    <ScrollView style={styles.container}>
      <AppHeader />

      {movieSelected && <MovieSelectedDetails />}
      {serieSelected && <SerieSelectedDetails />}
    </ScrollView>
  );
}
