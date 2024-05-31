import React , {useEffect,useState}from 'react'
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/Pagination';
import Search from '../modules/Search';
import Chart from '../modules/Chart';

function HomePage() {
    const [coins,setCoins]=useState([]);
    const [isLoading , setISloading]=useState(true);
    const [page,setPage]=useState(1);
    const [currency,setCurrency]=useState("usd");
    const [chart,setChart]=useState(null);
    useEffect(()=>{
{/* 
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&category=layer-1&per_page=20&page=1&x_cg_demo_api_key=CG-rJg5teR2pU1QdNuewJnrBEi7").then((res)=>res.json()).then((json)=>console.log(json));
*/}
setISloading(true);
      const getData=async()=>{
    const res=await fetch(getCoinList(page, currency))
    const json=await res.json();
    setCoins(json); 
    setISloading(false);
      }
      getData();
   },[page , currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
      <Pagination page={page} setPage={setPage}/>
        <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
        {!!chart && <Chart chart={chart} setChart={setChart}/> }
        
    </div>
  )
}

export default HomePage