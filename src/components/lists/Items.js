import React, {useState} from 'react';
import {MDBBtn, MDBCol, MDBRow, MDBIcon, MDBContainer, MDBInput} from 'mdbreact';

const Items = (props) => {
  // console.log(props)
  const [itemName, setItemName] = useState(props.item.name);
  const [itemAmount, setItemAmount] = useState(props.item.amount);
  // console.log(props);
  return (
    <div>
      <form style={{width: '400px', margin: "auto", marginTop: "60px"}}>
        <div>
          <MDBInput label="Item Name" id='name' onChange={(event) => setItemName(event.target.value)}  id='name' value={itemName} placeholder={itemName}/>
        </div>
        <div>
          <MDBInput label="Item Name" id='amount' onChange={(event) => setItemAmount(event.target.value)}  id='amount' value={itemAmount} placeholder={itemAmount}/>
        </div>

        <MDBBtn color="mdb-color" onClick={() => { props.handleClick(props.id, props.item.id, itemName, itemAmount); }}>DELETE ITEM</MDBBtn>
      
        <MDBBtn color="mdb-color" onClick={() => { props.handleEdit(props.id, props.item.id, itemName, itemAmount) }} >Edit Item</MDBBtn>
    
      </form>
    </div>
  );
};

export default Items;


// <div>
//       <form>
//         <div>
//           <label htmlFor='name'>Item: </label>
//           <input
//             type='text'
//             id='name'
//             value={itemName}
//             onChange={(event) => setItemName(event.target.value)}
//             placeholder={itemName}
//           />
//         </div>
//         <div>
//           <label htmlFor='number'>Amount</label>
//           <input
//             type='number'
//             id='amount'
//             value={itemAmount}
//             onChange={(event) => setItemAmount(event.target.value)}
//             placeholder={itemAmount}
//           />
//         </div>
//         <button
//           type='button'
//           onClick={() => {
//             props.handleClick(props.id, props.item.id, itemName, itemAmount);
//           }}>
//           DELETE ITEM
//         </button>
//         <button
//           type='button'
//           onClick={() =>
//             props.handleEdit(props.id, props.item.id, itemName, itemAmount)
//           }>
//           
//         </button>
//       </form>
//     </div>