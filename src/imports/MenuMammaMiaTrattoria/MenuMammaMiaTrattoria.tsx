import svgPaths from "./svg-jbpo4u16aw";

function LinkBrandLogo() {
  return (
    <div className="h-[41.59px] relative shrink-0 w-[259.5px]" data-name="Link - Brand Logo">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#5e5f5b] text-[32px] top-[20px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[41.6px]">Mamma Mia Trattoria</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[38.97px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#464742] text-[12px] top-[6.5px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">Home</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[73.11px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] not-italic text-[#464742] text-[12px] top-[6.5px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">About</p>
      </div>
    </div>
  );
}

function LinkActiveNavigation() {
  return (
    <div className="h-[19.39px] opacity-80 relative shrink-0 w-[37.66px]" data-name="Link - Active Navigation">
      <div aria-hidden className="absolute border-[#5e5f5b] border-b border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#5e5f5b] text-[12px] top-[6.5px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">Menu</p>
      </div>
    </div>
  );
}

function LinkActiveNavigationMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link - Active Navigation:margin">
      <LinkActiveNavigation />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[86.31px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] not-italic text-[#464742] text-[12px] top-[6.5px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">Contact</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[71.08px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] not-italic text-[#464742] text-[12px] top-[6.5px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">Order</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="h-[14.39px] relative shrink-0 w-[122.27px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[32px] not-italic text-[#464742] text-[12px] top-[6.5px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">Reservations</p>
      </div>
    </div>
  );
}

function DesktopNavigation() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Desktop Navigation">
      <Link />
      <LinkMargin />
      <LinkActiveNavigationMargin />
      <LinkMargin1 />
      <LinkMargin2 />
      <LinkMargin3 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start pb-[13.39px] pt-[12px] px-[25px] relative shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(94,95,91,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e5f5b] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[14.4px]">Book a Table</p>
      </div>
    </div>
  );
}

function TrailingAction() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Trailing Action">
      <Link1 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] py-[16px] relative size-full">
          <LinkBrandLogo />
          <DesktopNavigation />
          <TrailingAction />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(252,248,247,0.9)] relative shrink-0 w-full z-[4]" data-name="TopNavBar">
      <div aria-hidden className="absolute border-[rgba(94,95,91,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px px-[40px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(94,95,91,0.7)] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[14.4px]">LA NOSTRA CUCINA</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[64px] text-center tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[70.4px]">Our Menu</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[9.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[32px] mb-0">Crafted with intention. Rooted in tradition. Prepared with ingredients sourced from</p>
        <p className="leading-[32px]">artisans who share our devotion to the craft.</p>
      </div>
    </div>
  );
}

function MenuHeader() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[15px] items-start left-1/2 max-w-[672px] top-[-1px] w-[641.62px]" data-name="Menu Header">
      <Container1 />
      <Heading />
      <Container2 />
    </div>
  );
}

function MenuHeaderMargin() {
  return (
    <div className="h-[252.78px] relative shrink-0 w-[1152px]" data-name="Menu Header:margin">
      <MenuHeader />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[41.59px] relative shrink-0 w-[225.16px]" data-name="Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[#5e5f5b] text-[32px] text-center top-[20px] whitespace-nowrap">
        <p className="leading-[41.6px]">Wood-Fired Pizzas</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(94,95,91,0.2)] bottom-[-16px] h-px left-1/2 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464742] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16.8px]">{`AVAILABLE IN 12" & 18"`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[743.38px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$-- / $--</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1b1b] text-[24px] top-[16.5px] whitespace-nowrap">
        <p className="leading-[33.6px]">Margherita</p>
      </div>
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">San Marzano tomato DOP, fresh mozzarella di bufala, basil, extra virgin olive oil.</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[743.38px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$-- / $--</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1b1b] text-[24px] top-[16.5px] whitespace-nowrap">
        <p className="leading-[33.6px]">Pepperoni</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Artisanal spicy pepperoni, hand-crushed tomatoes, fior di latte, hot honey drizzle.</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[8.01px] items-start relative shrink-0 w-full" data-name="Item">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[743.38px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$-- / $--</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1b1b] text-[24px] top-[16.5px] whitespace-nowrap">
        <p className="leading-[33.6px]">Truffle Mushroom</p>
      </div>
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Roasted wild mushrooms, fontina, thyme, finished with white truffle oil and pecorino.</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function SectionCategoryWoodFiredPizzas() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 right-0 top-0" data-name="Section - Category: Wood-Fired Pizzas">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19.721px] relative shrink-0 w-[16.461px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4614 19.7211">
          <path d={svgPaths.p1d58e800} fill="var(--fill-0, #5E5F5B)" fillOpacity="0.2" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute content-stretch flex h-[19.721px] items-start justify-center left-0 right-0 top-[515.95px]" data-name="Divider">
      <Container15 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[0.59px] relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5f5b] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[41.6px]">Family-Style Pastas</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(94,95,91,0.2)] bottom-[-16px] h-px left-1/2 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[12px] shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(94,95,91,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(94,95,91,0.7)] tracking-[1px] whitespace-nowrap">
        <p className="leading-[14px]">SERVES 4</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-[-0.5px]" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
        <p className="leading-[33.6px]">Baked Ziti</p>
      </div>
      <Border />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[778px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$--</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Rigatoni baked in a rich house-made marinara, layered with whipped ricotta and melted provolone.</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col gap-[8.01px] items-start relative shrink-0 w-full" data-name="Item">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[778px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$--</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1b1b] text-[24px] top-[16.5px] whitespace-nowrap">
        <p className="leading-[33.6px]">Giant Lasagna</p>
      </div>
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Twenty-four layers of fresh egg pasta, slow-braised beef bolognese, bechamel, and parmigiano reggiano.</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Item3 />
      <Item4 />
    </div>
  );
}

