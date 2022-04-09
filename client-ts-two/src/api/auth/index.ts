import { axiosCreateBaseURLApi } from '../axiosCreateBaseURLApi';
import { ConfigHeaders } from "../../store/auth/headers/ConfigHeaders";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserSignin {
  email: string;
  password: string;
}

export interface DataFromServer {
  user: User
  token: string
}

export const auth = {
  get: async (tokenConfig: ConfigHeaders): Promise<User> => {
    const { data } =
      await axiosCreateBaseURLApi.get<User>(
        '/auth',
        tokenConfig
      );
    return data;
  },
  signin: async (
    user: UserSignin,
    configHeaders: ConfigHeaders
  ): Promise<DataFromServer> => {
    const { data } = await axiosCreateBaseURLApi.post<DataFromServer>(
      '/auth',
      JSON.stringify(user),
      configHeaders
    );
    return data;
  },
};
