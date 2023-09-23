import { Header } from './components/Header/Header'
import {
  TaskSubmitForm,
  TaskTypes,
} from './components/TaskSubmitForm/TaskSubmitForm'
import { useState } from 'react'
import style from './App.module.css'

import './global.css'
import { TaskList } from './components/TaskList/TaskList'

export function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([])

  return (
    <>
      <Header />
      <div className={style.content}>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}
