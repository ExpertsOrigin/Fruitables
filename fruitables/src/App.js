import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import ShopDetails from './Components/ShopDetails';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut'
import Testimonial from './Components/Testimonial'
import Myerror from './Components/Myerror'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/home" element={<Home/>}>
          </Route>

          <Route exact path="/shop" element={<Shop/>}>
          </Route>

          <Route exact path="/shopDetails" element={<ShopDetails />}>
          </Route>

          {/* <Route exact path="/pages" element={<Cart/>}>
          </Route>  */}


          
          <Route exact path="/cart" element={<Cart />}>
          </Route>

          <Route exact path="/chackout" element={<CheckOut />}>
          </Route>

          <Route exact path="/testimonial" element={<Testimonial />}>
          </Route>

          <Route exact path="/myerror" element={<Myerror />}>
          </Route>

          
          <Route exact path="/Contact" element={<Contact />}>
          </Route>

       
          

        </Routes>

        <Footer />
      </Router>


    </>
  );
}

export default App;
