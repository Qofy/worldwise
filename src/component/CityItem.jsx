/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'
import { useCities } from '../contexts/CityContext'
import { Link } from 'react-router-dom'

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
export default function CityItem({city}){
  const {currentCity} = useCities()
  const {cityName, emoji, date, id,position} = city
  // console.log("Position",position)
  return(
    <li >
      <Link className={`${styles.cityItem} ${id ===currentCity.id ? styles['cityItem--active']:""}`} to={`${id}?lat=${position.lat}&lng${position.lng}`}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )  
}
