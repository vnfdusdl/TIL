import React, { useState } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as setId } from 'uuid';
interface Item {
  id: string;
  product: string;
  quantity: number;
}
function App() {
  const [items, setItems] = useState<Item[]>([]);

  const onAddItem = (product: string) => {
    setItems([...items, { id: setId(), product, quantity: 1 }]);
  };

  return (
    <div className='App'>
      <ShoppingListForm onAdd={onAddItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
