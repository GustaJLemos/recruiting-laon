import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { ColorTheme } from "../../theme/ColorTheme";
import LogoPng from "../../assets/Logo.png";
import { useNavigation } from "@react-navigation/native";

export function AuthHeader() {
  const { canGoBack, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      {canGoBack() ? (
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.8}
          style={styles.goBackButton}
        >
          <MaterialIcons name="arrow-back" size={18} color={ColorTheme.white} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <Image source={LogoPng} />
    </View>
  );
}
