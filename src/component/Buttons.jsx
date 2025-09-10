/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Buttons({children, onclick, type = "button"}) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  )
}

export default Buttons