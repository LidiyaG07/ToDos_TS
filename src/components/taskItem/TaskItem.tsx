import type { Task } from "../../types/task"
import styles from './taskItem.module.css'

interface TaskItemProps {
    task: Task,
    onToggle: (id: number) => void,
    deleteTask: (id: number) => void
}

const TaskItem = ({ task, onToggle, deleteTask }: TaskItemProps) => {

    return (
        <li className={styles.task}>
            <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</div>
            <button onClick={() => onToggle(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}

export default TaskItem