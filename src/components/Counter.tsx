import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((counter) => ++counter)
  }

  const decrement = () => {
    setCounter((counter) => --counter)
  }

  return (
    <div className={classes.button}>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
