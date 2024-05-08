import React, { useRef, useState } from "react";
import {
  TextInput,
  View,
  type TextInputProps,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Text } from "../Text";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ColorTheme } from "../../theme/ColorTheme";

export type InputProps = TextInputProps & {
  hintText?: string;
  hintError?: string;
  passwordInput?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export function Input({
  hintText = "",
  hintError = "",
  passwordInput = false,
  error = false,
  disabled = false,
  ...rest
}: InputProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(passwordInput);

  const buttonRef = useRef<TouchableOpacity>(null);
  const inputRef = useRef<TextInput>(null);

  function setFocusedNativeProps() {
    buttonRef?.current?.setNativeProps({
      borderColor: ColorTheme.primary.default,
    });
  }

  function setBluredNativeProps() {
    buttonRef?.current?.setNativeProps({
      borderColor: ColorTheme.gray.gray_300,
    });
  }

  return (
    <View style={[styles.container, { opacity: disabled ? 0.3 : 1 }]}>
      <TouchableOpacity
        ref={buttonRef}
        onPress={() => inputRef?.current?.focus()}
        activeOpacity={1}
        disabled={disabled}
        style={[
          styles.content,
          {
            backgroundColor: disabled
              ? ColorTheme.gray.gray_200
              : "transparent",
            borderColor: error
              ? ColorTheme.feedback.negative
              : ColorTheme.gray.gray_300,
          },
        ]}
      >
        <TextInput
          ref={inputRef}
          cursorColor={ColorTheme.primary.default}
          onFocus={() => setFocusedNativeProps()}
          onBlur={() => setBluredNativeProps()}
          placeholderTextColor={
            disabled ? ColorTheme.gray.gray_300 : ColorTheme.gray.gray_500
          }
          editable={!disabled}
          secureTextEntry={passwordVisibility}
          style={[styles.input, { color: ColorTheme.white }]}
          {...rest}
        />
        {passwordInput && (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => setPasswordVisibility((prevState) => !prevState)}
            style={styles.eyeIcon}
          >
            {passwordVisibility ? (
              <MaterialIcons
                name="visibility"
                size={20}
                color={ColorTheme.gray.gray_400}
              />
            ) : (
              <MaterialIcons
                name="visibility-off"
                size={20}
                color={ColorTheme.gray.gray_400}
              />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <Text
        textType="regular_12"
        color={error ? ColorTheme.feedback.negative : ColorTheme.gray.gray_500}
      >
        {error ? hintError : hintText}
      </Text>
    </View>
  );
}
