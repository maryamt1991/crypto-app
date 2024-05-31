const BASE_URL="https://api.coingecko.com/api/v3";
const API_KEY="CG-rJg5teR2pU1QdNuewJnrBEi7"
const getCoinList=(page , currency)=>{
      return `${BASE_URL}/coins/markets?vs_currency=${currency}&ids=bitcoin&category=layer-1&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
       
};
const searchCoin=query=>{
      return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
} 
const marketChart=coin=>{ return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`}
export {getCoinList , searchCoin, marketChart}