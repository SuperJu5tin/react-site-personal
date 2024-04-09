import './styles.css'
import NextPage from './components/NextPage'
import NavAppBar from './components/NavAppBar'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Certifications from './pages/Certifications/Certifications'
import Home from './pages/Home'

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
    </>
  )
}

export default App
