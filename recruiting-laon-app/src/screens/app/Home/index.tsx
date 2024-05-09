import React from "react";
import { FlatList, View } from "react-native";

import { styles } from "./styles";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "../../../routes/app.routes";
import { userStore } from "../../../stores/userStore";
import { AppHeader } from "../../../components/AppHeader";
import { Text } from "../../../components/Text";
import { HorizontalFilmCard } from "../../../components/HorizontalFilmCard";
import { ColorTheme } from "../../../theme/ColorTheme";

const fakeData = [0, 1, 2, 3, 4, 5];

export function Home() {
  const signOut = userStore((store) => store.signOut);

  return (
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.horizontalScroll}>
        <Text
          textType="semibold_16"
          color={ColorTheme.white}
          style={styles.horizontalScrollTitle}
        >
          Em breve
        </Text>
        <FlatList
          data={fakeData}
          keyExtractor={(item) => item.toString()}
          renderItem={(item) => (
            <HorizontalFilmCard key={item.toString()} onPress={() => {}} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 16,
            paddingHorizontal: 20,
          }}
          // se a lista estiver vazia
        />
      </View>
      <View style={styles.popularContent}>
        <View style={styles.popularContentTexts}>
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
        </View>

        <FlatList
          data={fakeData}
          keyExtractor={(item) => item.toString()}
          renderItem={(item) => (
            <View
              style={{
                width: 160,
                height: 234,
                backgroundColor: "blue",
              }}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            backgroundColor: "red",
            paddingBottom: 8,
            justifyContent: "center",
            gap: 16,
          }}
          showsVerticalScrollIndicator={false}
          // se a lista estiver vazia
        />
      </View>
    </View>
  );
}
