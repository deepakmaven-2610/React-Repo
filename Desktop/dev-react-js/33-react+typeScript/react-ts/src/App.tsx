import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
// import './App.css';
import { useState } from 'react';
import Todo from './models/todo';

function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText : string) => {
   const newTodo = new Todo(todoText);

   setTodos((prevTodos) => {
    return prevTodos.concat(newTodo);
   })
  };

  // return (
  //   <div>
  //   <Todos items={['Learn React', 'Learn TypeScript']}/>
  //   </div>
  // );

  const RemoveTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler}/>
    <Todos items={todos} onRemoveTodo={RemoveTodoHandler}/>
    </div>
  );
}

export default App;
