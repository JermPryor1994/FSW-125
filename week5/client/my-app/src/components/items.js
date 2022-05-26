import { useState } from "react"
import ItemForm from "./itemForm"

const Recycleditem = (props) =>{
    const {name, description, recyclable, quantity ,pricePerUnit, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        
        <div>
            {!editToggle ?
            <>
            <h3>{props.name}</h3>
            <p>Description: {props.description}</p>
            <p>Recycleable: {props.recyclable}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Price Per Unit: {props.pricePerUnit}</p>
            <button onClick={()=>props.deleteItem(_id)}>DELETE</button>
            </>
        :
            <>
            <ItemForm 
                name={name}
                description={description}
                recyclable={recyclable}
                quantity={quantity}
                pricePerUnit={pricePerUnit}
                _id={_id}
                submit={props.updateItem}
                />
            <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                SUBMIT
            </button>
            </>
        }
        </div>
    )
}

export default Recycleditem