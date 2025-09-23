/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"

const Base_URL = "http://localhost:9001"
  const CitiesContext =createContext()


function CityContext({children}){
   const [cities, setCities] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading]= useState(false)


  useEffect(()=>{
    const fetchCities = async () =>{
      try{
      setLoading(true)
        const response = await fetch(`${Base_URL}/cities`)
        const data = await response.json()
        setCities(data)
        console.log(data)
      }catch{
        alert("There was an error when loading data")
      }finally{
        setLoading(false)
      }
    }

    fetchCities()
  }, [])

  return(
    <CitiesContext.Provider value={{
      cities,
      loading,
    }}>
      {children}
    </CitiesContext.Provider>
  )
}

function useCities(){
  const context = useContext(CitiesContext)
  return context
}
export {CityContext, useCities}