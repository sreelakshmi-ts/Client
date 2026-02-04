import React from 'react'
import { Route, Routes } from 'react-router'
import EquiDashboard from '../EquipmentCustomer/Pages/Dashboard/EquiDashboard'

const EquipmentCustomerRoute = () => {
  return (
    <div>
        <Routes>
            <Route  path='/' element={<EquiDashboard/>} />
        </Routes>
    </div>
  )
}

export default EquipmentCustomerRoute