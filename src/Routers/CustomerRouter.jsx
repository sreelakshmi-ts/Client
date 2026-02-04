import React from 'react'
import { Route, Routes } from 'react-router'
import CustDashboard from '../Customers/Pages/CDashboard/CustDashboard'
import Product from '../Customers/Pages/CProducts/Product'
import CMyprofile from '../Customers/Pages/CMyprofile/CMyprofile'
import CComplaints from '../Customers/Pages/CComplaints/CComplaints'
import MedicineView from '../Customers/Pages/MedicineView/MedicineView'


const CustomerRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='home' element={<CustDashboard/>} />
          <Route path='cproducts' element={<Product/>}  />
          <Route path='cproductsView/:id' element={<MedicineView/>}  />
          <Route path='cmyprofile' element={<CMyprofile/>}/>
          <Route path='ccomplaints' element={<CComplaints/>} />

        </Routes>
    </div>
  )
}

export default CustomerRouter