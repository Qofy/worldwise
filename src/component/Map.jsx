import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { useNavigate } from "react-router-dom";


function Map() {
  const [searchParam, setSearchParam] =useSearchParams()
  const lat = searchParam.get("lat")
  const lng = searchParam.get("lng")
  const navigate = useNavigate()

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h2>Map</h2>
      <h1>Position: {lat} {lng}</h1>
    </div>
  )
}

export default Map
