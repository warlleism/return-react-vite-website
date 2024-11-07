import './app.css'
import GaleryCaroussel from './pages/components/galery'
import Header from './pages/components/header'
import HeaderText from './pages/components/text'
function App() {

  return (
    <div style={{ backgroundColor: '#fbfbfb' }}>
      <Header />
      <HeaderText />
      <GaleryCaroussel />
    </div>
  )
}

export default App
