import  {Task} from "../Task";
import styles from './tasks.module.css';

export function Tasks({tasks, onDelete, onComplete}) {
    const taskQuantity= tasks.length;
    const CompletedTasks= tasks.filter(task => task.iscompleted).length;
    
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>

                <div>
                    <p>Created tasks</p>
                    <span>{taskQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed tasks</p>
                    <span>{CompletedTasks}of{taskQuantity}</span>
                </div>

            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
                ))}

            </div>
             </section>
    )
  
}

