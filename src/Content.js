
import './App.css';
import Items from './Items';

function Content({newItems,handleItems,handleDelete}) {
   
  return (
    
    newItems.length ? (
      <Items newItems={newItems}
             handleItems={handleItems}
             handleDelete={handleDelete}  />
    ) : 
    (
      <main className="item">
        <p style={{ textAlign: 'center' }}>No items found.</p>
      </main>
    )
  );
}

export default Content;
