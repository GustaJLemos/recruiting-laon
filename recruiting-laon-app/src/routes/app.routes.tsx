import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Home } from "../screens/app/Home";
import { Details } from "../screens/app/Details";

type AppRoutes = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppRoutes>();

export type AppRoutesProps = NativeStackNavigationProp<AppRoutes>;

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailsScreen" component={Details} />
    </Stack.Navigator>
  );
}
