import Header from './components/Header'
import Habilidades from './components/Habilidades'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Rodape from './components/Rodape'

function App() {
  return (
    <div className="site">
      <Header
        nome="Gildevan Carlos Pereira dos Santos"
        descricao="Tenho 33 anos, estudo programação e quero trabalhar com desenvolvimento web."
        foto="/minhafoto.jpg"
      />
      <main>
        <Habilidades />
        <SobreMim />
        <Projetos />
      </main>
      <Rodape />
    </div>
  )
}

export default App
