import React from "react";
import { Text as RNText, type TextProps } from "react-native";
import { ColorTheme } from "../../theme/ColorTheme";
import { FontsTheme } from "../../theme/FontsTheme";

type TextType =
  | "semibold_40"
  | "semibold_24"
  | "semibold_16"
  | "regular_16"
  | "regular_12"
  | "semibold_12";

type TypographyProps = TextProps & {
  textType: TextType;
  color?: string;
  error?: boolean;
};

export function Text({
  textType,
  children,
  color = ColorTheme.gray.gray_500,
  error = false,
  ...rest
}: TypographyProps) {
  function textStyles() {
    return FontsTheme[textType];
  }

  return (
    <RNText
      maxFontSizeMultiplier={1.2}
      {...rest}
      style={[
        { color: error ? ColorTheme.feedback.negative : color },
        textStyles(),
        rest.style,
      ]}
    >
      {children}
    </RNText>
  );
}
