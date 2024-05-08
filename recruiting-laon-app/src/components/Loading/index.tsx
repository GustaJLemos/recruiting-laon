import React from "react";
import { ActivityIndicator, View } from "react-native";

import { styles } from "./styles";
import { ColorTheme } from "../../theme/ColorTheme";

export function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color={ColorTheme.primary.default}
      style={styles.container}
    />
  );
}
