import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main className="flex-1">
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
              {/* Contact Details */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl sm:text-4xl lg:text-[64px] tracking-[-1.28px] leading-tight mb-6">
                    Visit Us
                  </h1>
                  <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg lg:text-xl leading-relaxed">
                    Experience the warmth of our family kitchen. Whether you're planning a quiet dinner or a large celebration, we look forward to welcoming you.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#615e56] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl mb-1">
                        Location
                      </h3>
                      <p className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base">
                        78 Oakwood Drive, Suburbs
                      </p>
                      <p className="font-['Inter'] italic text-[#464742] text-xs mt-1">
                        Large family parking lot available
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#615e56] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl mb-1">
                        Hours
                      </h3>
                      <p className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base">
                        10:00 AM - 10:00 PM Daily
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#615e56] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:5551234567"
                        className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base hover:text-[#5e5f5b] transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-8 border-t border-[rgba(94,95,91,0.1)] space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                  <Link
                    to="/reservations"
                    className="px-8 py-3 bg-[#c7a66a] border border-[#9c7a3e] text-[#241c16] font-['Inter'] text-sm tracking-[1.2px] hover:bg-[#b89660] transition-colors text-center"
                  >
                    Book a Table
                  </Link>
                  <Link
                    to="/menu"
                    className="px-8 py-3 border border-[#a39d95] text-[#241c16] font-['Inter'] text-sm tracking-[1.2px] hover:bg-white transition-colors text-center"
                  >
                    View Family Deals
                  </Link>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-7">
                <div className="bg-[#f7f1e7] border border-[#e5e7eb] shadow-sm p-2 sm:p-3">
                  <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded overflow-hidden">
                    <iframe
                      title="Map to Mamma Mia Trattoria"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9937%2C40.7214%2C-73.9820%2C40.7294&layer=mapnik&marker=40.7254%2C-73.9878"
                      className="w-full h-full border-0 grayscale-[15%] contrast-[95%]"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(252,248,247,0.45)] via-[rgba(252,248,247,0)] to-[rgba(252,248,247,0)] pointer-events-none"></div>

                    {/* Map pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-center pointer-events-none">
                      <svg className="w-6 h-8 mx-auto drop-shadow-md" fill="none" viewBox="0 0 24 30">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 18 12 18s12-9 12-18c0-6.627-5.373-12-12-12z" fill="#9C7A3E" />
                      </svg>
                      <div className="mt-2 bg-[#fcf8f7] border border-[#e5e7eb] px-3 py-1 rounded shadow-sm">
                        <p className="font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] whitespace-nowrap">
                          Mamma Mia
                        </p>
                      </div>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute inset-2 sm:inset-3 border border-[rgba(94,95,91,0.1)] pointer-events-none">
                      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[rgba(94,95,91,0.3)]"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[rgba(94,95,91,0.3)]"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[rgba(94,95,91,0.3)]"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[rgba(94,95,91,0.3)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
