import React, { useState } from "react"
import AddBountyForm from "./bountyForm.js"

export default function Bounty(props) {
    const {name, bountyAmount, living, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>{ props.name}</h1>
                    <p>Bounty Amount: { props.bountyAmount}</p>
                    <p>Still On Earth: { props.living} </p>
                <button className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                
                <button className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
                </>
        :
            <>
            <AddBountyForm
                name={name}
                bountyAmount={bountyAmount}
                living={living}
                _id={_id}
                btnText="Submit Changes"
                submit={props.editBounty}
            />
            <br/>
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
        }
        </div>
    )
}