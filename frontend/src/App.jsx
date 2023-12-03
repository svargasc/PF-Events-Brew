import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import EventsPage from './pages/EventsPage'
import EventsFormPage from './pages/EventsFormPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/EventContext'
import Navbar from './components/Navbar'


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={< HomePage />} /> 
            <Route path='/login' element={< LoginPage />} /> 
            <Route path='/register' element={< RegisterPage />} /> 

            <Route element={<ProtectedRoute/>}>
              <Route path='/events' element={< EventsPage />} /> 
              <Route path='/add-event' element={< EventsFormPage />} /> 
              <Route path='/events/:id' element={< EventsFormPage />} /> 
              <Route path='/profile' element={< ProfilePage />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App