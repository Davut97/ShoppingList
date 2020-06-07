import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lists: [
    {
      id: uuidv4(),
      title: '',
      isSelected: false,
      isCompleted: false,
      items: [
        {
          name: '',
          amount: 0,
        },
      ],
    },
  ],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LIST:
      console.log('created List', action.list);
      return state;

    default:
      return state;
  }
};

export default listReducer;
