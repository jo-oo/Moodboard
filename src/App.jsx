import { Routes, Route } from 'react-router-dom'
import './App.scss'

// * Pages * // 
import Moodboard from './pages/moodboard/Moodboard'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div id="App">
      	<Routes>
			<Route path="/" element={<Moodboard />} />
            <Route path="*" element={<NotFound />} />
		</Routes>
    </div>
  )
}

export default App
