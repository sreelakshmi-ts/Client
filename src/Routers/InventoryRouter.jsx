import React from 'react'
import { Route, Routes } from 'react-router'
import IMyprofile from '../InventoryManager/Pages/IMyProfile/IMyprofile'
import ProductAdd from '../InventoryManager/Pages/ProductAdd/ProductAdd'
import StockManage from '../InventoryManager/Pages/StockManage/StockManage'
import AddStock from '../InventoryManager/Pages/AddStock/AddStock'

const InventoryRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='imyprofile' element={<IMyprofile/>} />
          <Route path='addproduct' element={<ProductAdd/>}/>
          <Route path='stockmanage' element={<StockManage/>}/>
          <Route path='updatestock/:id' element={<AddStock/>}/>

        </Routes>
    </div>
  )
}

export default InventoryRouter