import {Routes, Route} from 'react-router-dom'


import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainPage from './pages/mainPage/MainPage'


function App() {

  return (
    <div className='flex flex-col h-[100vh] justify-between'>
      <Header />
        <Routes>
          <Route path="/" index element={<MainPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
