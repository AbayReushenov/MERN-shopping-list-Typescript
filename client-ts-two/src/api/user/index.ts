import { fromUnixTime } from 'date-fns';

import { axiosCreateBaseURLApi } from '../axiosCreateBaseURLApi';
import { ConfigHeaders } from '../../store/auth/fillUserAuthintificated/tokenConfig';

export interface UserAuthintificatedFromServer {
  _id: string;
  name: string;
  email: string;
  date: number;
}

export interface UserAuthintificated {
  id: string;
  name: string;
  email: string;
  date?: Date;
}
export const user = {
  auth: async (tokenConfig: ConfigHeaders): Promise<UserAuthintificated> => {
    const { data } =
      await axiosCreateBaseURLApi.get<UserAuthintificatedFromServer>('/auth', tokenConfig);
    return { ...data, id: data._id, date: fromUnixTime(data.date) };
  },
};
