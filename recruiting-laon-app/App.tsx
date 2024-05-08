import { StyleSheet, View, StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { ColorTheme } from "./src/theme/ColorTheme";

export default function App() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
