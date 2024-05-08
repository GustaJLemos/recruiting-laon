import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "../../../routes/app.routes";
import { userStore } from "../../../stores/userStore";

export function Home() {
  const signOut = userStore((store) => store.signOut);

  return (
    <View style={styles.container}>
      <Button title="Deslogar" onPress={() => signOut()} />
    </View>
  );
}
