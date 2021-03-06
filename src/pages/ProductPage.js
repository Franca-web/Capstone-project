import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductPage(props){
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);

    return(
        <div>
            <div className="back-to-results">
                <Link to="/">Back to results</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                           {product.ratings} stars ({product.numReviews} Reviews) 
                        </li>
                        <li>
                            Price: <b>${product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                             Quantity:
                             <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option> 
                             </select>
                        </li>
                        <li>
                            <button className='button'>
                                Add to Cart
                            </button>
                        </li>
                    </ul>

                </div>
                </div>
        </div>
    )
}
export default ProductPage;