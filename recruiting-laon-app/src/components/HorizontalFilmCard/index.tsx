import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
  imgPath: string;
};

export function HorizontalFilmCard({ onPress, imgPath }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original/${imgPath}` }}
        style={styles.container}
      />
    </TouchableOpacity>
  );
}
