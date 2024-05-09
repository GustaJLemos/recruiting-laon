import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Login } from "../screens/auth/Login";
import { Register } from "../screens/auth/Register";
import { userStore } from "../stores/userStore";

type AuthRoutes = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutes>();

export type AuthRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  const userAlreadyRegistered = userStore(
    (store) => store.userAlreadyRegistered
  );

  return (
    <Stack.Navigator
      initialRouteName={
        userAlreadyRegistered ? "LoginScreen" : "RegisterScreen"
      }
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
}
