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
// import AccommodationCard from './pages/AccommodationCard';
// import ViewAccommodation from './pages/ViewAccommodation';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import RateUs from './pages/RateUs';
import AboutUs from './pages/AboutUs';
import NoPage from './pages/NoPage';
import RegisterAdmin from './pages/RegisterAdmin';
import AdminDashboard from './pages/AdminDashboard';
import AddAccommodation from './pages/AddAccommodation';
// import ViewAndManageAccommodationCard from './pages/ViewAndManageAccommodationCard';
import AdminProfile from './pages/AdminProfile';
import app from './firebaseConfig';
import AccommodationList from '../src/pages/AccommodationList';
import AccommodationDetails from '../src/pages/AccommodationDetails';




function App() {
  return (
   
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin-user" element={<SignInUser />} />
          <Route path="/signin-admin" element={<SignInAdmin />} />
          <Route path="/registeruser" element={<Register />} />
          <Route path='/registerAdmin' element={<RegisterAdmin/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/favourites" element={<Favourites />} />
          {/* <Route path="/AccommodationCard" element={<AccommodationCard />} />
          <Route path="/accommodationCard/view" element={<AccommodationDetails />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/Accommodation/payment" element={<Payment />} />
          <Route path="/Accommodation/rate-us" element={<RateUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* <Route path="/view-manage" element={<ViewAndManageAccommodationCard />} /> */}
          <Route path='/add-accommodation' element={<AddAccommodation/>}/>
          <Route path='admin-profile' element={<AdminProfile/>}/>
          <Route path='*' element={<NoPage/>}/>


          <Route path="/accommodationList" element={<AccommodationList />} />
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
 
  );
}

export default App;
