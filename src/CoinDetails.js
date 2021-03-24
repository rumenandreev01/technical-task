import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Moment from 'react-moment';
import axios from 'axios';
import parse from 'html-react-parser';

export const CoinDetails = () => {
    //initial value of the data
    const [coinData, setCoinData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    //extracting the id parameter passed 
    const { id } = useParams()

    useEffect(() => {
        axios( `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&sparkline=true`)
        .then((response) => {
            //setting the data
            setCoinData(response.data);
        })
        .catch((error) => {
            //setting the error
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
        }, [id]);
        
    
  
   //if loading data
   if (loading) return <div>Loading...Please Wait</div>;

   //if error has occured
   if (error) return <div>An Error has occurred</div>;  
    
   
    return (
            <div className="details">                  
                <h3 className="details-title">{coinData.name}</h3>
                <div className="details-section">
                    Symbol: <span className="coin-detail">{coinData.symbol ? coinData.symbol : "N/A"}</span>
                </div>
                <div className="details-section">
                    Hashing Algorithm: <span className="coin-detail">{coinData.hashing_algorithm ? coinData.hashing_algorithm : "N/A" }</span>
                </div>
                <div className="details-section">
                     Description: <span className="coin-detail">{coinData.description["en"] ? parse(coinData.description["en"]) : "N/A" }</span>
                </div>
                <div className="details-section">
                    Market Cap: <span className="coin-detail">{coinData.market_data["market_cap"]["eur"].toLocaleString() ? coinData.market_data["market_cap"]["eur"].toLocaleString() : "N/A" } </span>
                </div>
                <div className="details-section">
                    Website: <span className="coin-detail">{coinData.links["homepage"] ? <a href={coinData.links["homepage"]} target="_blank" rel="noreferrer">{coinData.links["homepage"]}</a> : "N/A"}</span>
                </div>
                <div className="details-section">
                    Genesis Date: <span className="coin-detail"> {coinData.genesis_date ? <Moment format="DD.MM.YYYY">{coinData.genesis_date}</Moment> : "N/A"}</span>
                </div>     
            </div>     
        )
     }
export default CoinDetails;