import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserStoreProps = {
  userIsSigned: boolean;
  userAlreadyRegistered: boolean;
  // Fiz só para "imitar" um login com jwt
  userAccessToken: string;
  refreshToken: string;
  signIn: (token: string, refreshToken: string) => void;
  register: (token: string, refreshToken: string) => void;
  signOut: () => void;
};

export const userStore = create(
  persist<UserStoreProps>(
    (set, get) => ({
      userIsSigned: false,
      userAlreadyRegistered: false,
      userAccessToken: "",
      refreshToken: "",
      signIn: (token: string, refreshToken: string) => {
        set({ userIsSigned: true });
        set({ userAccessToken: token, refreshToken });
      },
      register: (token: string, refreshToken: string) => {
        const signIn = get().signIn;

        signIn(token, refreshToken)
        set({ userAlreadyRegistered: true });
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
