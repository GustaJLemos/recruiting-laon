import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Text } from "../Text";
import { ColorTheme } from "../../theme/ColorTheme";

type Props = {
  title: string;
};

export function MovieGenresTag({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text textType="regular_16" color={ColorTheme.white}>
        {title}
      </Text>
    </View>
  );
}
