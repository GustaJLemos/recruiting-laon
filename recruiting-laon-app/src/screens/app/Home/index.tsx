import React, { useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "../../../routes/app.routes";
import { userStore } from "../../../stores/userStore";
import { AppHeader } from "../../../components/AppHeader";
import { Text } from "../../../components/Text";
import { HorizontalFilmCard } from "../../../components/HorizontalFilmCard";
import { ColorTheme } from "../../../theme/ColorTheme";
import { VerticalFilmCard } from "../../../components/VerticalFilmCard";
import { api } from "../../../services/api";

const fakeData = [0, 1, 2, 3, 4, 5];

export function Home() {
  const signOut = userStore((store) => store.signOut);

  async function fetchPopularFilms() {
    try {
      const data = await api.get(
        "/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&api_key=76a5f475036d4c97e4869703151433c1"
      );
      console.log("data", data);
    } catch (error) {
      console.log("errour", error);
    }
  }

  useEffect(() => {
    fetchPopularFilms();
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
        {fakeData.map((item) => (
          <HorizontalFilmCard key={item.toString()} onPress={() => {}} />
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
          {fakeData.map((item) => (
            <VerticalFilmCard key={item.toString()} onPress={() => {}} />
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
          {fakeData.map((item) => (
            <VerticalFilmCard key={item.toString()} onPress={() => {}} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
