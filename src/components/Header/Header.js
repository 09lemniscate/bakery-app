import { Link } from 'react-router-dom';
import './Header.css'
const Header = ({state})=>{
    const cart = state.cart;
    return (
        <div className="header">
            <Link to="/cart">
            <img className="img" src={require("../../assets/cart.jpeg")}/>
            <span className='badge'>{cart.length}</span>
            </Link>
        </div>
    )
}

export default Header;