import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PlusCircle } from 'phosphor-react'

import styles from './TaskSubmitForm.module.css'

export function TaskSubmitForm() {
  return (
    <form onSubmit={handleTaskSubmit} className={styles.form}>
      <input
        type='text'
        placeholder='Adicione uma tarefa'
        value={newTask}
        onChange={handleTaskInput}
        required
      />
      <button type='submit' title='Criar nova tarefa'>
        Criar <PlusCircle />
      </button>
    </form>
  )
}
