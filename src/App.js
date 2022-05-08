import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import GetStarted from './Pages/GetStarted/GetStarted';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Recipes from './Pages/Recipes/Recipes';
import SignUp from './Pages/SignUp/SignUp';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import CalorieRequirement from './Pages/CalorieRequirement/CalorieRequirement';
import Profile from './Pages/Profile/Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/analysis" element={<CalorieRequirement />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
