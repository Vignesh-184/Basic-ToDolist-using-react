import React, { useState } from 'react';
import Content from './Content';
import Additem from './Additem';
import Footer from "./Footer";
import Header  from "./Header";
import Searchitems from './Searchitems';
import './App.css';

function App() {
  const [newItems, setItems] = useState(
    JSON.parse(localStorage.getItem('TODOList')) || []
  );

  const [newItems1, setItems1] = useState('');
  const [newSearchItems, setSearchItems] = useState(''); 
  const handleItems = (id) => {
    const updatedItems = newItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem("TODOList", JSON.stringify(updatedItems));
  };

  const addItem = (item) => {
    const id = newItems.length ? newItems[newItems.length - 1].id + 1 : 1;
    const addedItem = { id, checked: false, item };
    const updatedItem = [...newItems, addedItem];
    setItems(updatedItem);
    localStorage.setItem("TODOList", JSON.stringify(updatedItem));
  };

  const handleDelete = (id) => {
    const updatedItems = newItems.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("TODOList", JSON.stringify(updatedItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems1) return;
    addItem(newItems1);
    setItems1('');
  };

  return (
    <div className="App">
      <Header title="TO DO LIST" />

      <Additem
        newItems1={newItems1}
        setItems1={setItems1}
        handleSubmit={handleSubmit}
      />

      <Searchitems
        newSearchItems={newSearchItems}
        setSearchItems={setSearchItems}
      />

      <Content
        newItems={newItems.filter(item =>
          item.item.toLowerCase().includes(newSearchItems.toLowerCase())
        )}
        handleItems={handleItems}
        handleDelete={handleDelete}
      />

      <Footer length={newItems.length} />
    </div>
  );
}

export default App;
