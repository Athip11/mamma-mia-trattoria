import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';
import ReservationsPage from './pages/ReservationsPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
