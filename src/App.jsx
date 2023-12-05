import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div id='app'>
      <NavBar/>
      <ItemListContainer tituloPresentacion="PC Componentes"/>
    </div>
  )
}

export default App
