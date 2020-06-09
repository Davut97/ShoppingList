import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { addItem,deleteItem } from '../../store/actions/listActions';
import Items from "./Items"
const List = (props) => {
  console.log(props.list); // to see match.params.id
  const { list,items } = props;
  const id = props.match.params.id;
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [fetchedItems,setFetchedItems] = useState(items)
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, amount, id);
    props.addItem({ name: name, amount: amount, id: id });
  };
  const handleDeleteItem = (listId,itemId,itemName,itemAmount)=>{
    // console.log(listId,itemId,itemName,itemAmount)
    props.deleteItem({listId:id,itemId:itemId,itemName:itemName,itemAmount:itemAmount})
  }
  useEffect(()=>{
    setFetchedItems(items)
  },[items])
  if (list) {
    return (
      <div>
        <span>
          {props.list.title}-{id}
        </span>
        <div>
          <form onSubmit={handleSubmit}>
            <h5>Create list</h5>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={handleChangeName} />
            </div>
            <div>
              <label htmlFor="number">Amount</label>
              <input type="number" id="amount" onChange={handleChangeAmount} />
            </div>

            <div>
              <button>Add item</button>
            </div>
          </form>
          {fetchedItems && fetchedItems.map((item)=>(
            <Items key={item.id} item={item} id={id} handleClick={handleDeleteItem}/>
          ))}
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const id = ownProps.match.params.id;
  const lists = state.firestore.data.lists;
  const list = lists ? lists[id] : null;
  console.log(lists,id)
  const items = state.firestore.data.lists ? state.firestore.data.lists[id].items : null;
  console.log(items)
  return {
    list: list,
    items :items,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (list) => dispatch(addItem(list)),
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};
export default compose(
  firestoreConnect(() => ["lists"]),
  connect(mapStateToProps, mapDispatchToProps),

)(List);





