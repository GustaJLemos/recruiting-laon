import React, { useCallback } from "react";
import Toast, {
  SuccessToast,
  ErrorToast,
  InfoToast,
  ToastPosition,
  BaseToastProps,
} from "react-native-toast-message";
import { FontStylesTheme } from "../theme/FontsTheme";
import { ColorTheme } from "../theme/ColorTheme";

type ToastFontStyle = Omit<FontStylesTheme, "lineHeight">;

type ToastProps = {
  type: "error" | "success" | "info";
  title: string;
  subtitle?: string;
  duration?: number;
  position?: ToastPosition;
};

const textStyle = (): ToastFontStyle => {
  return {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 14,
  };
};

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <SuccessToast
      text1NumberOfLines={2}
      text1Props={{ style: textStyle() }}
      style={{
        borderLeftColor: ColorTheme.feedback.successful,
      }}
      {...props}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      text1NumberOfLines={2}
      text1Props={{ style: textStyle() }}
      style={{
        borderLeftColor: ColorTheme.feedback.negative,
      }}
      {...props}
    />
  ),

  info: (props: BaseToastProps) => (
    <InfoToast
      text1NumberOfLines={2}
      text1Props={{ style: textStyle() }}
      style={{
        borderLeftColor: ColorTheme.feedback.informational,
      }}
      {...props}
    />
  ),
};

export function useToast() {
  const showToast = useCallback(
    ({ title, type, subtitle, duration, position }: ToastProps) => {
      Toast.show({
        type: type,
        text1: title,
        text2: subtitle,
        position: position,
        visibilityTime: duration,
        autoHide: true,
        bottomOffset: 80,
        topOffset: 80,
      });
    },
    []
  );

  return { showToast };
}
