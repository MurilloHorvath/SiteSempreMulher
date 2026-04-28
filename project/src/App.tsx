import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Layout
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Container from './layout/Container'

//Pages + SubPages
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import NossoTrabalho from './pages/NossoTrabalho'
import InformeSe from './pages/InformeSe'
import ComoAjudar from './pages/ComoAjudar'
import AgoModaHome from './pages/AgoModa/AgoModaHome'

function App() {
    return (
        <Router>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/QuemSomos' element={<QuemSomos/>}/>
                    <Route path='/NossoTrabalho' element={<NossoTrabalho/>}/>
                    <Route path='/InformeSe' element={<InformeSe/>}/>
                    <Route path='/ComoAjudar' element={<ComoAjudar/>}/>
                    <Route path='/AgoModaHome' element={<AgoModaHome/>} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default App
