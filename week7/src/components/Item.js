import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"


const Item = ({editItem, deleteItem, name, city, score, colors, _id}) => {
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="item">
            { !editToggle ?
                <>
                    <p class="medium">Name: {name}</p> 
                    <p class="medium">City: {city}</p> 
                    <p class="medium">Score: {score}</p>
                    <p class="medium">Colors: {colors}</p>
                    {/* <p class="wide">{_id} </p>  */}
                    <p class="narrow">
                    <button className="delete-btn" onClick={() => deleteItem(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </p> 
                </>
                :
                <>
                    <ItemFormHandler 
                    name={name}
                    city={city}
                    score={score}
                    colors={colors}
                    _id={_id}
                    btnText='Submit'
                    submit={editItem}/>
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>             
            }   
        </div>
    )
}

export default Item;