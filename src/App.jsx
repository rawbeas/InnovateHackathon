import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from "./pages/Main";
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { Station } from './pages/Station';
import Complains from './pages/Complains';
import Makecomplain from './pages/Makecomplain';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* auth */}
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* for admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:station" element={<Station />} />
          <Route path="/complaint" element={<Complains />} />
          {/* for normal user */}
          <Route path="/usercomplains" element={<Makecomplain />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </Router>

      
    </>
  );
}

export default App;
