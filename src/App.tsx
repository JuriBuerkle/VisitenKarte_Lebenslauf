
import type { JSX } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lebenslauf from './Lebenslauf/Lebenslauf'
import VisitenKarte from './VisitenKarte/VisitenKarte'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VisitenKarte />} />
        <Route path="/lebenslauf" element={<Lebenslauf />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

