import CityList from "./component/CityList"
import Applayout from "./pages/Applayout"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom"
import CountryList from "./component/CountryList"
import City from "./component/City"
import Form from "./component/Form"
import { CitiesProvider } from "./contexts/CityContext"


function App() {
 
  return (
    <CitiesProvider>
      <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="price" element={<Pricing/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="app" element={<Applayout/>}>
      <Route index element={<Navigate to="cities" replace/>}/>
      <Route path="cities" element={<CityList/>}/>
      <Route path="cities/:id" element={<City />}/>
      <Route path="countries" element={<CountryList/>}/>
      <Route path="form" element={<Form/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </CitiesProvider>
  )
}

export default App
