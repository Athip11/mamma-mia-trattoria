import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#f7f3f1] border-t border-[rgba(94,95,91,0.1)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          <div className="space-y-4">
            <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl leading-[33.6px]">
              Mamma Mia Trattoria
            </h3>
            <p className="font-['EB_Garamond'] text-[#615e56] text-sm sm:text-base leading-[25.6px]">
              &copy; 2024 Mamma Mia Trattoria. 78 Oakwood Drive.
              <br />
              Open 10 AM - 10 PM.
            </p>
          </div>

          <div className="hidden md:block"></div>

          <div className="flex flex-col space-y-3 md:items-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] text-[#67645c] text-xs leading-[16.8px] underline hover:text-[#5e5f5b] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] text-[#67645c] text-xs leading-[16.8px] underline hover:text-[#5e5f5b] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] text-[#67645c] text-xs leading-[16.8px] underline hover:text-[#5e5f5b] transition-colors"
            >
              TripAdvisor
            </a>
            <Link
              to="/privacy"
              className="font-['Inter'] text-[#67645c] text-xs leading-[16.8px] underline hover:text-[#5e5f5b] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
