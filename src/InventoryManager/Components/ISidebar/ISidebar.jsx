import React from 'react'
import style from './ISidebar.module.css'
import { Link } from 'react-router'

const ISidebar = () => {
  return (
  
    <div className={style.sidecontainer}>
  <h3 className={style.brand}>SmartMed <p className={style.role}>Inventory Manager</p></h3>
  

  <nav className={style.sidemenu}>
    <Link className={style.item} to="/inventory">
      Dashboard
    </Link>

    <Link className={style.item} to="/inventory/addproduct">
      Add Medicines
    </Link>

    <Link className={style.item} to="/inventory/stockmanage">
      Stock Management
    </Link>

    <Link className={style.item} to="/inventory/orders">
      Orders
    </Link>

    <Link className={style.item} to="/inventory/suppliers">
      Suppliers
    </Link>

    <Link className={style.item} to="/inventory/alerts">
      Low Stock Alerts
    </Link>
  </nav>
</div>

  )
}

export default ISidebar