import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full shadow-lg flex items-center justify-between px-6">
        <div>
            <img src="/vite.svg" alt="logo navbar" />
        </div>

        <div className="flex justify-center gap-20 mr-28 my-6">
          <Link to='/'>
            <h3>Home</h3>
          </Link>

          <Link to='/about'>
            <h3>About us</h3>
          </Link>
            <h3>Cart</h3>
            <h3>Status</h3>
        </div>
    </div>
  )
}

export default Header