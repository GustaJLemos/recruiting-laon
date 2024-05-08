import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { Text } from "../Text";
import { ColorTheme } from "../../theme/ColorTheme";

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      {...rest}
      style={[styles.container, rest.style]}
    >
      <Text textType="semibold_16" color={ColorTheme.gray.gray_100}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
