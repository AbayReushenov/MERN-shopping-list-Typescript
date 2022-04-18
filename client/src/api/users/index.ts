import { axiosCreateBaseURLApi } from '../axiosCreateBaseURLApi';
import { ConfigHeaders } from "../../store/headers/ConfigHeaders";
import { DataFromServer } from '../auth';

export interface UserSignup {
  name: string;
  email: string;
  password: string;
}

export const users = {
  signup: async (
    newUser: UserSignup,
    configHeaders: ConfigHeaders
  ): Promise<DataFromServer> => {
    const { data } = await axiosCreateBaseURLApi.post<DataFromServer>(
      '/users',
      JSON.stringify(newUser),
      configHeaders
    );
    return data;
  },
};
