import React from 'react'
import './styles.css'

const Counter = ({ counter }) =>
    <div key={counter.id} className="col-sm-6 col-md-3">
        <div>{console.log("COUNTER", counter)}</div>
        <div className={"product"} >
            <div className="stats">
                <div className="stats-container">
                    <span className="product_name">{counter.name}</span>
                    {/* <span className="product_name">{product.name}</span> */}
                    {/* <p>{product.description}</p> */}
                </div>
            </div>
        </div>
    </div>;

export default Counter
