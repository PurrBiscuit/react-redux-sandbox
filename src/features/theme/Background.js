import { useDispatch } from 'react-redux'

import styles from './Background.module.css';
import { toggle } from './backgroundSlice'

export const Background = () => {
  const dispatch = useDispatch()

  return <button
    className={styles.button}
    aria-label="Increment value"
    onClick={() => dispatch(toggle())}
  >
    Toogle Background
  </button>
}
