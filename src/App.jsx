import Applayout from "./pages/Applayout"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import { BrowserRouter, Routes,Route } from "react-router-dom"

function App() {
  return (
    
      <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="price" element={<Pricing/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="app" element={<Applayout/>}>
      <Route index element={<p>List of cities</p>}/>
      <Route path="cities" element={<p>Cities</p>}/>
      <Route path="countries" element={<p>Countries</p>}/>
      <Route path="form" element={<p>Form</p>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
