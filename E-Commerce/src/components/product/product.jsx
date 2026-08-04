

import "./product.css";
function Product({name,image,price}) {
  return (
    <div className="product-card">
      <div className="product">
        <img src={image} alt={name} />
        <div className="product-details">
          <h3 className='product-name'>{name}</h3>
          <span className='product-price'>${price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;