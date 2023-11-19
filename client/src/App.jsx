import { NavBar } from "./components"
import { Routes, Route } from "react-router-dom"
import { Home, About, Blog, Shop, SellEbook, SingleBook } from "./pages"

function App() {
  return (
    <div className="inter overflow-x-hidden">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sell-your-book' element={<SellEbook />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/book/:id' element={<SingleBook />} />
      </Routes>
    </div>
  )
}

export default App
