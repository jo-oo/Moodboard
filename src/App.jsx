import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import RequireAuth from './components/user/RequireAuth'
//import './App.scss'
import './index.css'

// * Pages * // 
import Moodboard from './pages/moodboard/Moodboard'
import NotFound from './pages/NotFound'
import ImagePage from './pages/ImagePage'
import SignupPage from './pages/user/SignupPage'
import LoginPage from './pages/user/LoginPage'
import LogoutPage from './pages/user/LogoutPage'
import ForgotPasswordPage from './pages/user/ForgotPasswordPage'
import UpdateProfilePage from './pages/user/UpdateProfilePage'

function App() {

  return (
    <div id="App">
      	<Routes>
            {/* Guest routes */}
            <Route path="*" element={<NotFound />} />
			<Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
			<Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Protected routes */}
			<Route path="/" element={
				<RequireAuth>
					<Moodboard />
				</RequireAuth>
			} />

			<Route path="/logout" element={
				<RequireAuth>
					<LogoutPage />
				</RequireAuth>
			} />

			<Route path="/update-profile" element={
				<RequireAuth>
					<UpdateProfilePage />
				</RequireAuth>
			} />

            <Route path="/images/:id" element={
				<RequireAuth>
					<ImagePage />
				</RequireAuth>
			} />
		</Routes>

    <ReactQueryDevtools position='bottom-right' />
    </div>
  )
}

export default App
