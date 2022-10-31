import React from 'react'
import styles from './style.module.scss'
import sistemas from '../../img/sistemas-automatizados.jpeg'
const Layout = ({children}) => {
  return (
    <React.Fragment>
        <div className={styles.appBar}>
        <img className='img' src={sistemas} alt='img'></img>
        </div>
        <div className={styles.appBar2}>
            <span>ORDENES DE MANTENIMIENTO</span>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </React.Fragment>
  )
}

export default Layout;