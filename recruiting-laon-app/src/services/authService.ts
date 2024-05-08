import { api } from "./api"
import { LoginRequestDto } from "./dtos/authDtos/LoginRequestDto"
import { AuthResponseDto } from "./dtos/authDtos/AuthResponseDto"
import { RegisterRequestDto } from "./dtos/authDtos/RegisterRequestDto"
import uuid from 'react-native-uuid';
import { sleep } from "../utils/sleep";

export const authService = {
  login: async (data: LoginRequestDto) => {
    const LoginResponse: AuthResponseDto = {
      accessToken: uuid.v4().toString(),
      refreshToken: uuid.v4().toString()
    };

    await sleep(3000);

    return LoginResponse;
  },
  register: async (data: RegisterRequestDto) => {
    const RegisterResponse: AuthResponseDto = {
      accessToken: uuid.v4().toString(),
      refreshToken: uuid.v4().toString()
    };

    await sleep(3000);

    return RegisterResponse;
  }
}