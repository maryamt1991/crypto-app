import React from 'react'
import { useState,useEffect } from 'react'
import { searchCoin } from '../../services/CryptoApi'
import { InfinitySpin } from 'react-loader-spinner'
import styles from './Search.module.css'

function Search({currency,setCurrency}) {
  const [text,setText]=useState("");
  const [coins,setCoins]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    const controller=new AbortController();
    setCoins([]);
    if (!text) 
      {setIsLoading(false)
      return;}
    const search=async()=>{
      try{
        const res=await fetch(searchCoin(text),{signal:controller.signal});
        const json=await res.json();
        console.log(json)
        if (json.coins) {
          setIsLoading(false)
          setCoins(json.coins)
        }
          
          else{
        alert(json.status.error_message);
          }
      }
      catch(error){
if(error.name!=="AbortError"){
  alert(error.message);
}
      }
     
    };
    setIsLoading(true);
    search();
    return ()=>controller.abort();
  },[text])
  return (
   
    <div className={styles.searchBox}>
        <input type="text" placeholder='Search' value={text} onChange={e=>setText(e.target.value)}/>
        <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        {(!!coins.length || isLoading) && (
          <div className={styles.searchResult}>
          {isLoading && <InfinitySpin/>}
          <ul>
            {
              (coins).map (coin=><li key={coin.id}>
                <img src={coin.thumb}/>
                <p>{coin.name}</p>
              </li>)
            }
          </ul>
        </div>
        ) }
        
    </div>
  )
}

export default Search