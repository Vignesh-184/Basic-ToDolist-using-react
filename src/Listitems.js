import { FaTrash } from 'react-icons/fa';
const Listitems = ({handleDelete,handleItems,item}) => {
  return (
   <li key={item.id} className="item">
              <input 
                type="checkbox"
                checked={item.checked}
                onChange={() => handleItems(item.id)}
              />
              <label style={{ margin: '0 10px' , userSelect:'None'} } onDoubleClick={()=>handleItems(item.id)}>{item.item}</label>
              <FaTrash
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
  )
}

export default Listitems