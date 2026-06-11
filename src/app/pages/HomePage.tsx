import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import imgHero from '../../imports/HomeMammaMiaTrattoria/9bae9a898be91d7a0bf22582322fb268eacf77d4.png';
import imgStory from '../../imports/HomeMammaMiaTrattoria/6cc354a59cb990d599d6a50ef351edee6ca4002c.png';
import imgTableUpdates from '../../imports/BlogGenerated/mamma-mia-updates.png';

const primaryLinks = [
  {
    eyebrow: 'MENU',
    title: 'Browse the house menu',
    detail: 'Pizza, pasta, share plates, dessert.',
    to: '/menu',
    action: 'VIEW MENU',
  },
  {
    eyebrow: 'ORDER',
    title: 'Send dishes to the kitchen',
    detail: 'Order from your table in minutes.',
    to: '/order',
    action: 'ORDER NOW',
  },
  {
    eyebrow: 'TABLE RESERVE',
    title: 'Reserve your next table',
    detail: 'Book dinner, birthdays, or Sunday lunch.',
    to: '/reservations',
    action: 'RESERVE TABLE',
  },
];

const featuredDishes = [
  {
    category: 'WOOD-FIRED',
    name: 'Margherita Pizza',
    detail: 'Tomato, mozzarella, basil.',
  },
  {
    category: 'HOUSE PASTA',
    name: 'Spaghetti Carbonara',
    detail: 'Pecorino, guanciale, black pepper.',
  },
  {
    category: 'FAMILY TABLE',
    name: 'Lasagna della Nonna',
    detail: 'Meat ragu, pasta, baked cheese.',
  },
  {
    category: 'DESSERT',
    name: 'Tiramisu',
    detail: 'Coffee-soaked, chilled to order.',
  },
];

type Review = {
  id: string;
  author: string;
  rating: number;
  quote: string;
};

const reviews: Review[] = [
  {
    id: 'review-1',
    quote: 'Warm room. Proper wood-fired edges.',
    author: 'Local guest',
    rating: 5,
  },
  {
    id: 'review-2',
    quote: 'Easy ordering. Pasta with care.',
    author: 'Family dinner',
    rating: 5,
  },
  {
    id: 'review-3',
    quote: 'Built for birthdays and Sunday lunches.',
    author: 'Regular table',
    rating: 4,
  },
];

const tableUpdates = [
  {
    category: 'FAMILY SPECIAL',
    date: 'JUN 16',
    title: 'Sunday Family Lunch',
    excerpt: 'Share lasagna, wood-fired pizza, salad, and tiramisu for the whole table.',
    action: 'RESERVE TABLE',
    to: '/reservations',
  },
  {
    category: 'SEASONAL DISH',
    date: 'JUN 19',
    title: 'Fresh Basil Pesto Week',
    excerpt: 'Handmade pasta tossed with basil pesto, toasted pine nuts, and pecorino.',
    action: 'VIEW MENU',
    to: '/menu',
  },
  {
    category: 'EVENT',
    date: 'JUN 22',
    title: 'Aperitivo Evening',
    excerpt: 'Small plates, spritzes, and relaxed Italian hours every Thursday evening.',
    action: 'PLAN VISIT',
    to: '/contact',
  },
];

const visitDetails = [
  ['OPEN DAILY', '10 AM - 10 PM'],
  ['SERVICE', 'Dine-in table ordering'],
  ['LOCATION', '78 Oakwood Drive'],
  ['GROUPS', 'Family tables welcome'],
];

const mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=-73.9937%2C40.7214%2C-73.9820%2C40.7294&layer=mapnik&marker=40.7254%2C-73.9878';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=78%20Oakwood%20Drive';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative min-h-[78vh] flex items-center overflow-hidden border-b border-[rgba(94,95,91,0.1)]">
          <div className="absolute inset-0">
            <img src={imgHero} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-[#fcf8f7]/55"></div>
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
            <div className="max-w-[760px]">
              <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-6">
                MAMMA MIA TRATTORIA
              </p>
              <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-4xl sm:text-5xl lg:text-[72px] tracking-[-1.28px] leading-tight mb-6">
                Italian dining made for the whole table.
              </h1>
              <p className="font-['EB_Garamond'] text-[#464742] text-lg sm:text-xl leading-[32px] max-w-[640px] mb-8">
                Wood-fired pizza. Handmade pasta. Easy table service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/order"
                  className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 bg-[#c7a66a] border border-[#9c7a3e] text-white text-center font-['Inter'] text-xs tracking-[1.2px] transition-all duration-150 hover:bg-[#b89660] active:translate-y-px active:bg-[#9c7a3e]"
                >
                  ORDER
                </Link>
                <Link
                  to="/reservations"
                  className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 border border-[#9c7a3e] text-[#5e5f5b] text-center font-['Inter'] text-xs tracking-[1.2px] transition-all duration-150 hover:bg-[#f7f1e7] active:translate-y-px active:bg-[#eadfcf]"
                >
                  TABLE RESERVE
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3f1] border-b border-[rgba(94,95,91,0.1)] py-10 sm:py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e5e2e0] bg-[#fcf8f7]">
              {visitDetails.map(([label, value]) => (
                <div key={label} className="p-5 border-b sm:border-r lg:border-b-0 border-[#e5e2e0] last:border-b-0 lg:last:border-r-0">
                  <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] mb-2">
                    {label}
                  </p>
                  <p className="font-['EB_Garamond'] text-[#5e5f5b] text-xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="max-w-[680px] mb-10">
              <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                START HERE
              </p>
              <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[44px] leading-tight mb-4">
                Start with what you need.
              </h2>
              <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg leading-relaxed">
                Menu, order, or table booking.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#e5e2e0]">
              {primaryLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group bg-[#fcf8f7] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#e5e2e0] last:border-b-0 lg:last:border-r-0 transition-colors hover:bg-[#f7f1e7]"
                >
                  <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] uppercase mb-4">
                    {item.eyebrow}
                  </p>
                  <h3 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl mb-3">
                    {item.title}
                  </h3>
                  <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base leading-relaxed mb-6">
                    {item.detail}
                  </p>
                  <span className="font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] border-b border-[#c7a66a] pb-1">
                    {item.action}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3f1] border-y border-[rgba(94,95,91,0.1)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                  OUR STORY
                </p>
                <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[44px] leading-tight mb-5">
                  Slow dough. Generous plates.
                </h2>
                <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg leading-relaxed mb-6">
                  A warm Italian room for pizza, pasta, and unhurried tables.
                </p>
                <Link
                  to="/about"
                  className="inline-flex font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] border-b border-[#c7a66a] pb-1 transition-colors hover:text-[#9c7a3e]"
                >
                  READ ABOUT US
                </Link>
              </div>

              <div className="lg:col-span-7">
                <img
                  src={imgStory}
                  alt="Fresh Italian ingredients"
                  className="w-full h-[320px] sm:h-[460px] lg:h-[560px] object-cover border border-[#e5e2e0]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="max-w-[680px]">
                <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                  FEATURED DISHES
                </p>
                <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[44px] leading-tight">
                  A quick taste of the menu.
                </h2>
              </div>
              <Link
                to="/menu"
                className="font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] border-b border-[#c7a66a] pb-1 transition-colors hover:text-[#9c7a3e]"
              >
                SEE FULL MENU
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-[#e5e2e0]">
              {featuredDishes.map((dish) => (
                <div key={dish.name} className="bg-[#fcf8f7] p-6 sm:p-8 border-b md:border-r border-[#e5e2e0] even:md:border-r-0 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                  <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] uppercase mb-3">
                    {dish.category}
                  </p>
                  <h3 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl mb-3">
                    {dish.name}
                  </h3>
                  <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base leading-relaxed">
                    {dish.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fcf8f7] border-y border-[rgba(94,95,91,0.1)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="max-w-[680px]">
                <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                  BLOG
                </p>
                <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[44px] leading-tight">
                  From our table.
                </h2>
              </div>
              <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg leading-relaxed max-w-[420px]">
                Family specials, seasonal plates, and small moments from the trattoria.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#e5e2e0]">
              <article className="lg:col-span-7 bg-[#f7f3f1] border-b lg:border-b-0 lg:border-r border-[#e5e2e0]">
                <div className="h-[260px] sm:h-[380px] overflow-hidden border-b border-[#e5e2e0]">
                  <img
                    src={imgTableUpdates}
                    alt="Italian pasta, pizza, basil, and olive oil on a trattoria table"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] uppercase mb-4">
                    {tableUpdates[0].category} / {tableUpdates[0].date}
                  </p>
                  <h3 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl leading-tight mb-4">
                    {tableUpdates[0].title}
                  </h3>
                  <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg leading-relaxed mb-6">
                    {tableUpdates[0].excerpt}
                  </p>
                  <Link
                    to={tableUpdates[0].to}
                    className="inline-flex font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] border-b border-[#c7a66a] pb-1 transition-colors hover:text-[#9c7a3e]"
                  >
                    {tableUpdates[0].action}
                  </Link>
                </div>
              </article>

              <div className="lg:col-span-5 grid grid-cols-1">
                {tableUpdates.slice(1).map((update) => (
                  <article key={update.title} className="bg-[#fcf8f7] p-6 sm:p-8 border-b border-[#e5e2e0] last:border-b-0">
                    <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] uppercase mb-4">
                      {update.category} / {update.date}
                    </p>
                    <h3 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl mb-3">
                      {update.title}
                    </h3>
                    <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base leading-relaxed mb-6">
                      {update.excerpt}
                    </p>
                    <Link
                      to={update.to}
                      className="inline-flex font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] border-b border-[#c7a66a] pb-1 transition-colors hover:text-[#9c7a3e]"
                    >
                      {update.action}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3f1] border-y border-[rgba(94,95,91,0.1)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                  GUEST NOTES
                </p>
                <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[40px] leading-tight mb-4">
                  Why guests return.
                </h2>
                <p className="font-['EB_Garamond'] text-[#464742] text-base leading-relaxed">
                  What people remember most.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 border border-[#e5e2e0] bg-[#fcf8f7]">
                {reviews.map((review) => (
                  <div key={review.id} className="p-6 border-b md:border-b-0 md:border-r border-[#e5e2e0] last:border-b-0 md:last:border-r-0">
                    <p className="font-['Inter'] text-[#9c7a3e] text-[12px] tracking-[2px]" aria-label={`${review.rating} out of 5 stars`}>
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </p>
                    <p className="font-['EB_Garamond'] text-[#464742] text-base leading-relaxed mb-5">
                      "{review.quote}"
                    </p>
                    <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] uppercase">
                      {review.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#e5e2e0]">
              <div className="bg-[#fcf8f7] p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#e5e2e0]">
                <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                  PLAN YOUR VISIT
                </p>
                <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[40px] leading-tight mb-5">
                  Open daily for dine-in.
                </h2>
                <div className="space-y-3 font-['EB_Garamond'] text-[#464742] text-base sm:text-lg">
                  <p>Monday - Sunday: 10 AM - 10 PM</p>
                  <p>78 Oakwood Drive</p>
                  <p>Table orders stay on one check.</p>
                </div>
              </div>

              <div className="bg-[#f7f3f1] p-6 sm:p-8 lg:p-10">
                <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-4">
                  NEXT STEP
                </p>
                <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl lg:text-[40px] leading-tight mb-6">
                  Directions, questions, table details.
                </h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:5551234567"
                    className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 bg-[#c7a66a] border border-[#9c7a3e] text-white text-center font-['Inter'] text-xs tracking-[1.2px] transition-all duration-150 hover:bg-[#b89660] active:translate-y-px active:bg-[#9c7a3e]"
                  >
                    CALL
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 border border-[#9c7a3e] text-[#5e5f5b] text-center font-['Inter'] text-xs tracking-[1.2px] transition-all duration-150 hover:bg-[#fcf8f7] active:translate-y-px active:bg-[#eadfcf]"
                  >
                    OPEN MAPS
                  </a>
                  <Link
                    to="/reservations"
                    className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-8 border border-[#9c7a3e] text-[#5e5f5b] text-center font-['Inter'] text-xs tracking-[1.2px] transition-all duration-150 hover:bg-[#fcf8f7] active:translate-y-px active:bg-[#eadfcf]"
                  >
                    RESERVE TABLE
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-x border-b border-[#e5e2e0] bg-[#f7f1e7] p-2 sm:p-3">
              <iframe
                title="Map to Mamma Mia Trattoria"
                src={mapUrl}
                className="h-[320px] w-full border-0 grayscale-[15%] contrast-[95%] sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
