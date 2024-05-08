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

type FormProps = {
  name: string;
  email: string;
  password: string;
};

export function Login() {
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

  function handleRegister({ name, email, password }: FormProps) {
    if (password.includes(" ")) {
      setError("password", {
        message: t("Commons:validation:passwordWhiteSpace"),
      });
      return;
    }

    try {
      showToast({
        type: "success",
        title: t("LoginScreen:toast:success"),
      });
    } catch (error) {
      showToast({
        type: "error",
        title: t("LoginScreen:toast:error"),
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
            name="name"
            control={control}
            placeholder={t("LoginScreen:placeholderInput:name")}
            maxLength={255}
            error={!!errors.name}
            hintError={errors.name?.message}
          />
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
          <Text textType="regular_12" color={ColorTheme.white}>
            {t("LoginScreen:warningText")}
          </Text>

          <Button
            onPress={handleSubmit(handleRegister)}
            title={t("Commons:register")}
          />

          <TextButton
            title={t("Commons:enter")}
            onPress={() => navigate("LoginScreen")}
          />
        </View>
      </View>
    </View>
  );
}
