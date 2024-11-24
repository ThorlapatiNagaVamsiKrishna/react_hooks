import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav>
            <Link to='/about'><li>About Us</li></Link>
            <Link to="/product"><li>Product</li></Link>
            <Link to="/login"><li>Login</li></Link>
        </nav>
    )
}

export default Header