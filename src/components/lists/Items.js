import React, {useState} from 'react';

const Items = (props) => {
  // console.log(props)
  const [itemName, setItemName] = useState(props.item.name);
  const [itemAmount, setItemAmount] = useState(props.item.amount);
  // console.log(props);
  return (
    <div>
      <form>
        <div>
          <label htmlFor='name'>Item: </label>
          <input
            type='text'
            id='name'
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            placeholder={itemName}
          />
        </div>
        <div>
          <label htmlFor='number'>Amount</label>
          <input
            type='number'
            id='amount'
            value={itemAmount}
            onChange={(event) => setItemAmount(event.target.value)}
            placeholder={itemAmount}
          />
        </div>
        <button
          type='button'
          onClick={() => {
            props.handleClick(props.id, props.item.id, itemName, itemAmount);
          }}>
          DELETE ITEM
        </button>
        <button
          type='button'
          onClick={() =>
            props.handleEdit(props.id, props.item.id, itemName, itemAmount)
          }>
          Edit item
        </button>
      </form>
    </div>
  );
};

export default Items;
