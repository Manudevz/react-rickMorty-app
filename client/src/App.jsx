import { AppRouter } from "./AppRouter"
import RickAndMortyProvider from "./context/RickAndMortyProvider"

function App() {

  return (
    <RickAndMortyProvider>
      <AppRouter />
    </RickAndMortyProvider>
    
  )
}

export default App
