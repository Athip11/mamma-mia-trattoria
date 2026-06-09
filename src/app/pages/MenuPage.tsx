import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';

export default function MenuPage() {
  const menuCategories = [
    {
      title: 'Antipasti',
      description: 'Traditional Italian starters',
      items: [
        { name: 'Bruschetta Classica', description: 'Toasted bread with tomatoes, basil, and olive oil', price: '$12' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil', price: '$14' },
        { name: 'Arancini', description: 'Fried rice balls with mozzarella', price: '$11' },
      ],
    },
    {
      title: 'Pizza',
      description: 'Wood-fired Neapolitan style',
      items: [
        { name: 'Margherita', description: 'San Marzano tomatoes, mozzarella, fresh basil', price: '$18' },
        { name: 'Quattro Formaggi', description: 'Four cheese blend on white sauce', price: '$22' },
        { name: 'Diavola', description: 'Spicy salami, mozzarella, chili oil', price: '$20' },
        { name: 'Prosciutto e Rucola', description: 'Prosciutto, arugula, parmesan', price: '$24' },
      ],
    },
    {
      title: 'Pasta',
      description: 'Handmade daily',
      items: [
        { name: 'Spaghetti Carbonara', description: 'Eggs, pecorino, guanciale, black pepper', price: '$22' },
        { name: 'Fettuccine Alfredo', description: 'Cream, butter, parmesan', price: '$20' },
        { name: 'Penne Arrabbiata', description: 'Spicy tomato sauce, garlic, chili', price: '$19' },
        { name: 'Lasagna della Nonna', description: 'Traditional meat lasagna', price: '$23' },
      ],
    },
    {
      title: 'Secondi',
      description: 'Main courses',
      items: [
        { name: 'Pollo alla Parmigiana', description: 'Breaded chicken, tomato sauce, mozzarella', price: '$26' },
        { name: 'Osso Buco', description: 'Braised veal shanks with risotto', price: '$38' },
        { name: 'Branzino al Forno', description: 'Oven-roasted sea bass, lemon, herbs', price: '$32' },
      ],
    },
    {
      title: 'Dolci',
      description: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic coffee-soaked dessert', price: '$10' },
        { name: 'Panna Cotta', description: 'Vanilla cream with berry compote', price: '$9' },
        { name: 'Cannoli', description: 'Sicilian pastry with sweet ricotta', price: '$8' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 border-b border-[rgba(94,95,91,0.1)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-6">OUR MENU</p>
            <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[-1.28px] leading-tight mb-6">
              Authentic Italian Cuisine
            </h1>
            <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
              Every dish is crafted with care using traditional recipes passed down through generations.
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 space-y-16 lg:space-y-24">
            {menuCategories.map((category, idx) => (
              <div key={idx}>
                <div className="mb-8 sm:mb-12">
                  <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl sm:text-3xl lg:text-[40px] mb-2">
                    {category.title}
                  </h2>
                  <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base italic">
                    {category.description}
                  </p>
                  <div className="w-16 h-px bg-[#c7a66a] mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-[rgba(94,95,91,0.1)] pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-['EB_Garamond'] text-[#5e5f5b] text-base sm:text-lg font-semibold">
                          {item.name}
                        </p>
                        <span className="font-['EB_Garamond'] text-[#9c7a3e] text-base sm:text-lg font-semibold ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#f7f3f1] border-t border-[rgba(94,95,91,0.1)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl sm:text-3xl lg:text-[32px] mb-6">
              Ready to Experience Our Kitchen?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="px-8 py-3 bg-[#c7a66a] border border-[#9c7a3e] text-[#241c16] font-['Inter'] text-sm tracking-[1.2px] hover:bg-[#b89660] transition-colors text-center"
              >
                Book a Table
              </Link>
              <Link
                to="/order"
                className="px-8 py-3 border border-[#a39d95] text-[#241c16] font-['Inter'] text-sm tracking-[1.2px] hover:bg-white transition-colors text-center"
              >
                Order Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
