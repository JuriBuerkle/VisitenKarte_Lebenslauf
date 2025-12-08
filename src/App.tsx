
import type { JSX } from 'react'
import './App.css'
import Lebenslauf from './Lebenslauf/Lebenslauf'  
import VisitenKarte from './VisitenKarte/VisitenKarte'

function App(): JSX.Element {
  

  return (
    <>
      <Lebenslauf />
      <VisitenKarte />
    </>
  )
}

export default App