function SectionCategoryFamilyStylePastas() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 right-0 top-[658.95px]" data-name="Section - Category: Family-Style Pastas">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19.721px] relative shrink-0 w-[16.461px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4614 19.7211">
          <path d={svgPaths.p1d58e800} fill="var(--fill-0, #5E5F5B)" fillOpacity="0.2" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="absolute content-stretch flex h-[19.721px] items-start justify-center left-0 right-0 top-[1035.92px]" data-name="Divider">
      <Container24 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[0.59px] relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e5f5b] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[41.6px]">Kids Menu</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(94,95,91,0.2)] bottom-[-16px] h-px left-1/2 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[778px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$--</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1b1b] text-[24px] top-[16.5px] whitespace-nowrap">
        <p className="leading-[33.6px]">{`Mini Mac & Cheese`}</p>
      </div>
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Campanelle pasta folded into a creamy, mild cheddar sauce.</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[778px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[19.6px]">$--</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[33.59px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1b1b] text-[24px] top-[16.5px] whitespace-nowrap">
        <p className="leading-[33.6px]">Little Cheesy Pizza</p>
      </div>
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#464742] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">{`An 8" wood-fired crust with simple tomato sauce and mozzarella.`}</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Item5 />
      <Item6 />
    </div>
  );
}

function SectionCategoryKidsMenu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 right-0 top-[1178.92px]" data-name="Section - Category: Kids Menu">
      <Container25 />
      <Container26 />
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="h-[1435.89px] max-w-[800px] relative shrink-0 w-full" data-name="Menu Container">
      <SectionCategoryWoodFiredPizzas />
      <Divider />
      <SectionCategoryFamilyStylePastas />
      <Divider1 />
      <SectionCategoryKidsMenu />
    </div>
  );
}

function MenuContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Container:margin">
      <div className="content-stretch flex flex-col items-start px-[176px] relative size-full">
        <MenuContainer />
      </div>
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Main Canvas">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[0.01px] items-center px-[64px] py-[120px] relative size-full">
          <div className="absolute bg-gradient-to-b from-[#f7f3f1] h-[400px] left-0 right-0 to-[rgba(247,243,241,0)] top-0" data-name="Subtle Background Decorative Element" />
          <MenuHeaderMargin />
          <MenuContainerMargin />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5e5f5b] text-[24px] w-full">
        <p className="leading-[33.6px]">Mamma Mia Trattoria</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[250px] pb-[0.69px] relative shrink-0 w-[250px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#67645c] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px] mb-0">© 2024 Mamma Mia Trattoria. 78 Oakwood</p>
        <p className="leading-[16.8px]">Drive. Open 10 AM - 10 PM.</p>
      </div>
    </div>
  );
}

function BrandCopyright() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14.9px] items-start justify-self-stretch pb-[24.01px] relative row-1 self-start shrink-0" data-name="Brand & Copyright">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start pb-[0.8px] right-[-0.01px] top-[-1px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#67645c] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">Instagram</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start pb-[0.8px] right-[-0.01px] top-[23.79px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#67645c] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">Facebook</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start pb-[0.8px] right-[-0.01px] top-[48.59px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#67645c] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">TripAdvisor</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262px] pt-[16px] top-[74.39px]" data-name="Link:margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#67645c] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="col-3 h-[107.19px] justify-self-stretch relative row-1 shrink-0" data-name="Links">
      <Link2 />
      <Link3 />
      <Link4 />
      <LinkMargin4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_107.19px] max-w-[inherit] px-[64px] py-[120px] relative size-full">
        <BrandCopyright />
        <Links />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f7f3f1] relative shrink-0 w-full z-[2]" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(94,95,91,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-px px-[40px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[1280px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1280">
        <g clipPath="url(#clip0_1_905)" id="image">
          <path d={svgPaths.p38224540} fill="var(--fill-0, black)" id="Vector" opacity="0.02" />
        </g>
        <defs>
          <clipPath id="clip0_1_905">
            <rect fill="white" height="1280" width="1280" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0.01px_0] items-start overflow-clip pb-[1071.45px] z-[1]" data-name="image clip">
      <Image />
    </div>
  );
}

export default function MenuMammaMiaTrattoria() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Menu - Mamma Mia Trattoria">
      <TopNavBar />
      <MainCanvas />
      <Footer />
      <ImageClip />
    </div>
  );
}