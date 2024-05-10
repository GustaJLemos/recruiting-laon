import React from "react";
import { styles } from "./styles";
import { ColorTheme } from "../../theme/ColorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { userStore } from "../../stores/userStore";
import { Modalize } from "react-native-modalize";
import { Dimensions, TouchableOpacity } from "react-native";
import { IHandles } from "react-native-modalize/lib/options";
import { Text } from "../Text";
import { useTranslation } from "react-i18next";

const { height } = Dimensions.get("screen");

type Props = {
  modalizeRef: React.MutableRefObject<IHandles | undefined>;
};

export function OptionsModalize({ modalizeRef }: Props) {
  const { t } = useTranslation();

  const { signOut, userPreferedLanguage, toggleUserPreferedLanguage } =
    userStore();

  return (
    <Modalize
      ref={modalizeRef}
      adjustToContentHeight
      panGestureEnabled={false}
      withHandle={false}
      disableScrollIfPossible={false}
      rootStyle={{ height: height }}
      childrenStyle={[
        styles.childrenStyle,
        { backgroundColor: ColorTheme.gray.gray_200, height: "50%" },
      ]}
      modalStyle={{ backgroundColor: ColorTheme.gray.gray_200 }}
    >
      <TouchableOpacity
        onPress={() => toggleUserPreferedLanguage()}
        activeOpacity={0.8}
        style={styles.options}
      >
        <Text textType="semibold_16" color={ColorTheme.white}>
          {t("Commons:changeLanguage")}{" "}
          {userPreferedLanguage === "pt" ? "Inglês" : "Portuguese"}
        </Text>

        <MaterialIcons name="language" size={24} color={ColorTheme.white} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={signOut}
        style={styles.options}
      >
        <Text textType="semibold_16" color={ColorTheme.white}>
          {t("Commons:logout")}
        </Text>

        <MaterialIcons name="logout" size={24} color={ColorTheme.white} />
      </TouchableOpacity>
    </Modalize>
  );
}
