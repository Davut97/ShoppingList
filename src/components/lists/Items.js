import React,{useState} from 'react'

export const Items = (props) => {
    // console.log(props)
    const [itemName,setItemName] = useState(props.item.name)
    const [itemAmount,setItemAmount] = useState(props.item.amount)
    return (
        <div>
            <p>{itemName}-{itemAmount}</p>
    <button onClick={()=>props.handleClick(props.id,props.item.id,props.item.name,props.item.amount)}>DELETE ITEM</button>

    <form onSubmit={console.log}>
            <h5>Create list</h5>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={console.log} />
            </div>
            <div>
              <label htmlFor="number">Amount</label>
              <input type="number" id="amount" onChange={console.log} />
            </div>

            <div>
              <button>Add item</button>
            </div>
          </form>
        </div>
    )
}


export default Items
