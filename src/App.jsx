import { Routes, Route } from 'react-router-dom'
import './App.scss'

// * Pages * // 
import Moodboard from './pages/moodboard/Moodboard'

function App() {

  return (
    <div id="App">
      	<Routes>
			<Route path="/" element={<Moodboard />} />
		</Routes>
    </div>
  )
}

export default App
