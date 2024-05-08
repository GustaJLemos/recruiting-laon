import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserStoreProps = {
  userIsSigned: boolean;
  // Fiz só para "imitar" um login com jwt
  userAccessToken: string;
  refreshToken: string;
  signIn: (token: string, refreshToken: string) => void;
  signOut: () => void;
};

export const userStore = create(
  persist<UserStoreProps>(
    (set, get) => ({
      userIsSigned: false,
      userAccessToken: "",
      refreshToken: "",
      signIn: (token: string, refreshToken: string) => {
        set({ userIsSigned: true });
        set({ userAccessToken: token, refreshToken });
      },
      signOut: () => {
        set({ userAccessToken: "", refreshToken: "" });
        set({ userIsSigned: false });
      },
    }),
    {
      name: "userStoragedStore",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
