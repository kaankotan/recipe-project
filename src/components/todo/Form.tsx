import React, { FormEvent, useState } from 'react';
import firebase from 'firebase';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle((e.target as HTMLInputElement).value);
  }

  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo")
    const todo = {
      title,
      complete: false
    }

    todoRef.push(todo);
  }

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  )
}