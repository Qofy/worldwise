import { NavLink } from "react-router-dom"

function PageNav() {
  return (
    <nav>
      <ul>
         <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
      <NavLink to="/price">Price</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      </ul>
    </nav>
  )
}

export default PageNav
