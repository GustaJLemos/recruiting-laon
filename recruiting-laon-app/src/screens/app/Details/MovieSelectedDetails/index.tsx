import React from "react";
import { Image, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { movieStore } from "../../../../stores/movieStore";
import { Text } from "../../../../components/Text";
import { ColorTheme } from "../../../../theme/ColorTheme";
import { MovieGenresTag } from "../../../../components/MovieGenresTag";
import { datetimeEnUs, datetimePtBr } from "../../../../helpers/dateHelper";
import { useTranslation } from "react-i18next";
import { userStore } from "../../../../stores/userStore";

export function MovieSelectedDetails() {
  const { t } = useTranslation();

  const { movieSelected, moviesGenres } = movieStore();

  const userPreferedLanguage = userStore((store) => store.userPreferedLanguage);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movieSelected?.poster_path}`,
        }}
      />

      <Text
        textType="semibold_24"
        color={ColorTheme.white}
        style={{ marginVertical: 16 }}
      >
        {movieSelected?.title}
      </Text>

      <View style={styles.row}>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {t("DetailsScreen:originalTitle")}
        </Text>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {movieSelected?.original_title}
        </Text>
      </View>

      <View style={styles.row}>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {t("DetailsScreen:year")}
        </Text>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {userPreferedLanguage === "pt"
            ? datetimePtBr(movieSelected!.release_date)
            : datetimeEnUs(movieSelected!.release_date)}
        </Text>
      </View>

      <View style={styles.row}>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {t("DetailsScreen:reviewsNumber")}
        </Text>
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {movieSelected?.vote_count}
        </Text>
      </View>

      <View style={styles.row}>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 8 }}
          showsHorizontalScrollIndicator={false}
        >
          {movieSelected?.genre_ids.map((item) => {
            let encounteredGenre = moviesGenres.find(
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
          {t("DetailsScreen:synopsis")}
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {movieSelected?.overview}
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          {t("DetailsScreen:cast")}
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {t("DetailsScreen:castMock")}
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          {t("DetailsScreen:awards")}
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {t("DetailsScreen:awardsMock")}
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          {t("DetailsScreen:director")}
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {t("DetailsScreen:directorMock")}
        </Text>
      </View>
      <View style={styles.content}>
        <Text textType="semibold_16" color={ColorTheme.white}>
          {t("DetailsScreen:reviews")}
        </Text>
        <View style={styles.lineSeparator} />
        <Text textType="regular_16" color={ColorTheme.gray.gray_500}>
          {movieSelected?.vote_average.toFixed(1)}
        </Text>
      </View>
    </View>
  );
}
