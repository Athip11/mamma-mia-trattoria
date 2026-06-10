import Header from '../components/Header';
import Footer from '../components/Footer';
import { useMemo, useState } from 'react';
import { ReceiptText } from 'lucide-react';

type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
};

type CartItem = MenuItem & {
  quantity: number;
};

const menuItems: MenuItem[] = [
  {
    id: 'margherita',
    name: 'Margherita Pizza',
    price: 18,
    description: 'San Marzano tomatoes, mozzarella, fresh basil',
    category: 'Wood-Fired Pizza',
  },
  {
    id: 'diavola',
    name: 'Diavola Pizza',
    price: 20,
    description: 'Spicy salami, mozzarella, chili oil',
    category: 'Wood-Fired Pizza',
  },
  {
    id: 'carbonara',
    name: 'Spaghetti Carbonara',
    price: 22,
    description: 'Eggs, pecorino, guanciale, black pepper',
    category: 'House Pasta',
  },
  {
    id: 'lasagna',
    name: 'Lasagna della Nonna',
    price: 23,
    description: 'Traditional meat lasagna baked for the table',
    category: 'House Pasta',
  },
  {
    id: 'caprese',
    name: 'Caprese Salad',
    price: 14,
    description: 'Fresh mozzarella, tomatoes, basil, olive oil',
    category: 'To Share',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    price: 10,
    description: 'Classic coffee-soaked dessert, chilled to order',
    category: 'Dessert',
  },
];

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const addToCart = (item: MenuItem) => {
    setSubmitted(false);
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);

      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setSubmitted(false);
    setCart(prev =>
      prev
        .map(item => (item.id === id ? { ...item, quantity } : item))
        .filter(item => item.quantity > 0)
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main id="main-content" className="flex-1">
        <section className="py-12 sm:py-16 lg:py-24 border-b border-[rgba(94,95,91,0.1)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-6">
              ONLINE ORDERING FOR DINE-IN
            </p>
            <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[-1.28px] leading-tight mb-6">
              Order From Your Table
            </h1>
            <p className="font-['EB_Garamond'] text-[#464742] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
              Scan, choose, and send your meal straight to the kitchen while you relax in the dining room.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f3f1] border-y border-[rgba(94,95,91,0.1)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="mb-8">
                  <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-3">
                    Table Menu
                  </p>
                  <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl sm:text-3xl lg:text-[40px]">
                    Add dishes for dine-in
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.map(item => (
                    <div key={item.id} className="bg-[#fcf8f7] border border-[#e5e2e0] rounded p-6">
                      <p className="font-['Inter'] text-[#9c7a3e] text-[11px] tracking-[1.2px] uppercase mb-3">
                        {item.category}
                      </p>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl">
                          {item.name}
                        </h3>
                        <span className="font-['EB_Garamond'] text-[#9c7a3e] text-lg font-medium">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base mb-5">
                        {item.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="w-full min-h-[48px] flex items-center justify-center px-4 py-2 border border-[#c7a66a] text-[#5e5f5b] font-['Inter'] text-xs tracking-[1.2px] transition-all duration-150 hover:bg-[#c7a66a] hover:text-white active:translate-y-px active:bg-[#9c7a3e] active:border-[#9c7a3e] active:text-white"
                      >
                        Add to Table Order
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4">
                <form onSubmit={handleSubmit} className="bg-[#fcf8f7] border border-[#e5e2e0] rounded-lg p-6 lg:sticky lg:top-28">
                  <div className="flex items-center gap-3 mb-6">
                    <ReceiptText className="w-6 h-6 text-[#9c7a3e]" />
                    <h2 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-2xl">
                      Table Order
                    </h2>
                  </div>

                  {submitted && (
                    <div className="border border-[#c7a66a] bg-[#f7f1e7] px-4 py-3 font-['EB_Garamond'] text-[#5e5f5b] text-sm mb-5">
                      Order sent for table {tableNumber}. Our kitchen will begin preparing it for dine-in service.
                    </div>
                  )}

                  <label htmlFor="tableNumber" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    Table Number *
                  </label>
                  <input
                    id="tableNumber"
                    name="tableNumber"
                    type="text"
                    required
                    value={tableNumber}
                    onChange={event => {
                      setSubmitted(false);
                      setTableNumber(event.target.value);
                    }}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a] mb-5"
                    placeholder="e.g. 12"
                  />

                  <div className="space-y-4 mb-6">
                    {cart.length === 0 ? (
                      <p className="font-['EB_Garamond'] text-[#67645c] text-sm">
                        Your table order is empty. Add dishes from the menu to begin.
                      </p>
                    ) : (
                      cart.map(item => (
                        <div key={item.id} className="border-b border-[rgba(94,95,91,0.1)] pb-4">
                          <div className="flex justify-between gap-4 mb-3">
                            <div>
                              <h3 className="font-['EB_Garamond'] text-[#5e5f5b] text-base">
                                {item.name}
                              </h3>
                              <p className="font-['Inter'] text-[#9c7a3e] text-xs">
                                ${item.price} each
                              </p>
                            </div>
                            <p className="font-['EB_Garamond'] text-[#5e5f5b] text-base">
                              ${item.price * item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-12 h-12 flex items-center justify-center border border-[#c7a66a] text-[#5e5f5b] transition-all duration-150 hover:bg-[#f7f1e7] hover:border-[#9c7a3e] active:translate-y-px active:bg-[#c7a66a] active:text-white"
                              aria-label={`Remove one ${item.name}`}
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-['Inter'] text-sm text-[#464742]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-12 h-12 flex items-center justify-center border border-[#c7a66a] text-[#5e5f5b] transition-all duration-150 hover:bg-[#f7f1e7] hover:border-[#9c7a3e] active:translate-y-px active:bg-[#c7a66a] active:text-white"
                              aria-label={`Add one ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <label htmlFor="orderNotes" className="block font-['EB_Garamond'] text-[#5e5f5b] text-lg mb-2">
                    Table Notes
                  </label>
                  <textarea
                    id="orderNotes"
                    name="orderNotes"
                    rows={3}
                    value={notes}
                    onChange={event => {
                      setSubmitted(false);
                      setNotes(event.target.value);
                    }}
                    className="w-full px-4 py-3 border border-[#e5e2e0] bg-white font-['EB_Garamond'] text-[#464742] focus:border-[#c7a66a] focus:outline-none focus:ring-1 focus:ring-[#c7a66a] resize-none mb-5"
                    placeholder="Allergies, course timing, extra plates..."
                  />

                  <div className="flex justify-between items-center border-t border-[rgba(94,95,91,0.1)] pt-5 mb-5">
                    <span className="font-['Inter'] text-[#67645c] text-xs tracking-[1.2px] uppercase">
                      Table Total
                    </span>
                    <span className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl">
                      ${total}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className="w-full min-h-[48px] flex items-center justify-center px-8 py-3 bg-[#c7a66a] border border-[#9c7a3e] text-white font-['Inter'] text-sm tracking-[1.2px] transition-all duration-150 hover:bg-[#b89660] active:translate-y-px active:bg-[#9c7a3e] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0"
                  >
                    Send Order to Kitchen
                  </button>

                  <p className="font-['EB_Garamond'] text-[#67645c] text-xs text-center mt-4">
                    Payment can be added to your table check when you are ready.
                  </p>
                </form>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
