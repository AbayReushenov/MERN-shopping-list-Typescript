import { axiosCreateBaseURLApi } from '../axiosCreateBaseURLApi';
import { ConfigHeaders } from '../../store/auth/fillUserAuthintificated/tokenConfig';
import { UserAuthintificated } from '../../api/auth';

export interface NewUser {
  name: string;
  email: string;
  password: string;
}

export interface RegisteredFromServerUser {
  id: string;
  name: string;
  email: string;
}

export interface DataFromServer {
  user: RegisteredFromServerUser
  token: string
}

export interface DataRegistered  {
  user: UserAuthintificated
  token: string
}

export const users = {
  signup: async (
    newUser: NewUser,
    configHeaders: ConfigHeaders
  ): Promise<DataRegistered> => {
    const { data } = await axiosCreateBaseURLApi.post<DataFromServer>(
      '/users',
      JSON.stringify(newUser),
      configHeaders
    );
    return data;
  },
};
