import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css"
const Cart = ({state,dispatch})=>{
    const {cart} = state;
    const [total,setTotal] = useState(0)
    const handleChangeQty = (id,qty)=>{
        dispatch({
            type:'CHANGE_QUANTITY',
            payload:{
                id,qty
            }
    })
    }
    useEffect(()=>{
        setTotal(cart?.reduce((acc,prod)=>acc+Number(prod.price)*prod.quantity,0))
    },[cart])
    return (
        <>
        <Link to="/">
            <img className="back-img" src={require("../../assets/back.png")}/>
            </Link>
            <h3 className="text-align-center">Cart</h3>
            <h4 className="text-align-center">Subtotal: Rs {total}</h4>
            {cart.length ? 
            (
                cart.map((product)=>{
                    return (
                        <>
                        <div className="item" key={product.id}>
                            <img className="item-img" src={product.img} alt={product.name} />
                            <div>
                            <>
                                <h4>Name : {product.name}</h4>
                                <p>Price : Rs {(product.quantity)*(product.price)}</p>
                            </>
                            <div className="qty-btn">
                                <h3>Quantity</h3> : 
                                <button onClick={()=>handleChangeQty(product.id,product.quantity-1)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={()=>handleChangeQty(product.id,product.quantity+1)}>+</button>
                            </div>
                            </div>
                        </div>
                        
                       
                        </>
                    )
                })
            ) : <span>Cart is empty</span>    
        }
        </>
    )
}

export default Cart;