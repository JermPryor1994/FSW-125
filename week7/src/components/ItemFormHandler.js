import { useState } from "react";

const ItemFormHandler = ({name, city, score, finalist, colors, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', city: city || '', score: score || '', finalist: finalist || '', colors: colors || ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={handleChange}
            placeholder='Team Name...'/>
            <input
            type='text'
            name="city"
            value={inputs.city}
            onChange={handleChange}
            placeholder="City..."/>
            <input
            type='number'
            name="score"
            value={inputs.score}
            onChange={handleChange}
            placeholder="Score..."/>
            <input
            type='text'
            name="colors"
            value={inputs.colors}
            onChange={handleChange}
            placeholder="Colors..."/>
            <button className="add-item">{btnText}</button>
        </form>
    )
}

export default ItemFormHandler;