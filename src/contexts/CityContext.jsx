/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"

const Base_URL = "http://localhost:9001"
const CitiesContext = createContext()

function CityContext({ children }) {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`${Base_URL}/cities`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setCities(data)
        console.log('Cities loaded:', data)
      } catch (err) {
        const errorMessage = `Error loading cities: ${err.message}`
        setError(errorMessage)
        console.error(errorMessage)
        alert(errorMessage)
      } finally {
        setLoading(false)
      }
    }

    fetchCities()
  }, [])

  async function getCity(id) {
    if (!id) {
      console.warn('getCity called without an ID')
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`${Base_URL}/cities/${id}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setCurrentCity(data)
      console.log('City loaded:', data)
    } catch (err) {
      const errorMessage = `Error loading city ${id}: ${err.message}`
      setError(errorMessage)
      console.error(errorMessage)
      alert(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  // Helper function to clear current city
  function clearCurrentCity() {
    setCurrentCity(null)
  }

  // Helper function to clear errors
  function clearError() {
    setError(null)
  }

  return (
    <CitiesContext.Provider value={{
      cities,
      loading,
      currentCity,
      error,
      getCity,
      clearCurrentCity,
      clearError
    }}>
      {children}
    </CitiesContext.Provider>
  )
}

function useCities() {
  const context = useContext(CitiesContext)
  if (!context) {
    throw new Error('useCities must be used within a CityContext')
  }
  return context
}

export { CityContext, useCities }