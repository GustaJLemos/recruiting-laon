import { View } from "react-native";
import { styles } from "./styles";
import { AuthHeader } from "../../../components/AuthHeader";
import { Text } from "../../../components/Text";
import { ColorTheme } from "../../../theme/ColorTheme";
import { Button } from "../../../components/Button";
import { TextButton } from "../../../components/TextButton";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesProps } from "../../../routes/auth.routes";
import { Input } from "../../../components/Input";

export function Login() {
  const { navigate } = useNavigation<AuthRoutesProps>();

  function handleRegister() {
    try {
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <AuthHeader />

      <View style={styles.content}>
        <Text textType="semibold_24" color={ColorTheme.white}>
          Cadastre-se
        </Text>
        <Text textType="regular_16">
          Acompanhe os melhores filmes e séries.
        </Text>

        <View style={{ gap: 12, marginTop: 32, marginBottom: 12 }}>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Senha" passwordInput />
        </View>

        <View style={{ gap: 24 }}>
          <Text textType="regular_12" color={ColorTheme.white}>
            Ao clicar em{" "}
            <Text textType="regular_12" style={{ fontWeight: "bold" }}>
              cadastrar
            </Text>
            , você está aceitando os Termos e Condições e a Política de
            Privacidade da Laon.
          </Text>

          <Button onPress={() => handleRegister} title="Cadastrar" />

          <TextButton title="Entrar" onPress={() => navigate("LoginScreen")} />
        </View>
      </View>
    </View>
  );
}
