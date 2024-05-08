import { StyleSheet, View, StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { ColorTheme } from "./src/theme/ColorTheme";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/hooks/useToast";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./src/translations";
import "intl-pluralrules";

export default function App() {
  i18next.use(initReactI18next).init({
    resources: {
      ...translations,
    },
    lng: "ptbr",
    fallbackLng: "ptbr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={ColorTheme.gray.gray_200}
      />
      <Routes />
      <Toast config={toastConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
