import './App.css';

const Searchitems = ({ setSearchItems, newSearchItems }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='searchForm'>
      <label htmlFor='search'>Search</label>
      <input 
        role="search"
        type="text" 
        id="search"
        value={newSearchItems}
        onChange={(e) => setSearchItems(e.target.value)}
      />
    </form>
  );
};
export default Searchitems;
