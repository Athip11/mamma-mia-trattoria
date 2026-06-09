import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (submitted) {
      setSubmitted(false);
    }

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 border-b border-[rgba(94,95,91,0.1)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-6">RESERVE A TABLE</p>
            <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[-1.28px] leading-tight mb-6">
              Join Us for a Meal
            </h1>
            <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
              Whether it's a quiet dinner for two or a celebration with the whole family, we're here to make your evening special.
            </p>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-4 sm:px-8 lg:px-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="border border-[#c7a66a] bg-[#f7f1e7] px-4 py-3 font-['EB_Garamond'] text-[#5e5f5b] text-base">
                  Thank you, {formData.name}. Your reservation request has been received. We will confirm by email or phone shortly.
                </div>
              )}

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    Email *
                  </label>
                  <input
                    type="text"
                    inputMode="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="flex items-center gap-2 font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    <Calendar className="w-4 h-4" />
                    Date *
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d{4}-\d{2}-\d{2}"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="flex items-center gap-2 font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    <Clock className="w-4 h-4" />
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                  >
                    <option value="">Select</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="flex items-center gap-2 font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    <Users className="w-4 h-4" />
                    Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="occasion" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                  Special Occasion (Optional)
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a]"
                >
                  <option value="">None</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date Night</option>
                  <option value="business">Business Dinner</option>
                  <option value="other">Other Celebration</option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="notes" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a] resize-none"
                  placeholder="Dietary restrictions, seating preferences, etc."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#c7a66a] border border-[#9c7a3e] text-white font-['Inter'] text-sm tracking-[1.2px] hover:bg-[#b89660] transition-colors"
              >
                Reserve Table
              </button>

              <p className="text-center font-['EB_Garamond'] text-[#67645c] text-sm">
                For parties larger than 10, please call us at{' '}
                <a href="tel:5551234567" className="text-[#9c7a3e] hover:underline">
                  (555) 123-4567
                </a>
              </p>
            </form>
          </div>
        </section>

        {/* Info Cards */}
        <section className="bg-[#f7f3f1] border-t border-[rgba(94,95,91,0.1)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl mb-2">
                  Confirmation
                </h3>
                <p className="font-['EB_Garamond'] text-[#67645c] text-sm">
                  You'll receive a confirmation email and text message
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl mb-2">
                  Cancellation
                </h3>
                <p className="font-['EB_Garamond'] text-[#67645c] text-sm">
                  Please notify us 24 hours in advance if plans change
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl mb-2">
                  Walk-Ins Welcome
                </h3>
                <p className="font-['EB_Garamond'] text-[#67645c] text-sm">
                  We always try to accommodate guests without reservations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
