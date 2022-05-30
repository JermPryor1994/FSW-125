import React, { useState, useEffect } from "react";
import axios from "axios"
import Bounty from "./components/bounty.js"
import AddBountyForm from "./components/bountyForm"

export default function App() {
  const [bountyHunter, setBountyHunter] = useState([])

  function getBounty() {
    axios.get("/bountyHunter")
    .then(res => setBountyHunter(res.data))
    .catch(err => console.log(err))
  }
// Add Bounty
  function addBounty(newBountyHunter) {
    axios.post("/bountyHunter", newBountyHunter)
    .then(res => {
      setBountyHunter(prevBounty => [...prevBounty, res.data])
    })
    .catch(err => console.log(err))
  }
// Delete Bounty
  function deleteBounty(bountyId) {
    axios.delete(`/bountyHunter/${bountyId}`)
    .then(res => {
      setBountyHunter(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

 // Update Bounty 
  function editBounty(updates, bountyId) {
    axios.put(`/bountyHunter/${bountyId}`, updates)
      .then(res => {
        setBountyHunter(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounty()
  }, [])

  return (
    <div>
      <header className="header">Bounty Hunters</header>
      <br/>
      <div className="bounty-container">
        <AddBountyForm
          submit={addBounty}
          btnText = "Add Bounty"
        />
        <br/>
        <br/>

        { 
          bountyHunter.map(bounty => 
            <Bounty 
              {...bounty} 
              key={bounty.name}
              deleteBounty={deleteBounty}
              editBounty={editBounty}/>) 
          }
      </div>
    </div>
  )
}
