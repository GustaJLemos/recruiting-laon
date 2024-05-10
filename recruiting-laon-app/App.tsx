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
import { userStore } from "./src/stores/userStore";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const userPreferedLanguage = userStore((store) => store.userPreferedLanguage);

  i18next.use(initReactI18next).init({
    resources: {
      ...translations,
    },
    lng: userPreferedLanguage,
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
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={ColorTheme.gray.gray_200}
        />
        <Routes />
        <Toast config={toastConfig} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme.gray.gray_200,
  },
});
