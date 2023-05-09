import { useState } from "react";
import styles from './header.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';



export function Header({ handleAddTask }) {
    const [title, setTitle] = useState('');
  

    function handleSubmit(event) {
      event.preventDefault();
  
      handleAddTask(title);
      setTitle('');

     
    
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }
    return (
        <header className={styles.header}>
          
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
            <input type="text" placeholder="Add a New Task" onChange={onChangeTitle}
            value={title}/>
            <button>create<AiOutlinePlusCircle size={20}/></button>
            </form>
        </header>

    );
}

