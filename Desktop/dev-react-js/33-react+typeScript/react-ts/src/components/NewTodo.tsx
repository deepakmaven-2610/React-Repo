import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) =>{  //614
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {           //for submitting form use React Form Event
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value //if ? is there than you are unsure for the value and if ! is there then you are unsure.
        if(enteredText.trim().length === 0)
        {
            //throw error
            return;
        }
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'> Todo text </label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo </button>
        </form>
    );
};

export default NewTodo;