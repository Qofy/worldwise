/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"

const Base_URL = "http://localhost:9001"
const CitiesContext = createContext()

function CityContext({ children }) {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})


  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${Base_URL}/cities`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setCities(data)
        console.log('Cities loaded:', data)
      } catch (err) {
        const errorMessage = `Error loading cities: ${err.message}`
        alert(errorMessage)
      } finally {
        setLoading(false)
      }
    }

    fetchCities()
  }, [])

   async function getCity(id) {
    try {
        setLoading(true)
        const response = await fetch(`${Base_URL}/cities/${id}`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setCurrentCity(data)
        console.log('Cities loaded:', data)
      } catch (err) {
        const errorMessage = `Error loading cities: ${err.message}`
        alert(errorMessage)
      } finally {
        setLoading(false)
      }
   }
     

  return (
    <CitiesContext.Provider value={{
      cities,
      loading,
      currentCity,
      getCity
    }}>
      {children}
    </CitiesContext.Provider>
  )
}

function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined) {
    throw new Error('CitiesContex was used outside the CitiesProvider')
  }
  return context
}

export { CityContext, useCities }