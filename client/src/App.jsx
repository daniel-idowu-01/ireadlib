import { Routes, Route } from "react-router-dom"
import { Home, About, Blog, Shop, SellEbook, SingleBook, SignUp, Login } from "./pages"
import { Dashboard, DashboardLayout, UploadBook, ManageBooks, EditBooks } from "./dashboard/"

function App() {
  return (
    <div className="inter overflow-x-hidden">
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sell-your-book' element={<SellEbook />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/book/:id' element={<SingleBook />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          <Route element={<DashboardLayout />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/dashboard/upload' element={<UploadBook />} />
            <Route path='/admin/dashboard/manage' element={<ManageBooks />} />
            <Route path='/admin/dashboard/edit-book/:id' element={<EditBooks /> } />
          </Route>

        </Routes>
      </div>
    </div>
  )
}

export default App
