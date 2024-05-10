import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import RickPng from "../../assets/rick.png";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

export function VerticalFilmCard({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image source={RickPng} style={styles.container} />
    </TouchableOpacity>
  );
}
