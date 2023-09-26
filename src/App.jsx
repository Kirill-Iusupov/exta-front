import {Routes, Route} from 'react-router-dom'


import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainPage from './pages/mainPage/MainPage'


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" index element={<MainPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
