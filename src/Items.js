import Listitems from "./Listitems";
const Items = ({handleDelete,handleItems,newItems}) => {
  return (
    <main >
          <ul>
          {newItems.map(item => (
            <Listitems 
            handleDelete={handleDelete}
            handleItems={handleItems}
            item={item}
            key={item.id}/>
          ))}   
        </ul>
      </main>
    
  )
}

export default Items;
