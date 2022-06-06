import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './components/Item';
import ItemFormHandler from './components/ItemFormHandler';
import './App.css';

function App() {
  const [items, setItems] = useState([])

  const getItems = () => {
    axios.get('/teams')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }

  const addItem = (newItem) => {
    axios.post('/teams', newItem)
    .then(res => {
      setItems(prevItem => [...prevItem, res.data]) //Causes-ReRender
    })
    .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    console.log("wtf: " + itemId)
    axios.put(`/teams/${itemId}`, updates)
    .then(res => {  
      setItems(prevItem => prevItem.map(item => item._id !== itemId ? item : res.data))
    })
    .catch(err => console.log(err))
  }
  const deleteItem = (itemId) => {
    axios.delete(`/teams/${itemId}`)
    .then(res => {
      setItems(prevItem => prevItem.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems()
  }, [])

  const itemList = items.map(item => 
    <Item
    {...item}
    deleteItem={deleteItem}
    editItem={editItem}
    key={item.name}
    /> 
  )

  return (
    <div className="itemContainer">
      <h1>Team React Application</h1>
      <navbar>
        <hr />
          <ItemFormHandler btnText='Add a Team' submit={addItem}/>
        <hr />
      </navbar>
      {itemList}
      <hr />
    </div>
  );
}

export default App;
