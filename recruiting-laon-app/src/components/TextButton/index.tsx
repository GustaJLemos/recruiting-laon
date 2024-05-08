import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { styles } from "./styles";
import { Text } from "../Text";
import { ColorTheme } from "../../theme/ColorTheme";

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
};

export function TextButton({ title, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest} style={rest.style}>
      <Text textType="semibold_16" color={ColorTheme.white} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
