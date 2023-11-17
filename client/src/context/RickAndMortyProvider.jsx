import { getCharacterFromBackend } from '../utils'
import { useEffect, useState} from 'react'
import { RickAndMortyContext } from './RickAndMortyContext'


// eslint-disable-next-line react/prop-types
export const RickAndMortyProvider = ({children}) => {

  const [Characters, setCharacters] = useState({})
  console.log("🚀 ~ file: RickAndMortyProvider.jsx:10 ~ RickAndMortyProvider ~ Characters:", Characters)


  useEffect(() => {
    const getCharacetrPromise = async () => {
      const characters = await getCharacterFromBackend()
      setCharacters(characters)
    }
    getCharacetrPromise()
  }, [])
  
  return (
    <RickAndMortyContext.Provider value={{Characters: Characters}}>
      {children}
    </RickAndMortyContext.Provider>
  )
}

export default RickAndMortyProvider;