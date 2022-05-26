import {useState} from 'react';

const ItemForm = (props) =>{
    const initInputs = {name: props.name || "" , description: props.description || "", recyclable: props.recyclable || "", quantity: props.quantity || "", pricePerUnit: props.pricePerUnit || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            Name: <input type='text' name='name' value={inputs.name} onChange={handleChange} placeholder='Item Name' required/>
            Description: <input type='text' name='description' value={inputs.description} onChange={handleChange} placeholder='Brief Description' required/>
            Recycleable? <input type='text' name='recycleable' value={inputs.recyclable} onChange={handleChange} placeholder='Yes or No' required/>
            How Many?<input type='number' name='quantity' value={inputs.quantity} onChange={handleChange} required/>
            Price Per Unit?<input type='text' name='name' value={inputs.pricePerUnit} onChange={handleChange} required/>
            <button>SUBMIT</button>
        </form>


    )
}

export default ItemForm