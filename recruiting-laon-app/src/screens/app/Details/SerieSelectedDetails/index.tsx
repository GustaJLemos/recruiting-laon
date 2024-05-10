import React from "react";
import { Image, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { movieStore } from "../../../../stores/movieStore";
import { Text } from "../../../../components/Text";
import { ColorTheme } from "../../../../theme/ColorTheme";
import { MovieGenresTag } from "../../../../components/MovieGenresTag";
import { datetimeEnUs, datetimePtBr } from "../../../../helpers/dateHelper";
import { userStore } from "../../../../stores/userStore";

export function SerieSelectedDetails() {
  const { serieSelected, seriesGenres } = movieStore();

  const userPreferedLanguage = userStore((store) => store.userPreferedLanguage);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${serieSelected?.poster_path}`,
        }}
      />

      <Text
        textType="semibold_24"
        color={ColorTheme.white}
        style={{ marginVertical: 16 }}
      >
        {serieSelected?.name}
      </Text>

      <View style={styles.row}>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          Titulo original:
        </Text>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {serieSelected?.original_name}
        </Text>
      </View>

      <View style={styles.row}>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          Ano
        </Text>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {userPreferedLanguage === "pt"
            ? datetimePtBr(serieSelected!.first_air_date)
            : datetimeEnUs(serieSelected!.first_air_date)}
        </Text>
      </View>

      <View style={styles.row}>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          Quantidade de avaliações:
        </Text>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {serieSelected?.vote_count}
        </Text>
      </View>

      <View style={styles.row}>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
        >
          {serieSelected?.genre_ids.map((item) => {
            let encounteredGenre = seriesGenres.find(
              (genre) => genre.id === item
            );

            if (encounteredGenre) {
              return (
                <MovieGenresTag key={item} title={encounteredGenre.name} />
              );
            }
          })}
        </ScrollView>
      </View>

      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          Sinopse
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {serieSelected?.overview}
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          Elenco
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          Carey Mulligan, Bo Burnham, Alison Brie, Laverne Cox, Jennifer
          Coolidge e outros.
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          Prêmios
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          Oscar de Melhor Roteiro Original, Critics Choice Award de Melhor Atriz
          e outros.
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          Diretor
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          Emerald Fennell
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          Avaliações
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {serieSelected?.vote_average.toFixed(1)}
        </Text>
      </View>
    </View>
  );
}
