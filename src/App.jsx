import { useEffect, useState } from "react"
import CityList from "./component/CityList"
import Applayout from "./pages/Applayout"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import CountryList from "./component/CountryList"
import City from "./component/City"
import Form from "./component/Form"

const Base_URL = "http://localhost:9000"

function App() {
  const [cities, setCities] = useState([])
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
  return (
    
      <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="price" element={<Pricing/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="app" element={<Applayout/>}>
      <Route index element={<CityList cities = {cities} isLoading={loading}/>}/>
      <Route path="cities" element={<CityList cities = {cities} isLoading={loading}/>}/>
      <Route path="cities/:id" element={<City cities={cities}/>}/>
      <Route path="countries" element={<CountryList cities={cities} isLoading={loading}/>}/>
      <Route path="form" element={<Form/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
