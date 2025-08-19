// import AppNav from "../component/AppNav"
import Sidebar from "../component/Sidebar"
import styles from './Applayout.module.css'
import Map from "../component/Map"

function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
    </div>
  )
}

export default Applayout
