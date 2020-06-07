import * as actionTypes from './actionTypes';
import 'firebase/firestore';
export const createList = (list) => {
  console.log(list);
  return (dispatch, getState, { getFirestore }) => {
    // getfirestore from index middleware
    const fireStore = getFirestore(); //ref to firestore database
    fireStore
      .collection('lists')
      .add({
        ...list,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: actionTypes.ADD_LIST, list });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_ERROR', error });
      });
  };
};
export const addItem = (item) => {
  const { name, amount, id } = item;
  console.log(name, amount, id);

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database

    const firestore = getFirestore(); // ref to firestore api
    const firebase = getFirebase(); //ref to our data base
    firestore
      .collection('lists')
      .doc(id)
      .update({
        items: firebase.firestore.FieldValue.arrayUnion({
          name: name,
          amount: amount,
        }),
      })
      .then(() => {
        dispatch({ type: actionTypes.ADD_ITEM, item });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_UTENTE_ERROR', err });
      });
  };
};
/**washingtonRef.update({
    regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
}); */
