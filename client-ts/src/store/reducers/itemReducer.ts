import { AnyAction } from 'redux'

import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  ITEMS_LOADING,
} from '../actions/types';

// interface ActionPayload {
//   type: string
//   payload: Item[]
// }

export interface Item {
  _id: string;
  name: string;
  date: Date;
}

interface State {
  items: Item[];
  loading: boolean;
}

const initialState: State = {
  items: [],
  loading: false,
};

export default function itemReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
