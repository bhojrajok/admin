import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Deliveries from './Pages/Deliveries'
import Accounts from './Pages/Accounts'
import Alerts from './Pages/Alerts'
import Categories from './Pages/Categories'
import Customers from './Pages/Customers'
import Teammanagement from './Pages/Teammanagement'
import Vendors from './Pages/Vendors'
import Wastemanagement from './Pages/Wastemanagement'
import 'bootstrap/dist/css/bootstrap.min.css';
const Page = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/deliveries' element={<Deliveries />} />
        <Route path='/team-management' element={<Teammanagement />} />
        <Route path='/vendors' element={<Vendors />} />
        <Route path='/waste-management' element={<Wastemanagement />} />
      </Routes>
    </div>
  )
}

export default Page
