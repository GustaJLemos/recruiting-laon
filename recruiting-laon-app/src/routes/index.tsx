import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { userStore } from "../stores/userStore";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const userIsSigned = userStore((store) => store.userIsSigned);

  return (
    <NavigationContainer>
      {userIsSigned ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
