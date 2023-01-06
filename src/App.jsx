import { Routes, Route } from 'react-router-dom'
//import './App.scss'
import './index.css'

// * Pages * // 
import Moodboard from './pages/moodboard/Moodboard'
import NotFound from './pages/NotFound'
import ImagePage from './pages/ImagePage'
import SignupPage from './pages/user/SignupPage'
import LoginPage from './pages/user/LoginPage'
import LogoutPage from './pages/user/LogoutPage'

function App() {

  return (
    <div id="App">
      	<Routes>
			<Route path="/" element={<Moodboard />} />
            <Route path="*" element={<NotFound />} />
			<Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
			<Route path="/logout" element={<LogoutPage />} />
            <Route path="/images/:id" element={<ImagePage />} />
		</Routes>
    </div>
  )
}

export default App
