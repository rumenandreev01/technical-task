import React from 'react';

import { Link } from 'react-router-dom';

export const CoinItem = (props) => {
    //destructuring the needed values from the props
    const { index, name, image, symbol, high24h, low24h, price } = props

    //setting the id to be used for redirecting to the detail page
    const id = index;
    
    return (      
      <div className='coin-item'>
        <Link className="item-link" to={`/${id}`}>
            <div>
              <div>
                  <img src={image} alt='cryptocurrency' />
                  <h1>{name}</h1>
                  <p>{symbol}</p>
              </div>
            <div>
                <p>
                Price: EUR {price.toLocaleString()}
                </p>
                <p className='coin-high24h'>
                High Price 24h: EUR {high24h.toLocaleString()}
                </p>
                <p className='coin-low24h'>
                Low Price 24h: EUR {low24h.toLocaleString()}
                </p>
            </div>
        </div>
        </Link>
      </div>
    );
}
  
export default CoinItem;