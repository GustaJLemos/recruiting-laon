import React, { useRef } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import LogoPng from "../../assets/Logo.png";
import { styles } from "./styles";
import { Text } from "../Text";
import { Modalize } from "react-native-modalize";
import { OptionsModalize } from "../OptionsModalize";

export function AppHeader() {
  const modalizeRef = useRef<Modalize>();

  return (
    <>
      <View style={styles.container}>
        <Image source={LogoPng} />

        <View style={styles.actionsButtons}>
          {/* <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={styles.searchButton}
        >
          <MaterialIcons name="search" size={16} color={ColorTheme.white} />
        </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => modalizeRef.current?.open()}
            activeOpacity={0.8}
            style={styles.perfillButton}
          >
            <Text textType="semibold_16">S</Text>
          </TouchableOpacity>
        </View>
      </View>
      <OptionsModalize modalizeRef={modalizeRef} />
    </>
  );
}
