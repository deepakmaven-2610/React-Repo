// import React from "react";

// const Todos: React.FC<{items: string[]}> = (props) =>
// {
//     return (<ul>
//         {props.items.map((item) =>(
//         <li key={item}>{item}</li>
//         ))}
//     </ul>
//     );

// }

// export default Todos;

import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';   

const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) =>
{
    return (<ul className={classes.todos}>
        {props.items.map((item) =>(
       <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />  //617
        ))}
    </ul>
    );

}

export default Todos;