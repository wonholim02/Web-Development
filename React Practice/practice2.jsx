import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
  { id: 5, name: 'Chicken', category: 'Meat' },
  { id: 6, name: 'Beef', category: 'Meat' }
];

function ItemList() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={query} onChange={handleQueryChange} />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;