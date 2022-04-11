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
  add: async (item: NewItem, configHeaders: ConfigHeaders): Promise<Item> => {
    const { data } = await axiosCreateBaseURLApi.post<Item>('/data');
    return data;
  },
  delete: async (data: ItemId, configHeaders: ConfigHeaders): Promise<void> => {
    await axiosCreateBaseURLApi.delete<Item>(`/data/${data._id}`);
  },
};
