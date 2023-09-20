import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Welcome from './pages/Welcome';
import AboutUs from './pages/AboutUs';
import FormPage from './pages/AirQualityForm';
import ResultPage from './pages/ResultPage';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';


const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100">
      <BrowserRouter>

      <Navbar />

        <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/airqualityform" element={<FormPage />} />
          <Route path='/resultpage' element={<ResultPage />} />

        </Routes>

        <Footer />

        <ToastContainer />

      </BrowserRouter>

    </div>
  )
};

export default App