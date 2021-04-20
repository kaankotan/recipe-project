import React from 'react'
import firebase from 'firebase';

export default function Todo({todo}: any) {

  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id)
    todoRef.remove();
  }

  const completeTask = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id)
    todoRef.update({
      complete: !todo.complete,
    })
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTask}>Complete</button>
    </div>
  )
}
