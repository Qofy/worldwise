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
      <Route path="/" element={<Homepage/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="price" element={<Pricing/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="app" element={<Applayout/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
