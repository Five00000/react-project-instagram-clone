import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarComponent from './components/NavBarComponent'
import { Container, Row } from 'react-bootstrap';
import Posts from './Pages/Posts';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import FriendRequests from './Pages/FriendRequests';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';


function App() {

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Container >
        <Routes>
          <Route 
          path='/'
          element={<Posts />} 
          />
          <Route 
          path='friend-requests'
          element={<FriendRequests />} 
          />
          <Route 
          path='/profile'
          element={<Profile />} 
          />
          <Route 
          path='/settings'
          element={<Settings />} 
          />
          </Routes>
      </Container>
      
    </BrowserRouter>
  )
}

export default App
