import { ConfigHeaders } from '../../store/headers/ConfigHeaders';
import { axiosCreateBaseURLApi } from '../axiosCreateBaseURLApi';

export interface Item {
  _id: string;
  name: string;
}

export interface NewItem {
  name: string;
}

export interface ItemId {
  _id: string;
}

export const items = {
  get: async (): Promise<Item[]> => {
    const { data } = await axiosCreateBaseURLApi.get<Item[]>('/data');
    return data;
  },
  add: async (item: NewItem, tokenConfig: ConfigHeaders): Promise<Item> => {
    const { data } = await axiosCreateBaseURLApi.post<Item>(
      '/data',
      item,
      tokenConfig
    );
    return data;
  },
  delete: async (data: ItemId, tokenConfig: ConfigHeaders): Promise<void> => {
    await axiosCreateBaseURLApi.delete<Item>(`/data/${data._id}`, tokenConfig);
  },
};
