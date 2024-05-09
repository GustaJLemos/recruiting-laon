import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import LogoPng from "../../assets/Logo.png";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ColorTheme } from "../../theme/ColorTheme";
import { Text } from "../Text";

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Image source={LogoPng} />

      <View style={styles.actionsButtons}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={styles.searchButton}
        >
          <MaterialIcons name="search" size={16} color={ColorTheme.white} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={styles.perfillButton}
        >
          <Text textType="semibold_16">S</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
