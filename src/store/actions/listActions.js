import * as actionTypes from './actionTypes';
import 'firebase/firestore';
export const createList = (list) => {
  return (dispatch, getState, { getFirestore }) => {
    // getfirestore from index middleware
    const fireStore = getFirestore(); //ref to firestore database
    fireStore
      .collection('lists')
      .add({
        ...list,
      })
      .then(() => {
        dispatch({ type: actionTypes.ADD_LIST, list });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_ERROR', error });
      });
  };
};
