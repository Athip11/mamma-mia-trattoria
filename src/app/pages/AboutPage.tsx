import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import imgFreshIngredients from '../../imports/OurStoryMammaMiaTrattoria/1f7a18c065754713da528cdfe69b1aa981865c29.png';
import svgPaths from '../../imports/OurStoryMammaMiaTrattoria/svg-lwnr5cl72z';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8f7] pb-20 lg:pb-0">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <p className="font-['Inter'] text-[#9c7a3e] text-xs tracking-[2.4px] uppercase mb-6">OUR STORY</p>
            <h1 className="font-['EB_Garamond'] text-[#5e5f5b] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[-1.28px] leading-tight mb-8">
              Passed down from our Nonna,
              <br className="hidden sm:block" />
              our recipes have stayed the same
              <br className="hidden sm:block" />
              since 1982.
            </h1>
            <div className="w-16 h-px bg-[#c7a66a] mx-auto"></div>
          </div>
        </section>

        {/* Editorial Two-Column Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content - Order reversed on mobile */}
              <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
                <div>
                  <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl sm:text-3xl lg:text-[32px] leading-[41.6px] mb-4">
                    The Heart of the Kitchen
                  </h2>
                  <div className="w-8 h-px bg-[#9c7a3e]"></div>
                </div>

                <p className="font-['EB_Garamond'] text-[#464742] text-lg sm:text-xl leading-relaxed">
                  Every great meal begins with the land. We believe that true Italian cooking is about restraint—allowing the quality of the ingredients to speak for themselves. That's why we source our tomatoes and cheese from local family-owned dairies and farms.
                </p>

                <p className="font-['EB_Garamond'] text-[#67645c] text-sm sm:text-base leading-relaxed">
                  For over forty years, our commitment to authenticity hasn't wavered. The dough you taste is kneaded by hand every morning, following the exact proportions our founder brought with her from Naples. It is a slow, deliberate process, rooted in tradition and respect for the craft.
                </p>

                <div className="pt-6 border-t border-[rgba(156,122,62,0.2)]">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 font-['Inter'] text-[#5e5f5b] text-xs tracking-[1.2px] hover:gap-3 transition-all"
                  >
                    <span>Explore Our Menu</span>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 9.33333 9.33333">
                      <path d={svgPaths.pce77c00} fill="#5E5F5B" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Image with Heritage Badge */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-[#e8e2d8] rounded translate-x-4 translate-y-4 -z-10"></div>
                <div className="relative">
                  <img
                    src={imgFreshIngredients}
                    alt="Fresh Italian ingredients"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded border border-[#e5e2e0] shadow-sm"
                  />
                  {/* Heritage Marker */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#fcf8f7] rounded-xl border border-[#c7a66a] shadow-lg flex flex-col items-center justify-center p-4">
                    <p className="font-['Inter'] text-[#9c7a3e] text-[10px] sm:text-xs leading-tight text-center mb-1">Est.</p>
                    <p className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-lg sm:text-2xl leading-tight text-center">1982</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredient Showcase Section */}
        <section className="bg-[#f7f3f1] border-t border-[rgba(94,95,91,0.05)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-['EB_Garamond'] text-[#5e5f5b] text-2xl sm:text-3xl lg:text-[32px] leading-[41.6px] mb-4">
                Sourced with Intention
              </h2>
              <p className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base max-w-[672px] mx-auto">
                Our relationships with local purveyors are as old as our recipes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Fresh Produce */}
              <div className="bg-[#fcf8f7] border border-[#e5e2e0] rounded p-6 sm:p-8 shadow-sm">
                <div className="w-6 h-5 mb-4">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 25 20">
                    <path d={svgPaths.p19a21920} fill="#9C7A3E" />
                  </svg>
                </div>
                <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl mb-2">
                  Fresh Produce
                </h3>
                <p className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base leading-relaxed">
                  Daily deliveries of seasonal vegetables from organic farms within a 50-mile radius.
                </p>
              </div>

              {/* Artisan Olive Oil */}
              <div className="bg-[#fcf8f7] border border-[#e5e2e0] rounded p-6 sm:p-8 shadow-sm">
                <div className="w-5 h-6 mb-4">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 25">
                    <path d={svgPaths.p17c33a80} fill="#9C7A3E" />
                  </svg>
                </div>
                <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl mb-2">
                  Artisan Olive Oil
                </h3>
                <p className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base leading-relaxed">
                  Cold-pressed, single-estate olive oil imported directly from a small grove in Tuscany.
                </p>
              </div>

              {/* Handmade Dough */}
              <div className="bg-[#fcf8f7] border border-[#e5e2e0] rounded p-6 sm:p-8 shadow-sm sm:col-span-2 lg:col-span-1">
                <div className="w-7 h-4 mb-4">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 27.5 17.5">
                    <path d={svgPaths.p141ee400} fill="#9C7A3E" />
                  </svg>
                </div>
                <h3 className="font-['EB_Garamond'] font-medium text-[#5e5f5b] text-xl sm:text-2xl mb-2">
                  Handmade Dough
                </h3>
                <p className="font-['EB_Garamond'] text-[#464742] text-sm sm:text-base leading-relaxed">
                  Proofed for 48 hours to ensure the perfect, airy crust characteristic of true Neapolitan style.
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
