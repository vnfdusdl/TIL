import React, { useRef } from 'react';

interface ShoppinListFormProps {
  onAdd: (item: string) => void;
}

function ShoppingListForm({ onAdd }: ShoppinListFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const sumbitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    onAdd(newProduct);
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={sumbitHandler}>
      <input type='text' placeholder='Product name' ref={inputRef} />
      <button type='submit'>제출</button>
    </form>
  );
}

export default ShoppingListForm;
