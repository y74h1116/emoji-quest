import './App.css'
import { RecoilRoot } from 'recoil'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Top } from './Top'
import { Profile } from './Profile'
import { Opponent } from './Opponent'
import { Battle } from './Battle'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/opponent" element={<Opponent/>}/>
          <Route path="/battle" element={<Battle/>}/>
          <Route path="/*" element={<Top/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
