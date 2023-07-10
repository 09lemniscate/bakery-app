import "./ProductList.css";

const ProductList = ({ state, dispatch }) => {
  const { products, cart } = state;
  const handleAddToCart = (product)=>{
    dispatch({
        type:'ADD_TO_CART',
        payload:{
            id:product.id,
            name:product.name,
            img:product.img,
            quantity:1,
            price:product.price
        }
    })
  }
  const handleRemoveFromCart = (product)=>{
    dispatch({
        type:'REMOVE_FROM_CART',
        payload:product
    })
  }
  return (
    <>
      <h3 className="heading">Product List</h3>
      <div className="container">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <img loading="lazy" src={product.img} alt={product.name} className="image" />
              <div className="label-section">
                <span>{product.name}</span>
                <b>Rs. {product.price}</b>
              </div>
              {cart.some((p) => p.id === product.id) ? (
                <button className="btn btn-remove" onClick={()=>handleRemoveFromCart(product)}>Remove from Cart</button>
              ) : (
                <button className="btn btn-add" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
