// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignInUser from './pages/SignInUser';
import SignInAdmin from './pages/SignInAdmin';
import Register from './pages/Register';
import Profile from './pages/Profile';
import History from './pages/History';
import Favourites from './pages/Favourites';
import Accommodations from './pages/Accommodations';
import ViewAccommodation from './pages/ViewAccommodation';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import RateUs from './pages/RateUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin-user" element={<SignInUser />} />
          <Route path="/signin-admin" element={<SignInAdmin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/history" element={<History />} />
          <Route path="/profile/favourites" element={<Favourites />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/accommodations/view" element={<ViewAccommodation />} />
          <Route path="/accommodations/cart" element={<Cart />} />
          <Route path="/accommodations/payment" element={<Payment />} />
          <Route path="/accommodations/rate-us" element={<RateUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
