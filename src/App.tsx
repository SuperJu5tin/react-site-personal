import './styles.css'
import NextPage from './components/NextPage'
import NavAppBar from './components/NavAppBar'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Certifications from './pages/Certifications'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavAppBar />
      <Home />
      <NextPage pageId='about-me' color='#89aedf' />
      <About />
      <NextPage pageId='portfolio'color='#89dbdf'/>
      <Portfolio />
      <NextPage pageId='certifications' color='#9cdf89'/>
      <Certifications />
      <Footer />
    </>
  )
}

export default App
