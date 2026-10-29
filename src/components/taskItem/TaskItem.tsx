import type { Task } from "../../types/task"

interface TaskItemProps {
    task: Task,
    onToggle: (id: number) => void,
    deleteTask: (id: number) => void
}

const TaskItem = ({ task, onToggle, deleteTask }: TaskItemProps) => {
    return (
        <li>
            <div>{task.title}</div>
            <button onClick={() => onToggle(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>delete</button>
        </li>
    )
}

export default TaskItem