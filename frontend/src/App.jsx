import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignUpPage from './pages/auth/signup/SignUpPage'
import LoginPage from './pages/auth/login/LoginPage'
import NotificationPage from './pages/notification/NotificationPage'
import ProfilePage from './pages/profile/ProfilePage'
import Sidebar from './components/common/Sidebar'
import RightPanel from './components/common/RightPanel'

function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
      {/* Left Sidebar */ }
      <Sidebar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/notifications' element={<NotificationPage />} />
				<Route path='/profile/:username' element={<ProfilePage />} />
			</Routes>
      <RightPanel />
		</div>
	);
}

export default App
