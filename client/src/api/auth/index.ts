import { axiosCreateBaseURLApi } from '../axiosCreateBaseURLApi';
import { ConfigHeaders } from '../../store/headers/ConfigHeaders';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserServer {
  user: User;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface DataFromServer {
  user: User;
  token: string;
}

export const auth = {
  loadUser: async (tokenConfig: ConfigHeaders): Promise<UserServer> => {
    const { data } = await axiosCreateBaseURLApi.get<UserServer>(
      '/auth/user',
      tokenConfig
    );
    return data;
  },
  login: async (
    user: UserLogin,
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
