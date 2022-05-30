import React, { useState } from "react"

export default function AddBountyForm(props) {
    const initInputs = { name: props.name || "", bountyAmount: props.bountyAmount || "", living: props.living || ""}
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

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={inputs.name}
                onChange={handleChange} 
                placeholder="Bounty Name"
                required/>

            <input 
                type="number" 
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange} 
                placeholder="Bounty Amount"
                required/>

            <input 
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange} 
                placeholder="Still On Earth?"
                required/>
            <br/>
            <br/>
            <button>{ props.btnText}</button>
        </form>
    )
}