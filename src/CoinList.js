import React, { useState, useEffect } from 'react';

import CoinItem from './CoinItem';

import axios from 'axios';

export const CoinList = () => {
    //initial value of the data
    const [coinsData, setCoinsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //setting the URL
    const URL =  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1'

    //fetching the data from the API
    useEffect(() => {
        axios(URL)
        .then((response) => {
            //setting the data
            setCoinsData(response.data);
        })
        .catch((error) => {
            //setting the error
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
        }, []);
        
     //if loading data
   if (loading) return <div>Loading...Please Wait</div>;

   //if error has occured
   if (error) return <div>An Error has occurred</div>;  
    

    return (
        <>
          <h3 className="list-heading">Click on an item to view more details</h3>
          <div className="list">
            {coinsData && coinsData.map(coinItem => {
                return (
                        <CoinItem
                            key={coinItem.id}
                            index={coinItem.id}
                            image={coinItem.image}
                            name={coinItem.name}
                            price={coinItem.current_price}
                            symbol={coinItem.symbol}        
                            high24h={coinItem.high_24h}
                            low24h={coinItem.low_24h}
                        />
                );
            })}
        </div>
        </>        
      
    )
}