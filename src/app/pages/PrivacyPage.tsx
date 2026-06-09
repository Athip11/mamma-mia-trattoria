import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-4 sm:px-8 lg:px-16">
            <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-6">
              PRIVACY POLICY
            </p>
            <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl sm:text-4xl lg:text-[56px] tracking-[-1.12px] leading-tight mb-8">
              Your Information
            </h1>
            <div className="space-y-6 font-['EB_Garamond'] text-[#464742] text-base sm:text-lg leading-relaxed">
              <p>
                Mamma Mia Trattoria collects only the information needed to respond to reservations, contact requests, and orders.
              </p>
              <p>
                We do not sell personal information. Contact details are used to confirm bookings, answer questions, and provide restaurant service updates.
              </p>
              <p>
                For privacy questions or requests, please call us at (555) 123-4567 or visit us at 78 Oakwood Drive.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
