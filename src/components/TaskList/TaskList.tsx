import { TaskTypes } from '../TaskSubmitForm/TaskSubmitForm'
import { Check, ClipboardText, Trash } from 'phosphor-react'
import styles from './TaskList.module.css'

type TaskSubmitFormProps = {
  tasks: TaskTypes[]
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

export function TaskList({ tasks, setTasks }: TaskSubmitFormProps) {
  function handleTaskComplete(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete }
        }
        return task
      })
    )
  }

  function handleTaskDelete(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const taskCount = tasks.length
  const taskCompleteCount = tasks.filter((task) => task.isComplete).length

  return (
    <>
      <div className={styles.info}>
        <p>
          Tarefas Criadas <span>{taskCount}</span>
        </p>
        <p>
          Concluidas{' '}
          <span>
            {taskCompleteCount} de {taskCount}
          </span>
        </p>
      </div>
      {taskCount > 0 ? (
        <ul className={styles.tasks}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <button
                onClick={() => handleTaskComplete(task.id)}
                className={
                  task.isComplete ? styles.taskComplete : styles.taskIncomplete
                }
              >
                <Check weight='bold' />
              </button>
              <span
                className={
                  task.isComplete ? styles.taskComplete : styles.taskIncomplete
                }
              >
                {task.title}
              </span>
              <button
                onClick={() => handleTaskDelete(task.id)}
                className={styles.delete}
              >
                <Trash weight='light' />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <ClipboardText weight='light' />
          <p>
            <strong>
              Você ainda não tem tarefas cadastradas <br />
            </strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      )}
    </>
  )
}
