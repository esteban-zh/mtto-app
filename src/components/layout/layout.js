import React from 'react'
import styles from './style.module.scss'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <div className={styles.appBar}>
            <span>MANTENIMIENTO</span>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </React.Fragment>
  )
}

export default Layout;