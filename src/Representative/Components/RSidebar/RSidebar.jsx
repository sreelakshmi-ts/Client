import React from 'react'
import style from './RSidebar.module.css'
import { Link } from 'react-router'

const RSidebar = () => {
  return (
    <div className={style.sidecontainer}>
      <h3 className={style.brand}>SmartMed</h3>
      <p className={style.role}>Representative</p>

      <nav className={style.sidemenu}>
        <Link className={style.item} to="/rep/dashboard">
          Dashboard
        </Link>

        <Link className={style.item} to="/rep/orders">
          Orders
        </Link>

        <Link className={style.item} to="/rep/inventory">
          Inventory
        </Link>

        <Link className={style.item} to="/rep/customers">
          Customers
        </Link>

        <Link className={style.item} to="/rep/messages">
          Messages
        </Link>

        <Link className={style.item} to="/rep/profile">
          Profile
        </Link>
        
      </nav>
    </div>
  )
}

export default RSidebar