import { useState } from 'react'
import './App.css'
import type { Task } from './types/task'
import TaskItem from './components/taskItem/TaskItem';
import TaskForm from './components/taskForm/TaskForm';

function App() {
  const [listTasks, setlistTasks] = useState<Task[]>([])

  const toggleTask = (id: number): void => {
    setlistTasks(
      listTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }

        return task
      })
    )
  }

  const addTask = (title: string): void => {
    setlistTasks([
      ...listTasks,
      {
        id: Date.now(),
        title: title,
        completed: false
      }
    ])
  }

  const deleteTask = (id: number): void => {
    setlistTasks(listTasks.filter((t) => id !== t.id))
  }

  return (
    <>
      <h1>My Todo List</h1>
      <TaskForm onAdd={addTask} />
      <ul>
        {listTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </>
  )
}

export default App
