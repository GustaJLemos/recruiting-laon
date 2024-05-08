import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { Text } from "../Text";
import { ColorTheme } from "../../theme/ColorTheme";
import { Loading } from "../Loading";

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export function Button({ title, onPress, loading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading}
      {...rest}
      style={[styles.container, rest.style]}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text textType="semibold_16" color={ColorTheme.gray.gray_100}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
