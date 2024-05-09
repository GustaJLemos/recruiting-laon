import { View } from "react-native";
import { styles } from "./styles";
import { AuthHeader } from "../../../components/AuthHeader";
import { Text } from "../../../components/Text";
import { ColorTheme } from "../../../theme/ColorTheme";
import { Button } from "../../../components/Button";
import { TextButton } from "../../../components/TextButton";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesProps } from "../../../routes/auth.routes";
import { ControlledInput } from "../../../components/ControlledInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../../../hooks/useToast";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { userStore } from "../../../stores/userStore";
import { authService } from "../../../services/authService";
import { AppError } from "../../../utils/AppError";

type FormProps = {
  email: string;
  password: string;
};

export function Login() {
  const { t } = useTranslation();

  const schema = z.object({
    email: z
      .string({ required_error: t("Commons:validation:required") })
      .email(t("Commons:validation:email")),
    password: z.string({ required_error: t("Commons:validation:required") }),
  });

  const { showToast } = useToast();

  const { navigate } = useNavigation<AuthRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const signIn = userStore((store) => store.signIn);

  const [loading, setLoading] = useState(false);

  async function handleRegister({ email, password }: FormProps) {
    if (password.includes(" ")) {
      setError("password", {
        message: t("Commons:validation:passwordWhiteSpace"),
      });
      return;
    }

    try {
      setLoading(true);

      const { accessToken, refreshToken } = await authService.login({
        email,
        password,
      });

      signIn(accessToken, refreshToken);

      showToast({
        type: "success",
        title: t("LoginScreen:toast:success"),
      });
    } catch (error) {
      const errorMessage =
        error instanceof AppError
          ? error.message
          : t("LoginScreen:toast:error");

      setLoading(false);

      showToast({
        type: "error",
        title: errorMessage,
      });
    }
  }

  return (
    <View style={styles.container}>
      <AuthHeader />

      <View style={styles.content}>
        <Text textType="semibold_24" color={ColorTheme.white}>
          {t("LoginScreen:title")}
        </Text>
        <Text textType="regular_16">{t("LoginScreen:subtitle")}</Text>

        <View style={styles.form}>
          <ControlledInput
            name="email"
            control={control}
            placeholder={t("LoginScreen:placeholderInput:email")}
            keyboardType="email-address"
            maxLength={255}
            error={!!errors.email}
            hintError={errors.email?.message}
          />
          <ControlledInput
            name="password"
            control={control}
            placeholder={t("LoginScreen:placeholderInput:password")}
            passwordInput
            maxLength={50}
            error={!!errors.password}
            hintError={errors.password?.message}
          />
        </View>

        <View style={{ gap: 24 }}>
          <Button
            onPress={handleSubmit(handleRegister)}
            title={t("Commons:enter")}
            loading={loading}
          />

          <TextButton
            title={t("Commons:register")}
            onPress={() => navigate("RegisterScreen")}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
}
