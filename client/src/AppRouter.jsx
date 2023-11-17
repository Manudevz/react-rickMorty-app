import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'
import { Navigation  } from './components/Navigation'
import { MainPage, CharacterPage, SearchPage } from './pages'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<MainPage/>}/>
          <Route path='character/:id' element={<CharacterPage/>}/>
          <Route path='search' element={<SearchPage/>}/>
        </Route>   
        <Route path='*' element={<Navigate to='/'  />} />
      </Routes>
    </BrowserRouter>
  )

}