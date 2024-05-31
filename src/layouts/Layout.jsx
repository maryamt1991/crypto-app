import React from 'react'
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <div>
        <header>
            <h1>Crypto App</h1>
        </header>
        {children}
        <footer>
        <p>Develpoed by Maryam</p>
        </footer>
    </div>
  )
}

export default Layout