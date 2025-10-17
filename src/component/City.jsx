import { useEffect } from "react";
import { useCities } from "../contexts/CityContext";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
// import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity} = useCities();

  useEffect(
    function() {
      getCity(id);
    },
    [id, getCity]
  );

  // CRITICAL: Check if currentCity exists BEFORE destructuring
  if (!currentCity) {
    return <div className={styles.city}>Loading...</div>;
  }

  // Safe destructuring after null check
  const { cityName, emoji, date, notes } = currentCity;

  // // Handle case where required data is missing
  // if (!cityName) {
  //   return (
  //     <div className={styles.city}>
  //       <p>City data incomplete</p>
  //     </div>
  //   );
  // }

  

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      {/* <div>
        <ButtonBack />
      </div> */}
    </div>
  );
}

export default City;