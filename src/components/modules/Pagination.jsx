import styles from './Pagination.module.css'
import React, { useState } from 'react'

function Pagination({page , setPage}) {
   
    const previousHandler=()=>{
       if(page<=1) return;
setPage((page)=>page-1);
    }
    const nextHandler=()=>{
        if (page>10) return;
setPage((page)=>page+1);
    }
  return (
    <div className={styles.pagination}>
        <button onClick={nextHandler} className={page===1 ? styles.disabled : null}>next</button>
        <p className={page===1? styles.selected : null}>1</p>
        <p className={page===2? styles.selected : null}>2</p>
        {page>2 && page<9 &&(
          <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
          </>
        )}
        <span>...</span>
        <p className={page===9? styles.selected : null} >10</p>
        <p className={page===11? styles.selected : null}>11</p>
        <button onClick={previousHandler} className={page===11 ? styles.disabled : null}>prev</button>
    </div>
  )
}

export default Pagination