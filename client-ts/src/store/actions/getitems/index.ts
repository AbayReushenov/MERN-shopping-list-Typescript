import { Dispatch } from 'react';
import axios from 'axios';
import { ACTION_TYPES } from '../types';
import { returnErrors } from '../errorActions';
import { setItemsLoading } from '../itemActions';
import { Item } from '../../reducers/itemReducer';

interface Data {
  data: Item[];
}
interface ResData {
  type: ACTION_TYPES;
  payload: Item[];
}
interface ActionGetItems {
  (res: Data): ResData;
}

const actionGetItems: ActionGetItems = (res) => {
  return {
    type: ACTION_TYPES.GET_ITEMS,
    payload: res.data,
  };
};

const setItemsLoading = () => ({
  type: ACTION_TYPES.ITEMS_LOADING,
});

export const getItems = () => (dispatch: Dispatch<ResData | string> ) => {
  dispatch(setItemsLoading());
  axios
    .get('/api/data')
    .then((res) => {
      dispatch(actionGetItems(res));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
