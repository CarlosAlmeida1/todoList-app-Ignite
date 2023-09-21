import { Header } from './components/Header/Header'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={style.content}></div>
    </>
  )
}
