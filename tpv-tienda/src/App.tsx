import { Navbar } from './Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
