import React from 'react'
import { Route, Routes } from 'react-router'
import DDashboard from '../Delivery/Pages/DDashboard/DDashboard'
import DMyProfile from '../Delivery/Pages/DMyProfile/DMyProfile'

const DeliveryRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<DDashboard/>} />
            <Route path='dmyprofile' element={<DMyProfile/>}/>
            
        </Routes>
    </div>
  )
}

export default DeliveryRouter