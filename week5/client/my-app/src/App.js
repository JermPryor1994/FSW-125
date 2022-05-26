import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import ItemForm from './components/itemForm';
import Recycleditem from './components/items';



function App() {
  const [recItems, setRecycled] = useState()

  const getItems = () =>{
    axios.get('/items')
    .then(res => setRecycled(res.data))
    .catch(err => console.log(err))
  }

  const addItem = (newItem) =>{
    axios.post('/items', newItem)
    .then(res => setRecycled(itemsArray => [...itemsArray, res.data]))
    .catch(err => console.log(err))
  }

  const updateItem = (update, itemId) =>{
    axios.put(`/items/${itemId}`, update)
    .then(res => setRecycled(itemsArray => itemsArray.map(item => item._id !== itemId ? item : res.data)))
    .catch(err => console.log(err))
  }

  const deleteItem = (itemId) =>{
    axios.delete(`/items/${itemId}`)
    .then(res => setRecycled(itemsArray => itemsArray.filter(item => item._id !== itemId)))
    .catch(err => console.log(err))
  }

  useEffect(getItems())

  return (
    <div className="App">
      <header>Recycled Items</header>
      <div>
        <ItemForm onSubmit={addItem}/>
      </div>
      <div>
        {recItems.map(item =>{
          <Recycleditem {...item} key={item._id} deleteItem={deleteItem} updateItem={updateItem} />})}
      </div>
    </div>
  );
}

export default App;
