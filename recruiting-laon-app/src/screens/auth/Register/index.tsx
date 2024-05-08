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

type FormProps = {
  name: string;
  email: string;
  password: string;
};

export function Register() {
  const { t } = useTranslation();

  const schema = z.object({
    name: z.string({ required_error: t("Commons:validation:required") }),
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

  async function handleRegister({ name, email, password }: FormProps) {
    if (password.includes(" ")) {
      setError("password", {
        message: t("Commons:validation:passwordWhiteSpace"),
      });
      return;
    }

    try {
      setLoading(true);

      const { accessToken, refreshToken } = await authService.register({
        username: name,
        email,
        password,
      });

      signIn(accessToken, refreshToken);

      showToast({
        type: "success",
        title: t("RegisterScreen:toast:success"),
      });
    } catch (error) {
      setLoading(false);

      showToast({
        type: "error",
        title: t("RegisterScreen:toast:error"),
      });
    }
  }

  return (
    <View style={styles.container}>
      <AuthHeader />

      <View style={styles.content}>
        <Text textType="semibold_24" color={ColorTheme.white}>
          {t("RegisterScreen:title")}
        </Text>
        <Text textType="regular_16">{t("RegisterScreen:subtitle")}</Text>

        <View style={styles.form}>
          <ControlledInput
            name="name"
            control={control}
            placeholder={t("RegisterScreen:placeholderInput:name")}
            maxLength={255}
            error={!!errors.name}
            hintError={errors.name?.message}
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder={t("RegisterScreen:placeholderInput:email")}
            keyboardType="email-address"
            maxLength={255}
            error={!!errors.email}
            hintError={errors.email?.message}
          />
          <ControlledInput
            name="password"
            control={control}
            placeholder={t("RegisterScreen:placeholderInput:password")}
            passwordInput
            maxLength={50}
            error={!!errors.password}
            hintError={errors.password?.message}
          />
        </View>

        <View style={{ gap: 24 }}>
          <Text textType="regular_12" color={ColorTheme.white}>
            {t("RegisterScreen:warningText")}
          </Text>

          <Button
            onPress={handleSubmit(handleRegister)}
            title={t("Commons:register")}
            loading={loading}
          />

          <TextButton
            title={t("Commons:enter")}
            onPress={() => navigate("LoginScreen")}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
}
