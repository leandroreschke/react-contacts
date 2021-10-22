import { Link, useLocation } from "react-router-dom"


const Header = () => {
  //used to find the active one
  const { pathname } = useLocation()

  //simple style for the active route
  const style = {
    backgroundColor: 'black'
  }

  return(
    <header>
      <div class="row">
        <div className="col">
          <Link style={pathname === '/' ? style : null} to="/">Contact List</Link>
        </div>
        <div className="col">
          <Link style={pathname === '/newcontact' ? style : null} to="/newcontact">Add Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header