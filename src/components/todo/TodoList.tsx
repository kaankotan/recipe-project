import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import Todo from './Todo';

export default function TodoList() {
  const [todoList, setTodoList] = useState<any[]>();

  // [] at the end means work only for once at initial render.
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id,...todos[id] })
      }
      console.log(todoList);
      setTodoList(todoList);
    })
  },[])
  return (
    <div>
      {todoList?.map((todo, index) => (
        <Todo todo={todo} key={index}/>
      ))}
    </div>
  )
}
